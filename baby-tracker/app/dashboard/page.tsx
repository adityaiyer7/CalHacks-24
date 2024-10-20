"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TabSwitch from "../components/TabSwitch";
import DataEntryBar from "../components/DataEntryBar";

export default function Dashboard() {
  const [isAIBotOpen, setIsAIBotOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const handleAIBotClick = () => {
    setIsAIBotOpen(!isAIBotOpen);
  };
  const handleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
      <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
        <Navbar handleAIBotClick={handleAIBotClick}/>
        <div className="flex flex-col justify-between items-center w-full h-auto">
          {/*Chart View Selection*/}
          <TabSwitch />
          {isAIBotOpen && (
            <div className="flex justify-center items-center hover:animate-wiggle hover:opacity-70 hover:cursor-pointer">
              {/*Icon indicating current state of AI Voice Chat Bot*/}
              <div className="relative">
                <div className="absolute left-[45px;] top-[-12px;] z-10">
                  {isRecording ? (
                    <img
                      src="/images/history.png"
                      alt="Recording Audio animation"
                      className="w-1/2 h-auto bg-black"
                    />
                  ) : (
                    <svg width={60} height={60} viewBox="0 0 60 60" fill="fill" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z"
                        stroke="#000000"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                  )

                  }

                </div>

              </div>
              <button onClick={handleRecording}>
                <img
                  src="/images/AIVoice.gif"
                  alt="AI Voice Icon"
                  className="w-1/2 h-auto"
                />
              </button>
            </div>
          )}
          {/*AI Bot*/}
          <div className="flex flex-row justify-center items-center w-11/12 md:w-3/4 my-5">
            <DataEntryBar handleAIBotRecording={handleRecording}/>
          </div>
        </div>
      </div>
    </div>
  );
}
