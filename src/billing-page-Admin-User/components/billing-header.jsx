import React from "react";

export default function BillingHeader({admin}){
    return(
        <div className="w-full bg-componentBg-mainBg rounded-[12px] flex flex-row justify-between items-center px-6 py-4 ">
            <span className="flex flex-row justify-start items-center gap-x-1 ">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.97464 26.267C10.068 25.0937 11.7346 25.187 12.6946 26.467L14.0413 28.267C15.1213 29.6937 16.868 29.6937 17.948 28.267L19.2946 26.467C20.2546 25.187 21.9213 25.0937 23.0146 26.267C25.388 28.8003 27.3213 27.9603 27.3213 24.4137V9.38699C27.3346 4.01366 26.0813 2.66699 21.0413 2.66699H10.9613C5.9213 2.66699 4.66797 4.01366 4.66797 9.38699V24.4003C4.66797 27.9603 6.61464 28.787 8.97464 26.267Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.668 9.33301H21.3346" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 14.667H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 className="text-textsColor-texts text-logoSize font-bold "> {admin ? "Order" : "Billing"} </h3>
            </span>
            {admin ? (
                <button className="py-2 px-6 bg-btnColors-Mailblue rounded-[8px] text-textsColor-texts text-nameSize font-bold flex justify-center items-center hover:bg-btnColors-Mailblue/75 hover:scale-105 transition-all duration-300 ease-linear active:scale-95 active:bg-btnColors-Mailblue/75">
                    creat
                </button>
            ) : null}
            <button
            className="px-4 py-2 group bg-componentBg-mainBg rounded-[8px] border-[1px] border-white border-solid hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue active:scale-75 transition-all duration-300 ease-linear">
                <span className="text-nameSize text-textsColor-texts font-medium flex flex-row justify-center items-center gap-x-2 group-hover:text-btnColors-Mailblue transition-all duration-300 ease-linear">
                    Filter
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M19 6L5 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-btnColors-Mailblue transition-all duration-300 ease-linear"
                    />
                    <path
                        d="M17 12L7 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-btnColors-Mailblue transition-all duration-300 ease-linear"
                    />
                    <path
                        d="M15 18L9 18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-btnColors-Mailblue transition-all duration-300 ease-linear"
                    />
                    </svg>
                </span>
            </button>
        </div>
    )
}