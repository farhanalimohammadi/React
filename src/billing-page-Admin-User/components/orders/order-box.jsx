import React, { useState , useEffect } from "react";

export default function Order({ challenge , date , amount ,account , order, status , lastItem , admin}) {

        const [check, setCheck] = useState(true);
        useEffect(() => {
          setCheck(check);
        }, [check]);
        const checkedClick = () => {
          setCheck((prev) => !prev); 
        };

    return(
        <li 
        className={`w-full flex flex-row justify-between items-center rounded-t-[12px] ${lastItem ? "border-none" : "border-b-[1px] border-solid border-[#acacac]"}`}>
            <span 
            className="w-[144.82px] flex flex-col justify-center items-stretch text-[14px] text-textsColor-texts font-bold leading-[100%] ">
                {challenge.map((item , index) => (
                    <span className="flex flex-row justify-start items-center gap-x-[10px] px-4 py-2">
                        {index === 1 ? (
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.58 11.42L14.21 13.15H15.53V14.15H14L13.6 16H12.51L12.91 14.15H10.95L10.55 16H9.46L9.86 14.15H8.31V13.15H10.07L10.44 11.42H8.9V10.42H10.65L11.04 8.6H12.13L11.74 10.42H13.7L14.09 8.6H15.18L14.79 10.42H16.12V11.42H14.58ZM13.49 11.42H11.53L11.16 13.15H13.12L13.49 11.42Z" fill="white"/>
                                <path d="M13 14H18L13 20V14Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M18 5V14L13 20H6V5H18Z" stroke="white" stroke-width="1.5"/>
                            </svg>

                        ) : (

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15V19H9" stroke="white" stroke-width="1.5"/>
                                <path d="M18 10L18 6L14 6" stroke="white" stroke-width="1.5"/>
                                <path d="M13.44 14.02C13.44 14.3533 13.3567 14.6667 13.19 14.96C13.03 15.2533 12.79 15.5 12.47 15.7C12.1567 15.9 11.7833 16.02 11.35 16.06V16.87H10.7V16.06C10.0733 16 9.56667 15.8033 9.18 15.47C8.79333 15.1367 8.6 14.6967 8.6 14.15H9.82C9.84 14.41 9.92333 14.6267 10.07 14.8C10.2167 14.9667 10.4267 15.0733 10.7 15.12V12.92C10.2533 12.8067 9.89 12.6933 9.61 12.58C9.33 12.46 9.09 12.2733 8.89 12.02C8.69667 11.7667 8.6 11.42 8.6 10.98C8.6 10.4267 8.79333 9.97 9.18 9.61C9.56667 9.24333 10.0733 9.03 10.7 8.97V8.16H11.35V8.97C11.9367 9.02333 12.4067 9.21 12.76 9.53C13.12 9.84333 13.3233 10.2767 13.37 10.83H12.15C12.13 10.6233 12.05 10.44 11.91 10.28C11.77 10.1133 11.5833 10 11.35 9.94V12.1C11.7967 12.2067 12.16 12.32 12.44 12.44C12.72 12.5533 12.9567 12.7367 13.15 12.99C13.3433 13.2367 13.44 13.58 13.44 14.02ZM9.76 10.92C9.76 11.1933 9.84 11.4067 10 11.56C10.1667 11.7133 10.4 11.8367 10.7 11.93V9.91C10.4133 9.94333 10.1833 10.0467 10.01 10.22C9.84333 10.3933 9.76 10.6267 9.76 10.92ZM11.35 15.12C11.6433 15.0733 11.8733 14.9567 12.04 14.77C12.2067 14.5767 12.29 14.3467 12.29 14.08C12.29 13.8133 12.2067 13.6067 12.04 13.46C11.88 13.3067 11.65 13.1833 11.35 13.09V15.12Z" fill="white"/>
                            </svg>

                        )}
                        {item}
                    </span>
                ))}
            </span>
            <span 
            className="w-[144.82px] flex flex-col justify-center items-stretch text-[14px] text-textsColor-texts font-bold leading-[100%] ">
                {date.map((item , index) => (
                    <span className="flex flex-row justify-start items-center gap-x-[10px] px-4 pt-2 pb-3">
                        {index === 0 ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.226 14.776C13.226 14.996 13.168 15.2 13.052 15.388C12.94 15.572 12.772 15.724 12.548 15.844C12.328 15.96 12.066 16.024 11.762 16.036V16.522H11.378V16.03C10.954 15.994 10.612 15.868 10.352 15.652C10.092 15.432 9.95397 15.134 9.93797 14.758H11.03C11.054 14.998 11.17 15.152 11.378 15.22V14.272C11.066 14.192 10.816 14.114 10.628 14.038C10.444 13.962 10.282 13.84 10.142 13.672C10.002 13.504 9.93197 13.274 9.93197 12.982C9.93197 12.618 10.066 12.326 10.334 12.106C10.606 11.886 10.954 11.762 11.378 11.734V11.248H11.762V11.734C12.182 11.766 12.514 11.888 12.758 12.1C13.002 12.312 13.138 12.606 13.166 12.982H12.068C12.044 12.766 11.942 12.626 11.762 12.562V13.492C12.094 13.584 12.35 13.666 12.53 13.738C12.71 13.81 12.87 13.93 13.01 14.098C13.154 14.262 13.226 14.488 13.226 14.776ZM11.018 12.934C11.018 13.034 11.048 13.118 11.108 13.186C11.172 13.254 11.262 13.314 11.378 13.366V12.532C11.266 12.552 11.178 12.596 11.114 12.664C11.05 12.728 11.018 12.818 11.018 12.934ZM11.762 15.238C11.882 15.218 11.976 15.17 12.044 15.094C12.116 15.018 12.152 14.924 12.152 14.812C12.152 14.708 12.118 14.624 12.05 14.56C11.986 14.492 11.89 14.434 11.762 14.386V15.238Z" fill="white"/>
                                <rect x="4.66797" y="9" width="14" height="10" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M18.668 15H21.168V6H8.66797V9" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>

                        ) : null}
                        <span className={`${item === false ? "text-[#BA833D]" : item === true ? "text-[#FC3548]" : "text-textsColor-texts"}`}>
                            {item === false ? "Not paid yet" : item === true ? "Paid" : item}
                        </span>
                    </span>
                ))}
            </span>
            <span 
            className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">{amount}</span>
            <span 
            className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">{order}</span>
            <span 
            className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">{account}</span>
            <span 
            className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">
                <span className={`px-2 py-1 ${status === "WAIT" ? "bg-[#BA833D]" :"bg-[#FC3548]"} rounded-[40px]`} >
                    {status === "WAIT" ? "Waiting" : "Finished"}
                </span>
            </span>
            <span className="w-[144.82px] p-4 gap-[10px] flex justify-between items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">
                {admin ? (
                    <div className="flex flex-row justify-center items-center ">
                        <div
                        onClick={checkedClick} 
                        className={`w-[40px] cursor-pointer p-1 flex flex-row items-center ${check ? "justify-end bg-btnColors-Mailblue" : "justify-start bg-[#989898]"} rounded-[12px] transition-all duration-300 ease-linear`}>
                            <span className="w-4 h-4 rounded-[8px] bg-white "></span>
                        </div>
                    </div>
                ) : (
                    <button className={` py-2 text-nameSize text-textsColor-texts font-bold ${status === "WAIT" ? "bg-btnColors-Mailblue px-4 hover:bg-btnColors-Mailblue/85" : "bg-[#FC3548] px-[6px] hover:bg-[#FC3548]/85"} rounded-[8px]  transition-all duration-300 ease-linear `}>{status === "WAIT" ? "Pay" : "Delete"}</button>
                )}
                <span className="p-1 rounded-[8px] border-[1px] border-solid border-[#acacac] cursor-pointer ">
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" fill="white"/>
                        <path d="M18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10Z" fill="white"/>
                        <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
                    </svg>
                </span>
            </span>
        </li>
    )
}
