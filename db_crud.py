
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


def update_user(username, user_email):

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
            insert_user_query = '''
                INSERT INTO users (username, email)
                VALUES (%s, %s);
            '''

            # Values to insert (e.g., user's name and email)
            user_data = (username, user_email)

            # Execute the query
            cursor.execute(insert_user_query, user_data)

            # Commit the changes
            connection.commit()

            # Retrieve the newly inserted user_id
            user_id = cursor.lastrowid
            print(f"New user added with user_id: {user_id}")

                # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")


def update_baby(parent_user_id, baby_name, dob):

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
            insert_baby_query = '''
                INSERT INTO baby (user_id, name, date_of_birth)
                VALUES (%s, %s, %s);
            '''

            baby_data = (parent_user_id, baby_name, dob)

            
            cursor.execute(insert_baby_query, baby_data)

            
            connection.commit()

        
            baby_id = cursor.lastrowid
            print(f"New baby added with baby_id: {baby_id}")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")

def update_height(baby_id, height):

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
            # Define the SQL query to insert height data
            insert_height_query = '''
                INSERT INTO height (baby_id, height)
                VALUES (%s, %s);
            '''

            # Values to insert (use the baby_id and the height value)
            height_data = (baby_id, height)

            # Execute the query
            cursor.execute(insert_height_query, height_data)

            # Commit the changes
            connection.commit()
            print("Height data added successfully")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")
    

def update_weight(baby_id, weight):

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
            # Define the SQL query to insert height data
            insert_weight_query = '''
                INSERT INTO weight (baby_id, weight)
                VALUES (%s, %s);
            '''

            # Values to insert (use the baby_id and the height value)
            weight_data = (baby_id, weight)

            # Execute the query
            cursor.execute(insert_weight_query, weight_data)

            # Commit the changes
            connection.commit()
            print("Weight data added successfully")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")

def update_sleep(baby_id, sleep_duration):

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
            # Define the SQL query to insert height data
            # Define the SQL query to insert sleep data
            insert_sleep_query = '''
                INSERT INTO sleep (baby_id, sleep_duration)
                VALUES (%s, %s);
            '''

            # Values to insert (use the baby_id and the sleep duration in hours)
            sleep_data = (baby_id, 6)

            # Execute the query
            cursor.execute(insert_sleep_query, sleep_data)

            # Commit the changes
            connection.commit()
            print("Sleep data added successfully")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")