"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AIVoiceChatBotProps } from '../types';
import DataEntryBar from './DataEntryBar';
import { useNavContext } from '../context/NavContext';


const Navbar = ({ handleSelectedTab}: AIVoiceChatBotProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { selectedNav, setSelectedNav } = useNavContext();
    const [isAIWidgetOpen, setIsAIWidgetOpen] = useState(false);

    const router = useRouter();
    const navItems = [
        { name: 'Home', icon: '/images/home.png', alt: 'Home Icon', route: '/dashboard' },
        { name: 'Profile', icon: '/images/baby.png', alt: 'Profile Icon', route: '/profile' },
        { name: 'Report', icon: '/images/report.png', alt: 'Report Icon', route: '/report' },
        { name: 'History', icon: '/images/history.png', alt: 'History Icon', route: '/history' },
        { name: 'Settings', icon: '/images/settings.png', alt: 'Settings Icon', route: '/settings' },
        { name: 'Exit', icon: '/images/logout.png', alt: 'Logout Icon', route: '/' },
    ];

    const handleNavItemSelection = (name: string, route: string) => {
        setSelectedNav(name);
        handleSelectedTab && handleSelectedTab(name);
        router.push(route);
    }


    const handleAIWidgetClick = () => {
        setIsAIWidgetOpen(!isAIWidgetOpen);
        router.push('/chat');
    }




    return (
        <div className={`${isExpanded ? 'md:w-80 w-16' : 'w-16 md:w-24'} flex flex-col justify-between items-center bg-background p-4 h-screen`}>
            <div className={`flex flex-row justify-end items-center ${isExpanded ? 'ml-auto' : ''} `}>
                {/* Logo and App name */}
                <div id="app-identity" className="flex flex-row justify-evenly items-center mb-4">
                    {/* <Image src={"/images/baby.png"} alt="app logo" className="rounded-full" width={50} height={50} /> */}
                    {isExpanded && <h1 className="text-3xl animate-wiggle text-[#B1F0EF] mt-5 mr-12 hidden md:block">BabyBytes</h1>}
                </div>

                {/*Collapse/Expand Icons*/}
                {isExpanded ? (
                    <div className=' bg-foreground rounded-full hover:opacity-70 hover:cursor-pointer shadow-lg p-2 hidden md:block hover:animate-wiggle'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpanded(!isExpanded)} viewBox="0 0 24 24" width={24} height={24} color={"#27595A"} fill={"none"}>
                            <path d="M6.50232 13.2635C7.34673 13.2515 10.1432 12.6706 10.7361 13.2635C11.329 13.8564 10.7481 16.6529 10.7361 17.4973M13.2685 6.49733C13.2565 7.34173 12.6756 10.1382 13.2685 10.7311C13.8614 11.324 16.6579 10.7431 17.5023 10.7311M20.9991 2.99902L13.6103 10.3812M10.3691 13.6237L3 21.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                ) : (
                    <div className=' bg-foreground rounded-full hover:opacity-70 hover:cursor-pointer shadow-lg p-2 hidden md:block hover:animate-wiggle'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpanded(!isExpanded)} viewBox="0 0 24 24" width={24} height={24} color={"#27595A"} fill={"none"}>
                            <path d="M16.4999 3.26621C17.3443 3.25421 20.1408 2.67328 20.7337 3.26621C21.3266 3.85913 20.7457 6.65559 20.7337 7.5M20.5059 3.49097L13.5021 10.4961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.26637 16.5001C3.25437 17.3445 2.67344 20.141 3.26637 20.7339C3.85929 21.3268 6.65575 20.7459 7.50016 20.7339M10.502 13.4976L3.49825 20.5027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )
                }
            </div>

            {/* Profile Picture & Name */}
            <div className="text-center">
                <Image src={"/images/baby.png"} alt="profile picture" className="rounded-full w-32 h-32 mx-auto" width={250} height={50} />
                {isExpanded && (
                    <a className="mt-2 text-yellow-400 text-2xl hidden md:block">
                        Bytes Hacker
                    </a>
                )}
            </div>

            {/* Nav List */}
            <div className="flex flex-col justify-center items-center">
                <ul className="w-11/12 h-auto">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className={`flex flex-row items-center hover:opacity-70 hover:cursor-pointer hover:animate-wiggle rounded-[50px] shadow-lg p-2 my-2 ${selectedNav === item.name ? 'border-2 border-primary' : ''
                                }`}
                            onClick={() => handleNavItemSelection(item.name, item.route)}
                        >
                            <div className="w-16 h-8">
                                <Image
                                    src={item.icon}
                                    alt={item.alt}
                                    className="w-full h-full object-contain"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            {isExpanded && <a className="px-6 hidden md:block text-lg font-semibold">{item.name}</a>}
                        </li>
                    ))}
                </ul>
            </div>



            {/* AI Widget */}
            <div className="relative flex flex-row mb-5 md:mb-0 justify-center items-center rounded-full shadow-lg p-2 hover:cursor-pointer hover:opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" className='hover:animate-wiggle' viewBox="0 0 24 24" width={35} height={35} color={"#FFFFFF"} fill={"none"} onClick={handleAIWidgetClick}>
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