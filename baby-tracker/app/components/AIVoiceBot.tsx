"use client"
import React from 'react';
import Image from 'next/image';
import AudioRecorder from './AudioRecorder';
const AIVoiceBot = () => {
    return (
        <div className='relative flex justify-center items-center w-full'>
            {/* AI Voice Gif */}
            <Image
                src="/images/AIVoice.gif"
                alt="AI Voice Icon"
                width={100} // Adjust the size as needed
                height={100}
                className="w-auto h-auto"
            />
            <div className="absolute w-auto h-auto">
                <AudioRecorder />
            </div>


        </div>
    );
};

export default AIVoiceBot;
