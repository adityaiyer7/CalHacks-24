import mysql.connector
import pandas as pd
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import plotly.express as px
from app import router
import plotly.io as pio

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

            # Load height data into a DataFrame
            df_height = pd.read_sql(height_query, connection, params=(baby_id,))

            # Load weight data into a DataFrame
            df_weight = pd.read_sql(weight_query, connection, params=(baby_id,))

            df_sleep = pd.read_sql(sleep_query, connection, params=(baby_id,))

            # Display the DataFrames to check if they contain the correct data
            # print("Height DataFrame:")
            # print(df_height)

            # print("Weight DataFrame:")
            #print(df_weight)

            return [df_height, df_weight, df_sleep]

            # Close the connection
            # connection.close()

    except mysql.connector.Error as e:
        print(f"Error: {e}")



@router.get("/genreate_height_graph")
def height_graph_generator():
    df_lst = df_extractor(2251799813685249)
    height_df = df_lst[0]
    fig_height = px.line(height_df, x='log_date', y='height', title='Baby Height Over Time')
    save_folder = "plots"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "height_graph.png")
    fig_height.write_image(save_path)
    return {"message": f"Height graph saved at {save_path}"}


@router.get("/genreate_weight_graph")
def weight_graph_generator():
    df_lst = df_extractor(2251799813685249)
    weight_df = df_lst[1]
    fig_weight = px.line(weight_df, x='log_date', y='weight', title='Baby Weight Over Time')
    save_folder = "plots"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "weight_graph.png")
    fig_weight.write_image(save_path)
    return {"message": f"Weight graph saved at {save_path}"}

@router.get("/genreate_sleep_graph")
def sleep_graph_generator():
    df_lst = df_extractor(2251799813685249)
    sleep_df = df_lst[2]
    fig_sleep = px.line(sleep_df, x='log_date', y='sleep_duration', title='Baby Sleep Over Time')
    save_folder = "plots"
    os.makedirs(save_folder, exist_ok=True)
    save_path = os.path.join(save_folder, "sleep_graph.png")
    fig_sleep.write_image(save_path)
    return {"message": f"Sleep graph saved at {save_path}"}
