import requests
from audioinput import * 
from text_filter import *
import ast
from db_crud import *
from db_ops import *

def api_caller():
    response = requests.post("http://127.0.0.1:8000/transcribe")
    response_lst = ast.literal_eval(response.text)
    return response_lst[0], response_lst[1]
   

transcription, creation_date = api_caller()
print(transcription)
gemini_output = extract_parameters(transcription)
processed_gemini_output = post_processing(gemini_output)
print(processed_gemini_output)

baby_id = 2251799813685249
update_weight(baby_id, processed_gemini_output['weight'])