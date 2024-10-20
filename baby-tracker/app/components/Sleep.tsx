import React from 'react';
import Image from 'next/image';
import { useDropdown } from '../context/DropdownContext';
const Sleep = () => {
    const { selectedOption } = useDropdown();
    // Example values for sleep percentages and total time
    const napPercentage = 30; // For example, 30% of the nap circle
    const nightPercentage = 70; // For example, 70% of the night circle
    const sleepPercentage = 65; // For example, 65% of the sleep circle

    // Calculate stroke-dashoffset for each circle
    const napStrokeDashoffset = (1 - napPercentage / 100) * 314; // Circumference = 2 * π * 15
    const nightStrokeDashoffset = (1 - nightPercentage / 100) * 314; // Circumference = 2 * π * 15
    const sleepStrokeDashoffset = (1 - sleepPercentage / 100) * 628; // Circumference = 2 * π * 100

    // Total time for display
    const totalTime = "4h 2m"; // Replace with dynamic data as needed

    return (
        <div className='flex justify-center items-center w-full mb-20'>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col justify-between w-fit h-auto">
                    {/* Nap Total Average */}
                    <div className="flex flex-col justify-center items-center mx-5">
                        <div className="flex justify-center items-center space-x-2">
                            <svg width="50" height="50">
                                <circle cx="25" cy="25" r="15" stroke="#B0C3BF" strokeWidth="3" fill="none" />
                            </svg>
                            <p className="text-xl font-medium text-gray-900">Nap Total Average</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-black text-2xl font-bold">6h 15m</p>
                        </div>
                    </div>

                    {/* Night Total Average */}
                    <div className="flex flex-col justify-center items-center mx-5">
                        <div className="flex justify-center items-center space-x-2">
                            <svg width="50" height="50">
                                <circle cx="25" cy="25" r="15" stroke="#27595A" strokeWidth="3" fill="none" />
                            </svg>
                            <p className="text-black text-xl font-medium">Night Total Average</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-black text-2xl font-bold">8h 25m</p>
                        </div>
                    </div>
                </div>

                {/* Sleep Circular Chart */}
                <div className='w-auto h-auto flex flex-col justify-center items-center mx-5'>
                <h1 className="text-3xl font-bold text-gray-900 mb-5">Sleep Tracker</h1>
                    <svg width="300" height="300">
                        <circle cx="150" cy="150" r="100" stroke="#B0C3BF" strokeWidth="20" fill="none" />
                        <circle
                            cx="150"
                            cy="150"
                            r="100"
                            stroke="#27595A"
                            strokeWidth="20"
                            fill="none"
                            strokeDasharray="628" // Circumference of the outer circle
                            strokeDashoffset={-sleepStrokeDashoffset} // Calculated offset
                            strokeLinecap="round"
                            transform="rotate(-90 150 150)"
                        />
                        {/* Center text */}
                        <text
                            x="150"
                            y="150"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-center font-bold text-xl text-gray-900"
                        >
                            Daily Total Avg
                        </text>
                        <text
                            x="150"
                            y="180" // Positioning below the title
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-center font-bold text-2xl text-gray-900"
                        >
                            {totalTime}
                        </text>
                    </svg>
                </div>
                {/* Sleep Graph */}
                <div className='flex justify-center items-center mx-5'>
                {selectedOption === 'Today' ? (<Image src={'/images/sleep_graph.png'} alt='Sleep Graph' width={500} height={500} />): (null)}
                {selectedOption === 'Last Week' ? (<Image src={'/images/fig_sleep_week.png'} alt='Sleep Graph' width={500} height={500} />):(null)}
                </div>
            </div>
        </div>
    );
};

export default Sleep;
