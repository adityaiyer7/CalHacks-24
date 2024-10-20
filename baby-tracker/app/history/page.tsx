"use client";
import React from "react";
import Navbar from "../components/Navbar";
import DataEntryBar from "../components/DataEntryBar";
import Message from "../components/Message";
import Image from "next/image";

const History = () => {
    const botMessages=["Hello", "Hi", "How are you?", "What about you?", "I am good"];
    const userMessages = ["Hi", "How are you?", "I am fine", "What about you?", "I am good"];
    return (
        <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
            <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
                <Navbar />
                <div className="flex flex-col justify-center items-center bg-foreground rounded-l-[50px] w-full h-full p-3">
                    <div className="flex justify-center items-center w-full md:w-3/4 h-full">
                        <div className="flex flex-col justify-between items-center h-full w-full">
                            <div className="flex flex-col justify-center items-center text-center">
                                <div className="flex justify-center items-center w-full my-1">
                                    <Image src={"/images/robot.png"} alt="Chat Bot Image" width={100} height={100} /> 
                                </div>

                                <h1 className="text-center my-3 text-black text-4xl font-semibold leading-9">Data Recording History</h1>
                                <p className="text-black text-sm font-light">Here you can view the logged data inputs to verify my work</p>
                            </div>
                            <div id="chat-box" className="w-full h-full my-6 overflow-y-auto">
                                { botMessages.map((message, index) => (
                                    <Message key={index} message={message} isBot={true}/>
                                ))
                                }
                                { userMessages.map((message, index) => (
                                    <Message key={index} message={message} isBot={false}/>
                                ))
                                }
                            </div>
                            <DataEntryBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;