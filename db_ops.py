import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv() 

gemini_api_key = os.getenv("API_KEY")

# Define your connection details
host = os.getenv("HOST")
port = os.getenv("PORT")
username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
database = os.getenv("DATABASE")

try:
    # Establish a connection to SingleStore
    connection = mysql.connector.connect(
        host=host,
        port=port,
        user=username,
        password=password,
        database=database
    )

    if connection.is_connected():
        print("Connected to SingleStore database")

        # Create a new cursor
        cursor = connection.cursor()

        # Define the SQL query to create the 'users' table
        create_users_table_query = '''
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT,
            username VARCHAR(50),
            email VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (user_id)
        );
        '''

        # Execute the query to create the 'users' table
        cursor.execute(create_users_table_query)
        print("Table 'users' created successfully")

        # Define the SQL query to create the 'baby' table
        create_baby_table_query = '''
        CREATE TABLE IF NOT EXISTS baby (
            baby_id BIGINT AUTO_INCREMENT,
            user_id BIGINT,
            name VARCHAR(50),
            date_of_birth DATE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (baby_id)
        );
        '''

        # Execute the query to create the 'baby' table
        cursor.execute(create_baby_table_query)
        print("Table 'baby' created successfully")

        # Define the SQL query to create the 'height' table
        create_height_table_query = '''
        CREATE TABLE IF NOT EXISTS height (
            log_id BIGINT AUTO_INCREMENT,
            baby_id BIGINT,
            height FLOAT,
            log_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (log_id)
        );
        '''

        # Execute the query to create the 'height' table
        cursor.execute(create_height_table_query)
        print("Table 'height' created successfully")

        # Define the SQL query to create the 'weight' table
        create_weight_table_query = '''
        CREATE TABLE IF NOT EXISTS weight (
            log_id BIGINT AUTO_INCREMENT,
            baby_id BIGINT,
            weight FLOAT,
            log_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (log_id)
        );
        '''

        # Execute the query to create the 'weight' table
        cursor.execute(create_weight_table_query)
        print("Table 'weight' created successfully")

        # Define the SQL query to create the 'sleep' table
        create_sleep_table_query = '''
        CREATE TABLE IF NOT EXISTS sleep (
            log_id BIGINT AUTO_INCREMENT,
            baby_id BIGINT,
            sleep_duration INT,  -- Duration in hours
            log_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (log_id)
        );
        '''
        # Execute the query to create the 'sleep' table
        cursor.execute(create_sleep_table_query)
        print("Table 'sleep' created successfully")

        # Commit changes
        connection.commit()

except Error as e:
    print(f"Error: {e}")
# finally:
#     if connection.is_connected():
#         cursor.close()
#         connection.close()
#         print("MySQL connection is closed")
