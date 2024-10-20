"use client";
import React from "react";
import Navbar from "../components/Navbar";
import DataEntryBar from "../components/DataEntryBar";
import Message from "../components/Message";

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
                            <div id="chat-box" className="w-full h-full my-6">
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