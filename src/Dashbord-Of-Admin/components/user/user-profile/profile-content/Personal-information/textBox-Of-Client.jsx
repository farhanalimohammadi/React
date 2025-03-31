import React from "react";

export default function TextBox(){

    return(
        <div className="w-full bg-[#3F311E] text-[#BA833D] rounded-[12px] px-4 py-8 flex flex-row justify-center items-start gap-x-2">
            
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z" stroke="#BA833D" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99609 12.75L8.99609 9" stroke="#BA833D" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.00391 6.75L8.99717 6.75" stroke="#BA833D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span className="text-nameSize font-medium leading-[19.36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </span>
        </div>
    )
}