
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

print(host, port, username, password, database)


# Function to add a new user to the 'new_users' table
def add_new_user(new_user_name, email):
    try:
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():

            # Define the SQL query to insert a new user into the 'new_users' table
            cursor = connection.cursor()
            insert_user_query = '''
            INSERT INTO new_users (username, email)
            VALUES (%s, %s);
            '''
            
            # Execute the query and commit the changes
            cursor.execute(insert_user_query, (new_user_name, email))
            connection.commit()
            print(f"New user '{new_user_name}' added successfully")

    except Error as e:
        print(f"Error: {e}")


# Function to drop a table in SingleStore
def drop_table(table_name):
    try:
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():

            # Define the SQL query to drop a table
            cursor = connection.cursor()
            drop_table_query = f"DROP TABLE IF EXISTS {table_name};"
            
            # Execute the query
            cursor.execute(drop_table_query)
            connection.commit()
            print(f"Table '{table_name}' has been dropped (deleted).")

    except Error as e:
        print(f"Error: {e}")

# Usage example
drop_table('users')



# # Add a new user
# add_new_user("Batman", "batman.doe@example.com")
