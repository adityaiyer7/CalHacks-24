import React from 'react';
import Image from 'next/image';

const Growth: React.FC = () => {
    const [growthPlot, setGrowthPlot] = React.useState('/images/height_graph.png')
    const [weightPlot, setWeightPlot] = React.useState('/images/weight_graph.png')
    setTimeout(() => {
        setGrowthPlot('/images/height_graph.png')
        setWeightPlot('/images/weight_graph.png')
    }, 5000);
    return (
        <div className="p-4 text-[#27595A] rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col items-center mr-4 rounded-lg">
                    <Image
                        src={growthPlot}
                        alt="Weight Chart"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded"
                    />
                    <h3 className="text-lg font-medium mt-2 mb-2">Weight Chart</h3>
                </div>

                <div className="flex flex-col items-center mt-4 md:mt-0">
                    <h2 className="text-xl font-semibold mb-4 md:mb-0">Growth Tracker</h2>
                    <Image
                        src="/images/baby-growth.png"
                        alt="Baby Growth"
                        width={250}
                        height={250}
                        className="rounded mb-2"
                    />
                    <p className="text-lg font-medium">Current Weight: 10 kg</p>
                    <p className="text-lg font-medium">Current Height: 70 cm</p>
                </div>

                <div className="flex flex-col items-center ml-4 rounded-lg">
                    <Image
                        src={'/images/height_graph.png'}
                        alt="Height Chart"
                        width={200}
                        height={100}
                        className="w-full h-auto rounded"
                    />
                    <h3 className="text-lg font-medium mt-2 mb-2">Height Chart</h3>
                </div>
            </div>
        </div>
    );
};

export default Growth;
