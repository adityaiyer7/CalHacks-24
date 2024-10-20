"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TabSwitch from "../components/TabSwitch";
import DataEntryBar from "../components/DataEntryBar";
import AudioRecorder from "../components/AudioRecorder";
import { useTabContext } from '../context/TabContext';
import Feed from "../components/Feed";
import Sleep from "../components/Sleep";
import Growth from "../components/Growth";
import DropdownButton from '../components/DropdownButton';

export default function Dashboard() {
  const [isAIBotOpen, setIsAIBotOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const { activeTab, setActiveTab } = useTabContext();
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
        <Navbar/>
        <div className="flex flex-col justify-between items-center bg-foreground rounded-l-[50px] roun w-full h-auto">
          {/*Chart View Selection*/}
          <TabSwitch />
          <div className='flex justify-end items-center w-3/4 h-auto'>
                <DropdownButton />
            </div>
          <div className="w-2/3 flex flex-col justify-center items-center">
            {/*Visualizations Container*/}
            <div className="w-full h-auto flex justify-between items-center">
              { activeTab === "feeding" && <Feed/> }
              { activeTab === "sleep" && <Sleep/> }
              { activeTab === "growth" && <Growth/> }
            </div>
          </div>
          {/*AI Bot*/}
          <div className="flex flex-row justify-center items-center w-11/12 md:w-3/4 my-5">
            <DataEntryBar handleAIBotRecording={handleRecording} />
          </div>
        </div>
      </div>
    </div>
  );
}