import shutil
import os

# Specify the source folder and destination folder with absolute paths
source_folder = '/Users/adityaiyer/Downloads'
destination_folder = 'tempaudio'  # Update this to the full path of your project


# Create destination folder if it doesn't exist
if not os.path.exists(destination_folder):
    os.makedirs(destination_folder)

# Get a list of all files in the source folder
files = os.listdir(source_folder)

# Loop through all the files and move only .wav files to the destination folder
for file_name in files:
    # Check if the file has a .wav extension
    if file_name.lower().endswith('.wav'):
        # Create the full file path
        source_file = os.path.join(source_folder, file_name)
        destination_file = os.path.join(destination_folder, file_name)
        
        try:
            # Move the file
            shutil.move(source_file, destination_file)
            print(f"Moved {file_name} successfully!")
        except Exception as e:
            print(f"Failed to move {file_name}: {e}")

print("WAV file moving completed!")
