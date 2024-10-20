import mysql.connector
import pandas as pd
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import plotly.express as px
from app import router
import plotly.io as pio
import requests

# Load environment variables
load_dotenv()

# Database connection details
host = os.getenv("HOST")
port = os.getenv("PORT")
username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
database = os.getenv("DATABASE")



def df_extractor(baby_id):
    try:
        # Establish connection
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Correct baby_id from the table screenshot
            baby_id = baby_id  # Use the correct baby_id

            # Query to get height data for the specific baby_id
            height_query = '''
            SELECT height, log_date
            FROM height
            WHERE baby_id = %s
            ORDER BY log_date;
            '''

            # Query to get weight data for the same baby_id
            weight_query = '''
            SELECT weight, log_date
            FROM weight
            WHERE baby_id = %s
            ORDER BY log_date;
            '''

            sleep_query = '''
            SELECT sleep_duration, log_date
            FROM sleep
            WHERE baby_id = %s
            ORDER BY log_date;
            '''

            food_query = '''
            SELECT food, food_score
            FROM food 
            WHERE DATE(log_date) = CURDATE();
            '''

            sleep_last_7_days_query = '''
            SELECT sleep_duration, log_date
            FROM sleep
            WHERE baby_id = %s
            AND log_date >= CURDATE() - INTERVAL 7 DAY
            ORDER BY log_date ASC;
            '''

            sleep_today_query = '''
            SELECT sleep_duration, log_date
            FROM sleep
            WHERE baby_id = %s
            AND DATE(log_date) = CURDATE()
            ORDER BY log_date ASC;
            '''

            # Load height data into a DataFrame
            df_height = pd.read_sql(height_query, connection, params=(baby_id,))

            # Load weight data into a DataFrame
            df_weight = pd.read_sql(weight_query, connection, params=(baby_id,))

            df_sleep = pd.read_sql(sleep_query, connection, params=(baby_id,))

            df_food =  pd.read_sql(food_query, connection)

            df_sleep_week = pd.read_sql(sleep_last_7_days_query, connection, params=(baby_id,))

            df_sleep_today = pd.read_sql(sleep_today_query, connection, params=(baby_id, ))

            # Display the DataFrames to check if they contain the correct data
            # print("Height DataFrame:")
            # print(df_height)

            # print("Weight DataFrame:")
            #print(df_weight)

            return [df_height, df_weight, df_sleep, df_food, df_sleep_week, df_sleep_today]

            # Close the connection
            # connection.close()

    except mysql.connector.Error as e:
        print(f"Error: {e}")



@router.post("/genreate_height_graph")
def height_graph_generator():
    df_lst = df_extractor(2251799813685249)
    height_df = df_lst[0]
    fig_height = px.line(height_df, x='log_date', y='height', title='Height Progression Chart')
    save_folder = "baby-tracker/public/images"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "height_graph.png")
    fig_height.write_image(save_path)
    return {"message": f"Height graph saved at {save_path}"}


@router.post("/genreate_weight_graph")
def weight_graph_generator():
    df_lst = df_extractor(2251799813685249)
    weight_df = df_lst[1]
    fig_weight = px.line(weight_df, x='log_date', y='weight', title='Weight Progression Chart')
    save_folder = "baby-tracker/public/images"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "weight_graph.png")
    fig_weight.write_image(save_path)
    return {"message": f"Weight graph saved at {save_path}"}

@router.post("/genreate_sleep_graph")
def sleep_graph_generator():
    df_lst = df_extractor(2251799813685249)
    sleep_df = df_lst[2]
    fig_sleep = px.line(sleep_df, x='log_date', y='sleep_duration', title='Historical Sleep Graph')
    save_folder = "baby-tracker/public/images"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "sleep_graph.png")
    fig_sleep.write_image(save_path)
    return {"message": f"Sleep graph saved at {save_path}"}


@router.post("/generate_food_graph")
def food_graph_generator():
    df_lst = df_extractor(2251799813685249)
    food_df = df_lst[3]
    fig_food =  px.bar(food_df, x='food', y='food_score', title= "Overview of today's meals", labels={'food_score': 'Food Score', 'food': 'Food'})
    save_folder = "baby-tracker/public/images"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "food_graph.png")
    fig_food.write_image(save_path)
    return {"message": f"Food graph saved at {save_path}"}


@router.post("/generate_sleep_graph_weekly")
def sleep_week_graph_generator():
    # Extract data from the df_extractor function
    df_lst = df_extractor(2251799813685249)
    sleep_week_df = df_lst[4]  # Assuming df_lst[4] is the sleep DataFrame
    
    # Convert log_date to a datetime format if it's not already
    sleep_week_df['log_date'] = pd.to_datetime(sleep_week_df['log_date'])
    
    # Debugging: print the first few rows to check the data format
    print("Initial sleep_week_df:")
    print(sleep_week_df.head())

    # Extract just the date (ignore the time component)
    sleep_week_df['date'] = sleep_week_df['log_date'].dt.date
    
    # Debugging: print after extracting the date
    print("Sleep data with extracted date:")
    print(sleep_week_df[['date', 'sleep_duration']].head())

    # Group by date and sum the sleep_duration
    sleep_grouped = sleep_week_df.groupby('date', as_index=False)['sleep_duration'].sum()
    
    # Debugging: print the grouped data to verify it contains multiple rows
    print("Grouped sleep data by date:")
    print(sleep_grouped)

    # Generate the bar graph (ensure the x-axis shows only the date without time)
    fig_sleep_week = px.bar(sleep_grouped, x='date', y='sleep_duration', 
                            title="Sleep Pattern for the Week", 
                            labels={'date': 'Date', 'sleep_duration': 'Total Sleep Duration (Hours)'},
                            text='sleep_duration')

    # Save the figure as an image
    save_folder = "baby-tracker/public/images"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "fig_sleep_week.png")
    fig_sleep_week.write_image(save_path)
    
    return {"message": f"Sleep week graph saved at {save_path}"}