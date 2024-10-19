import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AIVoiceChatBotProps } from '../types';

const Navbar = ({ handleAIBotClick }: AIVoiceChatBotProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const router = useRouter();

    const handleDashboardClick = () => {
        router.push("/"); // Navigate to Login
    };

    const handleReportClick = () => {
        router.push("/report"); // Navigate to Login
    };


    return (
        <div className={`${isExpanded ? 'md:w-44 w-16' : 'w-16 md:w-24'} flex flex-col justify-between items-center bg-gradient-to-r from-gradientPrimary to-gradientSecondary p-4 h-screen rounded-r-lg`}>
            <div className={`flex flex-row justify-end items-center ${isExpanded ? 'ml-auto' : ''} hover:animate-wiggle`}>
                {/*Collapse/Expand Icons*/}
                {isExpanded ? (
                    <div className='rounded-full hover:opacity-70 hover:cursor-pointer shadow-lg p-2 hidden md:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpanded(!isExpanded)} viewBox="0 0 24 24" width={24} height={24} color={"#FFFFFF"} fill={"none"}>
                            <path d="M6.50232 13.2635C7.34673 13.2515 10.1432 12.6706 10.7361 13.2635C11.329 13.8564 10.7481 16.6529 10.7361 17.4973M13.2685 6.49733C13.2565 7.34173 12.6756 10.1382 13.2685 10.7311C13.8614 11.324 16.6579 10.7431 17.5023 10.7311M20.9991 2.99902L13.6103 10.3812M10.3691 13.6237L3 21.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                ) : (
                    <div className='rounded-full hover:opacity-70 hover:cursor-pointer shadow-lg p-2 hidden md:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpanded(!isExpanded)} viewBox="0 0 24 24" width={24} height={24} color={"#FFFFFF"} fill={"none"}>
                            <path d="M16.4999 3.26621C17.3443 3.25421 20.1408 2.67328 20.7337 3.26621C21.3266 3.85913 20.7457 6.65559 20.7337 7.5M20.5059 3.49097L13.5021 10.4961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.26637 16.5001C3.25437 17.3445 2.67344 20.141 3.26637 20.7339C3.85929 21.3268 6.65575 20.7459 7.50016 20.7339M10.502 13.4976L3.49825 20.5027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )

                }

            </div>
            {/* Logo and App name */}
            <div id="app-identity" className="flex flex-row justify-evenly items-center mb-4">
                <img src="https://via.placeholder.com/50" alt="app logo" className="rounded-full" />
                {isExpanded && <h1 className="text-2xl text-strongText ml-2 hidden md:block">App Name</h1>}
            </div>
            {/* Profile Picture & Name */}
            <div className="text-center mb-3">
                <img src="https://via.placeholder.com/250" alt="profile picture" className="rounded-full w-32 h-32 mx-auto" />
                {isExpanded && (
                    <a className="mt-2 text-strongText hidden md:block">
                        Baby Name
                    </a>
                )}
            </div>

            {/* Nav List */}
            <div className="flex flex-col justify-center items-center">
                <ul className="w-11/12 h-auto">
                    <li 
                        className="flex flex-row items-center hover:opacity-70 hover:cursor-pointer hover:animate-wiggle rounded-full shadow-lg p-2 my-2"
                        onClick={handleDashboardClick}
                    >
                        <div className="w-8 h-8">
                            <Image
                                src="/images/home.png"
                                alt="Home Icon"
                                className="w-full h-full object-contain" // Ensure the aspect ratio is maintained
                                width={30}
                                height={30}
                            />
                        </div>
                        {isExpanded && <a className="px-2 hidden md:block text-lg font-semibold">Home</a>}
                    </li>
                    <li className="flex flex-row items-center hover:opacity-70 hover:cursor-pointer hover:animate-wiggle rounded-full shadow-lg p-2 my-2">
                        <div className="w-8 h-8">
                            <Image
                                src="/images/baby.png"
                                alt="Profile Icon"
                                className="w-full h-full object-contain"
                                width={30}
                                height={30}
                            />
                        </div>
                        {isExpanded && <a className="px-2 hidden md:block text-lg font-semibold">Profile</a>}
                    </li>
                    <li
                        className="flex flex-row items-center hover:opacity-70 hover:cursor-pointer hover:animate-wiggle rounded-full shadow-lg p-2 my-2"
                        onClick={handleReportClick}
                    >
                        <div className="w-8 h-8">
                            <Image
                                src="/images/report.png"
                                alt="Report Icon"
                                className="w-full h-full object-contain"
                                width={30}
                                height={30}
                            />
                        </div>
                        {isExpanded && <a className="px-2 hidden md:block text-lg font-semibold">Report</a>}
                    </li>
                    <li className="flex flex-row items-center hover:opacity-70 hover:cursor-pointer hover:animate-wiggle rounded-full shadow-lg p-2 my-2">
                        <div className="w-8 h-8">
                            <Image
                                src="/images/history.png"
                                alt="History Icon"
                                className="w-full h-full object-contain"
                                width={30}
                                height={30}
                            />
                        </div>
                        {isExpanded && <a className="px-2 hidden md:block text-lg font-semibold">History</a>}
                    </li>
                    <li className="flex flex-row items-center hover:opacity-70 hover:cursor-pointer hover:animate-wiggle rounded-full shadow-lg p-2 my-2">
                        <div className="w-8 h-8">
                            <Image
                                src="/images/settings.png"
                                alt="Settings Icon"
                                className="w-full h-full object-contain"
                                width={30}
                                height={30}
                            />
                        </div>
                        {isExpanded && <a className="px-2 hidden md:block text-lg font-semibold">Settings</a>}
                    </li>
                </ul>
            </div>



            {/* AI Widget */}
            <div className='flex flex-row mb-5 md:mb-0 justify-center items-center rounded-full shadow-lg p-2 hover:cursor-pointer hover:opacity-70 hover:animate-bounce' onClick={handleAIBotClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} color={"#FFFFFF"} fill={"none"}>
                    <path d="M4 15.5C2.89543 15.5 2 14.6046 2 13.5C2 12.3954 2.89543 11.5 4 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 15.5C21.1046 15.5 22 14.6046 22 13.5C22 12.3954 21.1046 11.5 20 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7L7 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M17 7L17 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="7" cy="3" r="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="17" cy="3" r="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M13.5 7H10.5C7.67157 7 6.25736 7 5.37868 7.90898C4.5 8.81796 4.5 10.2809 4.5 13.2069C4.5 16.1329 4.5 17.5958 5.37868 18.5048C6.25736 19.4138 7.67157 19.4138 10.5 19.4138H11.5253C12.3169 19.4138 12.5962 19.5773 13.1417 20.1713C13.745 20.8283 14.6791 21.705 15.5242 21.9091C16.7254 22.1994 16.8599 21.7979 16.5919 20.6531C16.5156 20.327 16.3252 19.8056 16.526 19.5018C16.6385 19.3316 16.8259 19.2898 17.2008 19.2061C17.7922 19.074 18.2798 18.8581 18.6213 18.5048C19.5 17.5958 19.5 16.1329 19.5 13.2069C19.5 10.2809 19.5 8.81796 18.6213 7.90898C17.7426 7 16.3284 7 13.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9.5 15C10.0701 15.6072 10.9777 16 12 16C13.0223 16 13.9299 15.6072 14.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.00896 11H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.009 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </div>
    );
};

export default Navbar;
