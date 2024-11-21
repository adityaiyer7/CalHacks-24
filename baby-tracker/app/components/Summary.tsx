import React from 'react';
import BabyBottle from './BabyBottle'; // Ensure this component is defined
import Image from 'next/image';

const Summary = () => {
    // Example statistics for food, sleep, and growth, replace with dynamic data as needed
    const dailyGoalFood = 100; // Daily food goal in ml
    const currentIntakeFood = 70; // Current food intake in ml
    const progressPercentageFood = (currentIntakeFood / dailyGoalFood) * 100;

    const dailyGoalSleep = 10; // Daily sleep goal in hours
    const currentSleep = 8; // Current sleep in hours
    const progressPercentageSleep = (currentSleep / dailyGoalSleep) * 100;

    // Growth statistics
    const currentHeight = '70 cm';
    const currentWeight = '8 kg';

    // Calculate stroke-dashoffset for circular charts
    const strokeDashoffsetFood = (1 - progressPercentageFood / 100) * 628; // Circumference for food chart
    const strokeDashoffsetSleep = (1 - progressPercentageSleep / 100) * 628; // Circumference for sleep chart

    return (
        <div className='flex flex-col items-center w-full mb-20'>
            <h1 className="text-3xl font-bold text-[#27595A] mb-10">DAILY OVERVIEW</h1>
            <div className='flex justify-between items-start w-full mx-5'>
                {/* Left Section: Circular Charts */}
                <div className='flex flex-col items-center w-1/3'>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Food Intake</h2>
                    <svg width="150" height="150" className='mb-5'>
                        <circle cx="75" cy="75" r="65" stroke="#B0C3BF" strokeWidth="14" fill="none" />
                        <circle
                            cx="75"
                            cy="75"
                            r="65"
                            stroke="#FACC15"
                            strokeWidth="14"
                            fill="none"
                            strokeDasharray="408" // Circumference of the outer circle
                            strokeDashoffset={-strokeDashoffsetFood}
                            strokeLinecap="round"
                            transform="rotate(-90 75 75)" // Rotate to start at the top
                        />
                        <text
                            x="75"
                            y="75"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="font-bold text-lg text-gray-900"
                        >
                            {progressPercentageFood.toFixed(0)}%
                        </text>
                    </svg>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">Sleep Duration</h2>
                    <svg width="150" height="150">
                        <circle cx="75" cy="75" r="65" stroke="#B0C3BF" strokeWidth="14" fill="none" />
                        <circle
                            cx="75"
                            cy="75"
                            r="65"
                            stroke="#27595A"
                            strokeWidth="14"
                            fill="none"
                            strokeDasharray="408" // Circumference of the outer circle
                            strokeDashoffset={-strokeDashoffsetSleep}
                            strokeLinecap="round"
                            transform="rotate(-90 75 75)" // Rotate to start at the top
                        />
                        <text
                            x="75"
                            y="75"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="font-bold text-lg text-gray-900"
                        >
                            {progressPercentageSleep.toFixed(0)}%
                        </text>
                    </svg>
                </div>

                {/* Center Section: Baby Bottle */}
                <div className='flex flex-col items-center mx-5'>
                    <h1 className="text-xl font-bold text-gray-900 mb-5">Daily Milk</h1>
                    <div className='flex justify-center items-center px-10'>
                        <BabyBottle progress={progressPercentageFood} />
                    </div>
                    <div className='text-center'>
                        <p className="text-base font-medium text-gray-700">Current Intake: {currentIntakeFood} ml</p>
                        <p className="text-base font-medium text-gray-700">Total Intake Today: {currentIntakeFood} ml</p>
                        <p className="text-base font-medium text-gray-700">Remaining: {dailyGoalFood - currentIntakeFood} ml</p>
                    </div>
                </div>

                {/* Right Section: Growth Overview */}
                <div className='flex flex-col items-center w-1/3 mx-2'>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Growth Overview</h2>
                    <Image src='/images/baby-growth.png' alt='Growth Chart' width={240} height={240} className='mb-4' />
                    <p className="text-base font-medium text-gray-700">Current Height: {currentHeight}</p>
                    <p className="text-base font-medium text-gray-700">Current Weight: {currentWeight}</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;
