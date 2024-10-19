import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File
import requests
from deepgram import DeepgramClient


# # load Deepgram API key

# load_dotenv()
# DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")
# FILE_PATH = "tempaudio/test.wav"


# # Define the URL and headers
# url = "https://api.deepgram.com/v1/listen"
# headers = {
#     "Authorization": f"Token {DEEPGRAM_API_KEY}",
#     "Content-Type": "audio/wav"
# }

# # Open and send the audio file
# with open(FILE_PATH, "rb") as audio_file:
#     response = requests.post(url, headers=headers, data=audio_file)

# # Output the response
# print(response.json())



# app = FastAPI()

# # load Deepgram API key

# load_dotenv()
# DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")
# FILE_PATH = "tempaudio/test.wav"


# # Define the URL and headers
# url = "https://api.deepgram.com/v1/listen"
# headers = {
#     "Authorization": f"Token {DEEPGRAM_API_KEY}",
#     "Content-Type": "audio/wav"
# }

# # Open and send the audio file
# with open(FILE_PATH, "rb") as audio_file:
#     response = requests.post(url, headers=headers, data=audio_file)

# # Output the response
# print(response.json())






# #testing server
# @app.get("/")
# async def root():
#     return {"message": "Hello plomp"}


# # Initialize Deepgram client
# deepgram = DeepgramClient(DEEPGRAM_API_KEY)

# # Prepare audio data
# with open(FILE_PATH, "rb") as file:
#     audio_data = file.read()

# # Call Deepgram API to transcribe the audio file
# response = deepgram.listen.prerecorded.v("1").transcribe_file({"buffer": audio_data})

# # Output the transcription
# print(response.to_json(indent=4))
