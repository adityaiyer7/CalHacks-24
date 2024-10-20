import React from 'react';

const Sleep = () => {
  return (
    <div className='flex justify-center items-center w-11/12'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col justify-between w-fit h-auto'>
          {/* Nap Total Average */}
          <div className='flex flex-col justify-center items-center'>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="#B0C3BF" />
            </svg>
            <p className='text-black'>Nap Total Average</p>
          </div>

          {/* Night Total Average */}
          <div className='flex flex-col justify-center items-center'>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="#27595A" />
            </svg>
            <p>Night Total Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
