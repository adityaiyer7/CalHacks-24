import requests
from audioinput import * 
from text_filter import *
import ast

def api_caller():
    response = requests.post("http://127.0.0.1:8000/transcribe")
    response_lst = ast.literal_eval(response.text)
    return response_lst[0], response_lst[1]
   

transcription, creation_date = api_caller()
print(transcription)
gemini_output = extract_parameters(transcription)

print(gemini_output)

