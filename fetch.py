from uagents import Agent, Context, Model
import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File
import requests
from google.cloud import vision 
 
# # Create an agent named Alice
# alice = Agent(name="alice", seed="boopty boop")
 
# # Define a periodic task for Alice
# @alice.on_interval(period=3.0)
# async def say_hello(ctx: Context):
#     ctx.logger.info(f'hello, my name is {alice.name}')
 
# # Run the agent
# if __name__ == "__main__":
#     alice.run() 
 

# # two agents talking
# class Message(Model):
#     message: str
 
 
# RECIPIENT_ADDRESS = (
#     "test-agent://agent1qd8ymq4najh5wycvhvhcw3l5lmkgkvkrqevrs6wpp5ll0khfdq6v2cq6859"
# )
 
# SenderAgent = Agent(
#     name="SenderAgent",
#     port=8000,
#     seed="SenderAgent secret phrase",
#     endpoint=["http://127.0.0.1:8000/submit"],
# )
 
# print(SenderAgent.address)
 
# @SenderAgent.on_interval(period=2.0)
# async def send_message(ctx: Context):
#     await ctx.send(RECIPIENT_ADDRESS, Message(message="Hi there. Let's start our conversation!"))
 
 
# @SenderAgent.on_message(model=Message)
# async def message_handler(ctx: Context, sender: str, msg: Message):
#     ctx.logger.info(f"Received message from {sender}: {msg.message}")
 
 
# if __name__ == "__main__":
#     SenderAgent.run()

import google.generativeai as genai
import os
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Write a story about a magic backpack.")
print(response.text)
