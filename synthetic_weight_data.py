from db_crud import update_user, update_baby, update_height, update_weight, update_sleep, extract_baby_id_from_name, get_user_id_by_email, get_baby_ids_by_user_id
from db_ops import *

# Assuming you have your update_height function already defined
import mysql.connector
from datetime import datetime

# Synthetic data from the DataFrame (you can also load the DataFrame if you saved it)
babyid = 2251799813685249
weight_data = [
    {'baby_id': babyid, 'weight': 3.2, 'log_date': '2024-04-19 00:00:00'},  # Birth weight
    {'baby_id': babyid, 'weight': 3.25, 'log_date': '2024-04-29 00:00:00'},  # Small increase
    {'baby_id': babyid, 'weight': 3.27, 'log_date': '2024-05-09 00:00:00'},  # Minor fluctuation
    {'baby_id': babyid, 'weight': 3.22, 'log_date': '2024-05-19 00:00:00'},  # Slight decrease
    {'baby_id': babyid, 'weight': 3.30, 'log_date': '2024-05-29 00:00:00'},  # Gradual increase
    {'baby_id': babyid, 'weight': 3.38, 'log_date': '2024-06-08 00:00:00'},  # Steady growth
    {'baby_id': babyid, 'weight': 3.35, 'log_date': '2024-06-18 00:00:00'},  # Minor decrease
    {'baby_id': babyid, 'weight': 3.40, 'log_date': '2024-06-28 00:00:00'},  # Increase again
    {'baby_id': babyid, 'weight': 3.45, 'log_date': '2024-07-08 00:00:00'},  # Small gain
    {'baby_id': babyid, 'weight': 3.42, 'log_date': '2024-07-18 00:00:00'},  # Small loss
    {'baby_id': babyid, 'weight': 3.48, 'log_date': '2024-07-28 00:00:00'},  # Gain
    {'baby_id': babyid, 'weight': 3.55, 'log_date': '2024-08-07 00:00:00'},  # Gain continues
    {'baby_id': babyid, 'weight': 3.50, 'log_date': '2024-08-17 00:00:00'},  # Small dip
    {'baby_id': babyid, 'weight': 3.57, 'log_date': '2024-08-27 00:00:00'},  # Gain again
    {'baby_id': babyid, 'weight': 3.60, 'log_date': '2024-09-06 00:00:00'},  # Small increase
    {'baby_id': babyid, 'weight': 3.55, 'log_date': '2024-09-16 00:00:00'},  # Slight drop
    {'baby_id': babyid, 'weight': 3.62, 'log_date': '2024-09-26 00:00:00'},  # Recover the weight
    {'baby_id': babyid, 'weight': 3.65, 'log_date': '2024-10-06 00:00:00'},  # Steady increase
    {'baby_id': babyid, 'weight': 3.76, 'log_date': '2024-10-16 00:00:00'},  # Total weight gain ~560g
]

# Function to ingest data into the database
def ingest_weight_data(data):
    for row in data:
        baby_id = row['baby_id']
        weight = row['weight']
        log_date = row['log_date']  # Date is already in string format

        # Call the update_height function with baby_id, height, and the log_date as the timestamp
        update_weight(baby_id, weight, log_date)

# Ingest the data
ingest_weight_data(weight_data)
