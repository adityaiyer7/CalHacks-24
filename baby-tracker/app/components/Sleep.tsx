import React from 'react';
import Image from 'next/image';

const Sleep = () => {
    return (
        <div className='flex justify-center items-center w-full mb-20'>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col justify-between w-fit h-auto">
                    {/* Nap Total Average */}
                    <div className="flex flex-col justify-center items-center mx-2">
                        <div className="flex justify-center items-center space-x-2">
                            <svg width="50" height="50">
                                <circle cx="25" cy="25" r="15" stroke="none" strokeWidth="3" fill="#B0C3BF" />
                            </svg>
                            <p className="text-xl font-medium text-gray-900">Nap Total Average</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-black text-2xl font-bold">6h 15m</p>
                        </div>
                    </div>

                    {/* Night Total Average */}
                    <div className="flex flex-col justify-center items-center mx-2">
                        <div className="flex justify-center items-center space-x-2">
                            <svg width="50" height="50">
                                <circle cx="25" cy="25" r="15" stroke="none" strokeWidth="3" fill="#27595A" />
                            </svg>
                            <p className="text-black text-xl font-medium">Night Total Average</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-black text-2xl font-bold">8h 25m</p>
                        </div>
                    </div>
                </div>

                {/* Sleep Circular Chart */}
                <div className='w-auto h-auto flex justify-center items-center mx-2'>
                    <svg width="300" height="300">
                        <circle cx="150" cy="150" r="100" stroke="#27595A" strokeWidth="3" fill="none" />
                        <circle cx="150" cy="150" r="100" stroke="#B0C3BF" strokeWidth="3" fill="none" />
                    </svg>
                </div>
                {/*Sleep Graph*/}
                <div className='flex justify-center items-center mx-2'>
                    <Image src='/images/sample-chart.webp' alt='Sleep Graph' width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default Sleep;
