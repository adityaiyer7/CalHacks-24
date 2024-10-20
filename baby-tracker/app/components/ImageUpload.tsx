import React, { useState } from 'react';

const ImageUpload = () => {
    const [imageFile, setImageFile] = useState<File | null>(null); // State to store the uploaded file

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the first selected file
        if (file) {
            setImageFile(file); // Store the file in state
            downloadFile(file); // Trigger download immediately after file selection
        } else {
            console.log('No file selected');
        }
    };

    const downloadFile = (file: File) => {
        const url = URL.createObjectURL(file); // Create a temporary URL for the file
        const a = document.createElement('a'); // Create an anchor element
        a.href = url; // Set the href to the temporary URL
        a.download = file.name; // Use the original file name for the download
        document.body.appendChild(a); // Append anchor to the body
        a.click(); // Programmatically click the anchor to trigger the download
        document.body.removeChild(a); // Remove the anchor from the DOM
        URL.revokeObjectURL(url); // Clean up the URL object
    };

    const handleUpload = () => {
        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile); // Append the file to FormData

            // Here you can make a request to your backend
            fetch('/your-backend-endpoint', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className="flex items-center justify-center w-full shadow-lg border-2">
            <label
                htmlFor="dropzone-file"
                className="flex flex-col p-5 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#27595A]"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                        className="w-8 h-8 mb-4 text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <span className="text-lg font-medium text-gray-300">Please upload a before and after image of the meal</span>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Before</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file" />

                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">After</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file" />

                </div>

            </label>
        </div>
    );
};

export default ImageUpload;
