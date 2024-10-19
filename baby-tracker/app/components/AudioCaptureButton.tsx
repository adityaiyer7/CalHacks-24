import React from 'react';

interface AudioCaptureButtonProps {
  onClick: () => void; // Function to handle the button click
  isRecording: boolean; // To determine the button's state
}

const AudioCaptureButton: React.FC<AudioCaptureButtonProps> = ({ onClick, isRecording }) => {
  return (
    <div className="flex justify-center items-center mx-2 hover:animate-wiggle">
      <div className="w-[45px] h-[45px] relative cursor-pointer" tabIndex={0} style={{ filter: 'brightness(0.8)' }} onClick={onClick}>
        <div className="w-full h-full">
          <div className="w-full h-full relative overflow-hidden text-center cursor-pointer rounded-full border border-transparent bg-[radial-gradient(54.28%_54.28%_at_50%_49.91%,_rgba(0,0,0,0.11)_31.5%,_rgba(128,255,204,0.1)_83.01%,_rgba(128,255,204,0.26)_98%)] backdrop-blur-[23.5362px] shadow-[inset_-5.604px_-5.604px_280.193px_rgba(128,255,204,0.02)] transition-all duration-300">
            <div className="absolute z-10 w-full p-2 h-full flex items-center justify-center">
              <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z"
                  stroke="#94FFD2"
                  strokeWidth={2}
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <div className="absolute inset-0 w-full h-full rounded-full bg-[radial-gradient(54.75%_54.75%_at_50%_50%,_rgba(0,0,0,0.22)_70.24%,_rgba(93,254,202,0.6)_100%),_linear-gradient(135deg,_rgba(22,35,37,0.54)_0%,_rgba(93,254,202,0)_100%),_radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,0.22)_0%,_rgba(93,254,202,0.65)_90.5%)] backdrop-blur-[50px] bg-clip-border bg-blend-[normal,_darken,_normal] transition-all duration-300 z-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCaptureButton;
