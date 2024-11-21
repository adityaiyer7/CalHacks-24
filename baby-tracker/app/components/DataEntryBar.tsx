import React from 'react';
import Image from 'next/image';
import ImageUpload from './ImageUpload';
import { AIVoiceChatBotProps } from '../types';
import AudioRecorder from './AudioRecorder';

const DataEntryBar = ({ handleAIBotRecording }: AIVoiceChatBotProps) => {
    const [isImageUploadExpanded, setIsImageUploadExpanded] = React.useState(false);
    const [isRecording, setIsRecording] = React.useState(false);
    const [isAudioButtonPressed, setIsAudioButtonPressed] = React.useState(false);

    const handleRecording = () => {
        setIsAudioButtonPressed((prev) => !prev);
        setIsRecording((prev) => !prev); // Toggle the recording state
        handleAIBotRecording && handleAIBotRecording(); // Call the external recording handler
    };

    const imageUploadPosition = (selectedNav: string) => {
        switch (selectedNav) {
            case 'Home':
            case 'History':
                return 'absolute left-[5rem] mr-3 md:left-[40%] z-10 bottom-[15rem]'; // Position for Home and History
            default:
                return 'absolute left-1/4 md:left-[23%] z-10 bottom-[15rem]'; // Position for other navigation
        }
    };


    return (
        <div className="flex w-full flex-row justify-between items-center ">
            <div className="flex flex-row justify-between items-center w-full rounded-[50px] mb-2 md:mb-0 bg-background  border-[#27595A] focus-within:ring-2 focus-within:border-[#27595A] focus-within:border-2">
                <div className={`${isImageUploadExpanded ? 'absolute left-1/4 md:left-[45%] z-10 bottom-1/3 my-3' : 'hidden'}`}>
                    {isImageUploadExpanded && <ImageUpload />}
                </div>
                <div className="flex w-fit flex-row justify-start items-center hover:animate-wiggle hover:opacity-70 relative">
                    <button onClick={() => setIsImageUploadExpanded(!isImageUploadExpanded)} className='rounded-lg md:m-2'>
                        <Image src="/images/attachment.png" alt="attachment" className="w-12 md:w-10 ml-2" width={36} height={36} />
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Type a message"
                    className="w-11/12 bg-transparent text-white px-2 py-1 outline-none"
                />
                
                <div className="flex w-fit h-fit flex-row justify-center items-center p-1 px-4 hover:opacity-70">
                    <button>
                        <Image src="/images/send.png" alt="send" width={30} height={30} />
                    </button>
                </div>
                
            </div>
                <div className="flex w-fit flex-row justify-end items-center p-1 hover:opacity-70">
                    <AudioRecorder handleAIBotRecording={handleRecording}/>
                </div>
        </div>
    );
};

export default DataEntryBar;
