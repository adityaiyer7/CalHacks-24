import React from 'react'
import AudioCaptureButton from "../components/AudioCaptureButton";
import Image from 'next/image';
import ImageUpload from './ImageUpload';
import { AIVoiceChatBotProps } from '../types';
import AudioRecorder from './AudioRecorder';

const DataEntryBar = ({handleAIBotRecording}: AIVoiceChatBotProps) => {
    const [isImageUploadExpanded, setIsImageUploadExpanded] = React.useState(false);
    const [isRecording, setIsRecording] = React.useState(false);

    const handleRecording = () => {
        setIsRecording(!isRecording);
        handleAIBotRecording && handleAIBotRecording();
    }

    return (
        <div className="flex w-full flex-row justify-between items-center rounded-[26px] mb-2 md:mb-0 p-1 bg-white border-2 border-[#27595A] focus-within:ring-2 focus-within:border-[#27595A] focus-within:border-2">
            <div className="flex flex-row justify-between items-center w-full">
                <div className={`${isImageUploadExpanded ? 'absolute left-1/4 md:left-[45%] z-10 bottom-1/3 my-3' : 'hidden'}`}>
                    {isImageUploadExpanded && <ImageUpload />}
                </div>
                <div className="flex w-fit flex-row justify-start items-center p-1 hover:animate-wiggle hover:opacity-70 relative">
                    <button onClick={() => setIsImageUploadExpanded(!isImageUploadExpanded)} className='rounded-lg md:m-2'>
                        <Image src="/images/attachment.png" alt="attachment" className="w-12 md:w-10" width={30} height={30} />
                    </button>
                </div>


                <input
                    type="text"
                    placeholder="Type a message"
                    className="w-11/12 bg-transparent text-black px-2 py-1 outline-none"
                />
                <div className="flex w-fit flex-row justify-end items-center p-1 hover:opacity-70">
                    <AudioRecorder/>
                </div>
                <div className="flex w-fit h-fit flex-row justify-center items-center p-1 px-2 hover:opacity-70">
                    <button>
                        <Image src="/images/send.png" alt="send" width={30} height={30} />
                    </button>
                </div>
            </div>
        </div>


    )
}

export default DataEntryBar