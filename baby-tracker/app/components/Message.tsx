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
                <div className={`text-base text-black  shadow rounded-[50px] py-4 px-6 ${isBot ? 'bg-[#ffb3d4]' : 'text-white bg-[#27595A]'} flex items-center`}>
                    <div>{message}</div>
                </div>
            </div>
        </div>
    );
};

export default Message;
