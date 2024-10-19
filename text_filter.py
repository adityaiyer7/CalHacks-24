import google.generativeai as genai
from dotenv import load_dotenv
import os
import ast
import re

load_dotenv() 


gemini_api_key = os.getenv("API_KEY")
input_text = "A small robotic pet, standing at just 50cm in height and weighs 20lbs, can bring joy to any household. Its compact design allows for easy portability, making it perfect for small spaces. Despite its size, it boasts advanced features, providing companionship and entertainment for children and adults alike."


def extract_parameters(input_text):
    genai.configure(api_key= gemini_api_key)

    prompt = f'''
    You're given some input text. Your job is to extract the following from the input text and return it as a dictionary:
    1. Height. 
    2. Weight. 
    Remove all units, I only want the corresponding number. If you don't find these parameters, mark their value as 0.  

    Here is the input text: {input_text}. 
    Remember, the return format should be open curly braces: height: value, weight: value close curly braces. Don't add anything before or after the curly braces. 
    '''

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    output = response.text
    print(output)

'''
This method takes in the output generated by Gemini and processesses into the required format.
Sometimes LLMs like to generate output that doesn't match the prompt exactly and here we clean that up. 
'''
def post_processing(output):
    if output[0] == '{' and output[-1] == '}':
        return ast.literal_eval(output)
    else:
        match = re.search(r'\{.*?\}', output)
        return ast.literal_eval(match)


'''This returns the height value from the dictionary. Will be used to store in DB'''
def extract_height(processed_output):
    return processed_output["height"]

'''This returns the weight value from the dictionary. Will be used to store in DB'''
def extract_weight(processed_output):
    return processed_output["weight"]