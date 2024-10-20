from db_crud import update_user, update_baby, update_height, update_weight, update_sleep, extract_baby_id_from_name, get_user_id_by_email, get_baby_ids_by_user_id
from db_ops import *

# Assuming you have your update_height function already defined
import mysql.connector
from datetime import datetime

# Synthetic data from the DataFrame (you can also load the DataFrame if you saved it)
babyid = 2251799813685249
sleep_data = [
    # Initial sleep logs in April 2024
    {'baby_id': babyid, 'sleep': 50.40, 'log_date': '2024-04-19 00:00:00'},  # Birth
    {'baby_id': babyid, 'sleep': 50.50, 'log_date': '2024-04-29 00:00:00'},  # Sleep entry at the end of April
    
    # May 2024
    {'baby_id': babyid, 'sleep': 3.50, 'log_date': '2024-05-10 21:00:00'},   # 3.5 hours at night
    {'baby_id': babyid, 'sleep': 1.00, 'log_date': '2024-05-11 14:30:00'},   # 1 hour in the afternoon
    {'baby_id': babyid, 'sleep': 4.00, 'log_date': '2024-05-15 20:30:00'},   # 4 hours in the evening
    
    # June 2024
    {'baby_id': babyid, 'sleep': 2.00, 'log_date': '2024-06-05 12:00:00'},   # 2 hours at noon
    {'baby_id': babyid, 'sleep': 0.75, 'log_date': '2024-06-06 16:00:00'},   # 45 mins nap in the afternoon
    {'baby_id': babyid, 'sleep': 4.50, 'log_date': '2024-06-10 21:30:00'},   # 4.5 hours at night
    
    # July 2024
    {'baby_id': babyid, 'sleep': 1.50, 'log_date': '2024-07-02 13:00:00'},   # 1.5 hours in the afternoon
    {'baby_id': babyid, 'sleep': 3.00, 'log_date': '2024-07-08 22:00:00'},   # 3 hours at night
    {'baby_id': babyid, 'sleep': 2.25, 'log_date': '2024-07-15 17:00:00'},   # 2.25 hours early evening
    
    # August 2024
    {'baby_id': babyid, 'sleep': 1.00, 'log_date': '2024-08-03 15:00:00'},   # 1 hour nap
    {'baby_id': babyid, 'sleep': 4.00, 'log_date': '2024-08-12 21:00:00'},   # 4 hours at night
    {'baby_id': babyid, 'sleep': 2.50, 'log_date': '2024-08-20 23:30:00'},   # 2.5 hours late night sleep
    
    # September 2024
    {'baby_id': babyid, 'sleep': 2.00, 'log_date': '2024-09-05 13:30:00'},   # 2 hours midday nap
    {'baby_id': babyid, 'sleep': 1.50, 'log_date': '2024-09-12 19:00:00'},   # 1.5 hours early evening nap
    {'baby_id': babyid, 'sleep': 3.50, 'log_date': '2024-09-18 22:00:00'},   # 3.5 hours nighttime sleep
    
    # October 2024
    {'baby_id': babyid, 'sleep': 6.50, 'log_date': '2024-10-14 16:00:00'},  # Sleep on October 14
    {'baby_id': babyid, 'sleep': 5.00, 'log_date': '2024-10-15 19:30:00'},  # Sleep on October 15
    {'baby_id': babyid, 'sleep': 4.75, 'log_date': '2024-10-16 21:00:00'},  # Sleep on October 16
    {'baby_id': babyid, 'sleep': 3.50, 'log_date': '2024-10-17 22:30:00'},  # Sleep on October 17
    {'baby_id': babyid, 'sleep': 7.00, 'log_date': '2024-10-18 15:00:00'},  # Sleep on October 18
    {'baby_id': babyid, 'sleep': 8.50, 'log_date': '2024-10-19 23:00:00'},  # Sleep on October 19
]

# Function to ingest data into the database
def ingest_sleep_data(data):
    for row in data:
        baby_id = row['baby_id']
        sleep = int(row['sleep'])
        log_date = row['log_date']  # Date is already in string format

        # Call the update_height function with baby_id, height, and the log_date as the timestamp
        update_sleep(baby_id, sleep, log_date)

# Ingest the data
ingest_sleep_data(sleep_data)