import mysql.connector
import pandas as pd
from dotenv import load_dotenv
import os

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

            # Load height data into a DataFrame
            df_height = pd.read_sql(height_query, connection, params=(baby_id,))

            # Load weight data into a DataFrame
            df_weight = pd.read_sql(weight_query, connection, params=(baby_id,))

            # Display the DataFrames to check if they contain the correct data
            # print("Height DataFrame:")
            # print(df_height)

            # print("Weight DataFrame:")
            #print(df_weight)

            return [df_height, df_weight]

            # Close the connection
            # connection.close()

    except mysql.connector.Error as e:
        print(f"Error: {e}")


df_lst = df_extractor(2251799813685249)
height_df = df_lst[0]
weight_df = df_lst[1]
print(height_df)
print(weight_df)


import plotly.express as px

# Plot the height data
fig_height = px.line(height_df, x='log_date', y='height', title='Baby Height Over Time')
fig_height.show()

# Plot the weight data
fig_weight = px.line(weight_df, x='log_date', y='weight', title='Baby Weight Over Time')
fig_weight.show()

