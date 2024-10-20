import React from 'react';
import '../baby-bottle.css'; // Import the CSS file
import { BabyBottleProps } from '../types';
const BabyBottle = ({ progress }: BabyBottleProps) => {
    // Calculate the height based on progress (assuming bottle body height is 100px)
    const bottleBodyHeight = 200; // Adjust this value as needed for your bottle body height
    const filledHeight = Math.min(progress, 100); // Ensure progress is between 0 and 100
    const milkLevelHeight = (filledHeight / 100) * bottleBodyHeight;

    return (
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
    );
};

export default BabyBottle;
