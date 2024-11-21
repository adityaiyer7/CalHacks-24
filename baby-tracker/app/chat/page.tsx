import React from 'react'
import Navbar from '../components/Navbar'
import AIVoiceBot from '../components/AIVoiceBot'
import Image from 'next/image'
const Chat = () => {
    return (
        <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
            <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
                <Navbar />
                <div className="flex flex-col justify-start items-center bg-foreground rounded-l-[50px] roun w-full h-auto">
                    <div className="mx-5 mt-20 relative flex-col justify-center text-center text-black text-2xl md:text-4xl font-semibold leading-9">
                        <h1 className='py-5'>
                            Hi! I'm BabyBot. How can I help you today?
                        </h1>
                        <h5 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Press the microphone to have a conversation with me!</h5>
                    </div>
                    <div className='flex flex-col justify-center items-center w-11/12 my-3'>
                        <Image
                            src="/images/robot.png" // Route of the image file
                            alt="AI Voice Icon"
                            width={100} // Adjust the size as needed
                            height={100}
                            className="w-auto h-auto animate-head-bob"
                        />
                        <div className="flex flex-row justify-center items-center w-11/12 md:w-3/4">
                            <AIVoiceBot />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat