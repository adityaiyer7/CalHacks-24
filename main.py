import requests
from audioinput import * 
from text_filter import *
import ast
from db_crud import update_user, update_baby, update_height, update_weight, update_sleep, extract_baby_id_from_name, get_user_id_by_email, get_baby_ids_by_user_id
from db_ops import *

def api_caller():
    response = requests.post("http://127.0.0.1:8000/transcribe")
    response_lst = ast.literal_eval(response.text)
    return response_lst[0], response_lst[1]
   

def processed_text(transcription):
    gemini_output = extract_parameters(transcription)
    processed_gemini_output = post_processing(gemini_output)
    print(processed_gemini_output)
    return processed_gemini_output


def weight_updater(baby_id, processed_gemini_output):
    update_weight(baby_id, processed_gemini_output['weight'])

def height_updater(baby_id, processed_gemini_output):
    update_height(baby_id, processed_gemini_output['height'])

def sleep_updater(baby_id, processed_gemini_output):
    update_sleep(baby_id, processed_gemini_output['sleep'])

def bool_marker(dict, parameter):
    if dict[parameter] > 0:
        return True
    else:
        return False

def main(baby_id):
    transcript, time_stamp = api_caller()
    gemini_dict = processed_text(transcript)
    print(gemini_dict)

    if bool_marker(gemini_dict, 'weight'):
        weight_updater(baby_id, gemini_dict)
    if bool_marker(gemini_dict, 'height'):
        height_updater(baby_id, gemini_dict)
    if bool_marker(gemini_dict, 'sleep'):
        sleep_updater(baby_id, gemini_dict)

email = 'batman@gothamcity.com'
user_id = get_user_id_by_email(email)
baby_id = get_baby_ids_by_user_id(user_id)

main(baby_id[0])



