import React from 'react'
import BabyBottle from './BabyBottle';
import Image from 'next/image';

const Feed = () => {
    return (
        <div className='flex justify-center items-center w-full mb-20'>
            <div className='flex justify-evenly items-center w-full mx-5'>
                {/*Baby Bottle*/}
                <div className='flex justify-center items-center mx-2 w-full'>
                    <div className='flex flex-col justify-center h-fit w-full text-center'>
                        <h1 className="text-2xl font-semibold text-gray-900">Daily Food Digestion Progress</h1>
                        <div className='flex justify-center items-center w-full my-5'>
                            <BabyBottle progress={30} />
                        </div>

                    </div>

                </div>
                {/*Feed Graph*/}
                <div className='flex justify-center items-center w-full mx-2'>
                    <Image src='/images/sample-chart.webp' alt='Feed Graph' width={500} height={500} />
                </div>
            </div>

        </div>
    )
}

export default Feed