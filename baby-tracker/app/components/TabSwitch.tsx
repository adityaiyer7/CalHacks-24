import React, { useState } from 'react';
import Image from 'next/image';

const TabSwitch = () => {
    const [activeTab, setActiveTab] = useState('home');

    const tabData = [
        { id: 'home', label: 'Home', icon: '/images/home.png', alt: 'Home Icon' },
        { id: 'feed', label: 'Feed', icon: '/images/nutritional-pyramid.png', alt: 'Food Icon' },
        { id: 'sleep', label: 'Sleep', icon: '/images/sleeping.png', alt: 'Sleep Icon' },
        { id: 'growth', label: 'Growth', icon: '/images/growth-chart.png', alt: 'Growth Icon' },
    ];

    return (
        <div className="grid grid-cols-4 gap-5 w-11/12 my-10">
            {tabData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-white p-4 rounded shadow-md text-center flex items-center justify-center bg-gradient-to-r from-gradientPrimary to-gradientSecondary
                        ${activeTab === tab.id ? 'hover:focus:ring-emerald-500 ring-2  ring-offset-2' : ''}
                    `}
                >
                    <Image src={tab.icon} alt={tab.alt} width={35} height={35} />
                    <p className="hidden md:block px-2 font-semibold">{tab.label}</p>
                </button>
            ))}
        </div>
    );
};

export default TabSwitch;
