import React from 'react';
import '../baby-bottle.css'; // Import the CSS file
import { BabyBottleProps } from '../types';
const BabyBottle = ({ progress }: BabyBottleProps) => {

    const bottleBodyHeight = 200;
    const filledHeight = Math.min(progress, 100); // Ensure progress is between 0 and 100
    const milkLevelHeight = (filledHeight / 100) * bottleBodyHeight;

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="baby-bottle">
                <div className="bottle-cap"></div>
                <div className='bottle-round-top'></div>
                <div className="bottle-neck"></div>
                <div className="bottle-body">
                    <div
                        className="milk-level"
                        style={{ height: `${milkLevelHeight}px` }} // Set height dynamically
                    ></div>
                    {filledHeight >= 40 && <div className="line line-40"></div>}
                    {filledHeight >= 60 && <div className="line line-60"></div>}
                    {filledHeight >= 80 && <div className="line line-80"></div>}
                    {filledHeight === 100 && <div className="line line-100"></div>}
                </div>
            </div>
            <div className='flex justify-center items-center w-full my-1'>
                <h1 className='text-2xl font-semibold text-gray-900'>{progress}%</h1>
            </div>

        </div>
    );
};

export default BabyBottle;
