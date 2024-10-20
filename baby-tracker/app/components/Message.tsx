import React from 'react';
import { MessageProps } from '../types';
import Image from 'next/image';

const Message = ({ message, isBot }: MessageProps) => {
    return (
        <div className="flex flex-col mb-4">
            <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
                {isBot && (
                    <Image
                        src="/images/chat-bot.png"
                        alt="Chat Bot Message Icon"
                        width={50}
                        height={50}
                        className="rounded-lg mx-2"
                    />
                )}
                <div className={`text-base text-black  shadow rounded-[50px] py-4 px-6 ${isBot ? 'bg-[#ffb3d4]' : 'bg-[#FBD2AB]'} flex items-center`}>
                    <div>{message}</div>
                </div>
                {!isBot && (
                    <Image
                        src="/images/logo.png" // Replace with the actual user avatar image path
                        alt="User Message Icon"
                        width={40}
                        height={30}
                        className="rounded-full mx-2"
                    />
                )}
            </div>
        </div>
    );
};

export default Message;
