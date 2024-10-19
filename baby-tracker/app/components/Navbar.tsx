import React from 'react';


const Navbar = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className={`${isExpanded ? 'md:w-44 w-16' : 'w-16 md:w-24'} flex flex-col justify-between items-center bg-gradient-to-r from-gradientPrimary to-gradientSecondary p-4 h-screen rounded-r-lg`}>
            <div className={`flex flex-row justify-end items-center ${isExpanded? 'ml-auto' : ''}`}>
                {/*Collapse/Expand Icons*/}
                {isExpanded ? (
                    <div className='rounded-full hover:opacity-70 hover:cursor-pointer shadow-lg p-2 hidden md:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpanded(!isExpanded)} viewBox="0 0 24 24" width={24} height={24} color={"#FFFFFF"} fill={"none"}>
                            <path d="M6.50232 13.2635C7.34673 13.2515 10.1432 12.6706 10.7361 13.2635C11.329 13.8564 10.7481 16.6529 10.7361 17.4973M13.2685 6.49733C13.2565 7.34173 12.6756 10.1382 13.2685 10.7311C13.8614 11.324 16.6579 10.7431 17.5023 10.7311M20.9991 2.99902L13.6103 10.3812M10.3691 13.6237L3 21.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                ) : (
                    <div className='rounded-full hover:opacity-70 hover:cursor-pointer shadow-lg p-2 hidden md:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpanded(!isExpanded)} viewBox="0 0 24 24" width={24} height={24} color={"#FFFFFF"} fill={"none"}>
                            <path d="M16.4999 3.26621C17.3443 3.25421 20.1408 2.67328 20.7337 3.26621C21.3266 3.85913 20.7457 6.65559 20.7337 7.5M20.5059 3.49097L13.5021 10.4961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.26637 16.5001C3.25437 17.3445 2.67344 20.141 3.26637 20.7339C3.85929 21.3268 6.65575 20.7459 7.50016 20.7339M10.502 13.4976L3.49825 20.5027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )

                }

            </div>
            {/* Logo and App name */}
            <div id="app-identity" className="flex flex-row justify-evenly items-center mb-4">
                <img src="https://via.placeholder.com/50" alt="app logo" className="rounded-full" />
                {isExpanded && <h1 className="text-2xl text-strongText ml-2 hidden md:block">App Name</h1>}
            </div>
            {/* Profile Picture & Name */}
            <div className="text-center mb-3">
                <img src="https://via.placeholder.com/250" alt="profile picture" className="rounded-full w-32 h-32 mx-auto" />
                {isExpanded && (
                    <p className="mt-2 text-strongText hidden md:block">
                        Baby Name
                    </p>
                )}
            </div>

            {/* Nav List */}
            <div>
                <ul className='w-11/12 h-auto'>
                    <li className='flex flex-row justify-evenly items-center hover:opacity-70 hover:cursor-pointer rounded-full shadow-lg p-2 my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#FFFFFF"} fill={"none"}>
                            <path d="M3.16405 11.3497L4 11.5587L4.45686 16.1005C4.715 18.6668 4.84407 19.9499 5.701 20.7249C6.55793 21.5 7.84753 21.5 10.4267 21.5H13.5733C16.1525 21.5 17.4421 21.5 18.299 20.7249C19.1559 19.9499 19.285 18.6668 19.5431 16.1005L20 11.5587L20.836 11.3497C21.5201 11.1787 22 10.564 22 9.85882C22 9.35735 21.7553 8.88742 21.3445 8.59985L13.1469 2.86154C12.4583 2.37949 11.5417 2.37949 10.8531 2.86154L2.65549 8.59985C2.24467 8.88742 2 9.35735 2 9.85882C2 10.564 2.47993 11.1787 3.16405 11.3497Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="14.5" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {isExpanded && <p className='px-2 hidden md:block'>Home</p>}
                    </li>
                    <li className='flex flex-row justify-evenly items-center hover:opacity-70 hover:cursor-pointer rounded-full shadow-lg p-2 my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#FFFFFF"} fill={"none"}>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M14 16C13.4271 16.6318 12.7395 17 12 17C11.2605 17 10.5729 16.6318 10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9 11.5C8.71357 11.1841 8.36974 11 8 11C7.63026 11 7.28643 11.1841 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M17 11.5C16.7136 11.1841 16.3697 11 16 11C15.6303 11 15.2864 11.1841 15 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C12.7684 8 13.4692 7.71115 14 7.23611" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {isExpanded && <p className='px-2 hidden md:block'>Profile</p>}
                    </li>
                    <li className='flex flex-row justify-evenly items-center hover:opacity-70 hover:cursor-pointer rounded-full shadow-lg p-2 my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#FFFFFF"} fill={"none"}>
                            <rect width="30" height="30" fill="none" />
                            <path d="M10 19.5C6.22876 19.5 4.34315 19.5 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H13.5C16.7875 2.5 18.4312 2.5 19.5376 3.40796C19.7401 3.57418 19.9258 3.75989 20.092 3.96243C21 5.06878 21 6.71252 21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 8.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.5 5.5H5.50998M9.49002 5.5H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6716 21.5H13V19.8284C13 19.298 13.2107 18.7893 13.5858 18.4142L19.0616 12.9393C19.6474 12.3536 20.5972 12.3536 21.183 12.9393L21.5616 13.318C22.1474 13.9038 22.1474 14.8536 21.5616 15.4393L16.0858 20.9142C15.7107 21.2893 15.202 21.5 14.6716 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        {isExpanded && <p className='px-2 hidden md:block'>Report</p>}
                    </li>
                    <li className='flex flex-row justify-evenly items-center hover:opacity-70 hover:cursor-pointer rounded-full shadow-lg p-2 my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#FFFFFF"} fill={"none"}>
                            <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.5 8H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {isExpanded && <p className='px-2 hidden md:block'>History</p>}
                    </li>
                    <li className='flex flex-row justify-evenly items-center hover:opacity-70 hover:cursor-pointer rounded-full shadow-lg p-2 my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#FFFFFF"} fill={"none"}>
                            <path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {isExpanded && <p className='px-2 hidden md:block'>Settings</p>}
                    </li>
                </ul>
            </div>
            {/* AI Widget */}
            <div className='flex flex-row justify-center items-center rounded-full shadow-lg p-2 hover:cursor-pointer hover:opacity-70'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} color={"#FFFFFF"} fill={"none"}>
                    <path d="M4 15.5C2.89543 15.5 2 14.6046 2 13.5C2 12.3954 2.89543 11.5 4 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 15.5C21.1046 15.5 22 14.6046 22 13.5C22 12.3954 21.1046 11.5 20 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7L7 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M17 7L17 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="7" cy="3" r="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="17" cy="3" r="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M13.5 7H10.5C7.67157 7 6.25736 7 5.37868 7.90898C4.5 8.81796 4.5 10.2809 4.5 13.2069C4.5 16.1329 4.5 17.5958 5.37868 18.5048C6.25736 19.4138 7.67157 19.4138 10.5 19.4138H11.5253C12.3169 19.4138 12.5962 19.5773 13.1417 20.1713C13.745 20.8283 14.6791 21.705 15.5242 21.9091C16.7254 22.1994 16.8599 21.7979 16.5919 20.6531C16.5156 20.327 16.3252 19.8056 16.526 19.5018C16.6385 19.3316 16.8259 19.2898 17.2008 19.2061C17.7922 19.074 18.2798 18.8581 18.6213 18.5048C19.5 17.5958 19.5 16.1329 19.5 13.2069C19.5 10.2809 19.5 8.81796 18.6213 7.90898C17.7426 7 16.3284 7 13.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9.5 15C10.0701 15.6072 10.9777 16 12 16C13.0223 16 13.9299 15.6072 14.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.00896 11H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.009 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </div>
    );
};

export default Navbar;
