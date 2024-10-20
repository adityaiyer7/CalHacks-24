"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TabSwitch from "../components/TabSwitch";
import DataEntryBar from "../components/DataEntryBar";
import AudioRecorder from "../components/AudioRecorder";

export default function Dashboard() {
  const [isAIBotOpen, setIsAIBotOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const handleAIBotClick = () => {
    setIsAIBotOpen(!isAIBotOpen);
  };
  const handleRecording = () => {
    setIsRecording(!isRecording);
  };

  useEffect(() => {
    console.log(isRecording);
  }, [isRecording])


  return (
    <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
      <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
        <Navbar handleAIBotClick={handleAIBotClick} />
        <div className="flex flex-col justify-between items-center w-full h-auto">
          {/*Chart View Selection*/}
          <TabSwitch />
          {isAIBotOpen && (
            <div className="flex justify-center items-center hover:animate-wiggle hover:opacity-70 hover:cursor-pointer">
              {/*Icon indicating current state of AI Voice Chat Bot*/}
              <div className="relative">
                <div className="absolute left-[32px;] bottom-[-22px] z-10">
                  <AudioRecorder handleAIBotRecording={handleRecording} />
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
            <DataEntryBar handleAIBotRecording={handleRecording} />
          </div>
        </div>
      </div>
    </div>
  );
}
