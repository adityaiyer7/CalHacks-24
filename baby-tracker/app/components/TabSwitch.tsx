import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTabContext } from '../context/TabContext';

const TabSwitch: React.FC = () => {
    const { activeTab, setActiveTab } = useTabContext();

    const tabData = [
        { id: 'home', label: 'All', icon: '/images/home.png', alt: 'Home Icon' },
        { id: 'feed', label: 'Feed', icon: '/images/nutritional-pyramid.png', alt: 'Food Icon' },
        { id: 'sleep', label: 'Sleep', icon: '/images/sleeping.png', alt: 'Sleep Icon' },
        { id: 'growth', label: 'Growth', icon: '/images/growth-chart.png', alt: 'Growth Icon' },
    ];


    return (
        <div className="grid grid-cols-4 gap-5 bg-background rounded-[50px] w-6/12 my-10">
            {tabData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-white p-4  hover:animate-wiggle text-center flex items-center justify-center 
                        ${activeTab === tab.id ? 'hover:focus text-yellow-400' : ''}
                    `}
                >
                    <Image src={tab.icon} alt={tab.alt} width={26} height={26} />
                    <p className="hidden md:block px-2 font-semibold">{tab.label}</p>
                </button>
            ))}
        </div>
    );
};

export default TabSwitch;
