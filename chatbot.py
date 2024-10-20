import asyncio
import json
import aiofiles
import base64
import datetime
import os
from dotenv import load_dotenv
from hume.client import AsyncHumeClient
from hume.empathic_voice.chat.socket_client import ChatConnectOptions, ChatWebsocketConnection
from hume.empathic_voice.chat.types import SubscribeEvent
from hume.empathic_voice.types import UserInput
from hume.core.api_error import ApiError
from hume import MicrophoneInterface, Stream


## Authenticating EVI by instantiating Hume client with API key ##

async def main() -> None:
    # Retrieve any environment variables stored in the .env file
    load_dotenv()

    # Retrieve the API key, Secret key, and EVI config id from the environment variables
    HUME_API_KEY = os.getenv("HUME_API_KEY")
    HUME_SECRET_KEY = os.getenv("HUME_SECRET_KEY")
    #HUME_CONFIG_ID = os.getenv("HUME_CONFIG_ID")

    # Initialize the asynchronous client, authenticating with your API key
    client = AsyncHumeClient(api_key=HUME_API_KEY)

    # Define options for the WebSocket connection, such as an EVI config id and a secret key for token authentication
    options = ChatConnectOptions(secret_key=HUME_SECRET_KEY)
    # config_id=HUME_CONFIG_ID, 
    
    ## Connecting to EVI by setting up WebSocket connection ##

    # Instantiate the WebSocketInterface
    websocket_interface = WebSocketInterface()

    # Open the WebSocket connection with the configuration options and the interface's handlers; define handlers' behaviour elsewhere
    async with client.empathic_voice.chat.connect_with_callbacks(
        options=options,
        on_open=websocket_interface.on_open,
        on_message=websocket_interface.on_message,
        on_close=websocket_interface.on_close,
        on_error=websocket_interface.on_error
        ) as socket:
        
        # Set the socket instance in the handler
        websocket_interface.set_socket(socket)
        
        # Create an asynchronous task to continuously detect and process input from the microphone, as well as play audio
        # run python -c "import sounddevice; print(sounddevice.query_devices())" for list of available devices
        microphone_task = asyncio.create_task(MicrophoneInterface.start(socket, device=1, allow_user_interrupt=True, byte_stream=websocket_interface.byte_strs))
        
        # Await the microphone task
        await microphone_task

asyncio.run(main())

## Defining WebSocketInterface class to handle WebSocket connection and event callbacks ##

class WebSocketInterface:
    def __init__(self):
        self.socket = None
        self.user_stream = None
        self.evi_stream = None

    def set_socket(self, socket):
        self.socket = socket

    async def on_open(self):
        # Called when WebSocket connection is established
        assistant_input = {
        "type": "assistant_input",
        "text": "What's on your mind today?",
        }
        self.socket.send(assistant_input)

    async def on_message(self, message):

        # async def play_audio(self, audio_data_base64):
        #     # Decode the base64-encoded audio data
        #     decoded_audio = base64.b64decode(audio_data_base64)
    
        #     # Convert the raw byte data to a NumPy array (assuming int16 PCM audio format)
        #     audio_array = np.frombuffer(decoded_audio, dtype=np.int16)

        #     # Play the audio using sounddevice
        #     fs = 16000  # Set the sample rate (check what Hume's API uses)
        #     sd.play(audio_array, samplerate=fs)

        message_data = json.loads(message)
            
        if message_data["type"] == "Audio Output":
            audio_data_base64 = message_data.get("audio")
            await self.play_audio(audio_data_base64)

    async def on_close(self):
        assistant_input = {
        "type": "assistant_input",
        "text": "See you later!",
        }
        self.socket.send(assistant_input)

    async def on_error(self, error):
        print(f"WebSocket error: {error}")
