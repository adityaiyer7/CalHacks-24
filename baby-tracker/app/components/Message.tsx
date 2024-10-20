import React from 'react';
import { MessageProps } from '../types';
import Image from 'next/image';

const Message = ({ message, isBot }: MessageProps) => {
    return (
        <div className="flex flex-col mb-2">
            <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
                {isBot && (
                    <Image
                        src="/images/chat-bot.jpeg"
                        alt="Chat Bot Message Icon"
                        width={50}
                        height={50}
                        className="rounded-lg shadow-md mx-2"
                    />
                )}
                <div className={`text-base text-black shadow rounded-xl py-2 px-4 ${isBot ? 'bg-[#B0C3BF]' : 'bg-white'} flex items-center`}>
                    <div>{message}</div>
                </div>
            </div>
        </div>
    );
};

export default Message;
