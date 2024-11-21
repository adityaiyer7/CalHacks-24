import React from 'react';
import BabyBottle from './BabyBottle';
import Image from 'next/image';

const Feed = () => {
    // Example statistics, replace with dynamic data as needed
    const dailyGoal = 100; // Daily feeding goal in ml
    const currentIntake = 64; // Current intake in ml
    const totalIntake = 70; // Total intake for the day in ml
    const remainingIntake = dailyGoal - totalIntake; // Remaining intake for the day
    const progressPercentage = (currentIntake / dailyGoal) * 100;

    // Calculate stroke-dashoffset for the circular chart
    const strokeDashoffset = (1 - progressPercentage / 100) * 628; // Circumference = 2 * π * 100

    const [foodPlot, setFoodPlot] = React.useState('/images/food_graph.png')
    setTimeout(() => {
        setFoodPlot('/images/food_graph.png');
    }, 5000);

    return (
        <div className='flex flex-col items-center w-full mb-20'>
            <h1 className="text-3xl font-bold text-gray-900 mb-5">Daily Food Digestion Progress</h1>
            <div className='flex justify-evenly items-center w-full '>
                {/* Baby Bottle */}
                <div className='flex flex-col justify-center items-center mx-2 w-full'>
                    <div className='flex justify-center items-center w-full my-5'>
                        <BabyBottle progress={progressPercentage} />
                    </div>
                    <div className='text-left'>
                        <p className="text-lg font-medium text-gray-700">Current Intake: {currentIntake} ml</p>
                        <p className="text-lg font-medium text-gray-700">Total Intake Today: {totalIntake} ml</p>
                        <p className="text-lg font-medium text-gray-700">Remaining: {remainingIntake} ml</p>
                    </div>
                </div>


                {/* Feed Graph */}
                <div className='flex justify-center items-center w-full mx-2'>
                    <Image src={foodPlot} alt='Feed Graph' width={500} height={500} />
                </div>


                
                {/* Circular Progress Chart */}
                <div className='flex flex-col justify-center items-center w-full mt-20 mx-2'>
                    <svg width="200" height="200">
                        <circle cx="100" cy="100" r="90" stroke="#B0C3BF" strokeWidth="20" fill="none" />
                        <circle
                            cx="100"
                            cy="100"
                            r="90"
                            stroke="#FACC15"
                            strokeWidth="20"
                            fill="none"
                            strokeDasharray="628" // Circumference of the outer circle
                            strokeDashoffset={-strokeDashoffset} // Negative offset for clockwise
                            strokeLinecap="round"
                            transform="rotate(-90 100 100)" // Rotate to start at the top
                        />
                        {/* Center text */}
                        <text
                            x="100"
                            y="100"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="font-bold text-2xl text-gray-900"
                        >
                            {progressPercentage.toFixed(0)}%
                        </text>
                        <text
                            x="100"
                            y="130" // Positioning below the percentage
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-center text-md text-gray-700 px-5"
                        >
                            Daily Goal Achieved
                        </text>
                    </svg>
                    
                    <div className='text-left my-5'>
                        <p className="text-lg font-medium text-gray-700">Current Intake: {currentIntake} ml</p>
                        <p className="text-lg font-medium text-gray-700">Total Intake Today: {totalIntake} ml</p>
                        <p className="text-lg font-medium text-gray-700">Remaining: {remainingIntake} ml</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;
