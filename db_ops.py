import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os

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
        print("Connected to SingleStore database here")

        # Create a new cursor
        cursor = connection.cursor()

        # Define the SQL query to create a table
        create_table_query = '''
        CREATE TABLE users (
            user_id INT AUTO_INCREMENT,
            username VARCHAR(50),
            email VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (user_id)
        );
        '''

        # Execute the query to create the table
        cursor.execute(create_table_query)
        print("Table 'users' created successfully")

        # Commit changes
        connection.commit()

except Error as e:
    print(f"Error: {e}")
# finally:
#     if connection.is_connected():
#         cursor.close()
#         connection.close()
#         print("MySQL connection is closed")
