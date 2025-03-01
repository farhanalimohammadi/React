import React from "react";

export default function ProfileInfo({EditProfile , EditNickName}){
    return(
        <div className="w-full bg-componentBg-mainBg rounded-[12px] p-4 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-start items-center gap-x-6">
                <div className="w-[100px] h-[100px] rounded-full bg-white"></div>
                <div className="flex flex-col justify-center items-start gap-y-2">

                    <span className="text-nameSize select-none text-textsColor-texts font-bold flex flex-row justify-start items-center gap-x-2">
                        <span>محمد میثمی</span>                  
                        <svg 
                        onClick={EditProfile}
                        className="cursor-pointer stroke-textsColor-texts hover:stroke-btnColors-Mailblue transition-all duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2594 3.60022L5.04936 12.2902C4.73936 12.6202 4.43936 13.2702 4.37936 13.7202L4.00936 16.9602C3.87936 18.1302 4.71936 18.9302 5.87936 18.7302L9.09936 18.1802C9.54936 18.1002 10.1794 17.7702 10.4894 17.4302L18.6994 8.74022C20.1194 7.24022 20.7594 5.53022 18.5494 3.44022C16.3494 1.37022 14.6794 2.10022 13.2594 3.60022Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8906 5.0498C12.3206 7.8098 14.5606 9.9198 17.3406 10.1998"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 22H21"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    
                    <span className="text-nameSize select-none text-textsColor-texts font-medium flex flex-row justify-start items-center gap-x-2">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08125 5.935C6.03125 5.93 5.97125 5.93 5.91625 5.935C4.72625 5.895 3.78125 4.92 3.78125 3.72C3.78125 2.495 4.77125 1.5 6.00125 1.5C7.22625 1.5 8.22125 2.495 8.22125 3.72C8.21625 4.92 7.27125 5.895 6.08125 5.935Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.57938 7.78C2.36937 8.59 2.36937 9.91 3.57938 10.715C4.95438 11.635 7.20938 11.635 8.58438 10.715C9.79438 9.905 9.79438 8.585 8.58438 7.78C7.21438 6.865 4.95938 6.865 3.57938 7.78Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Misme2017@gmail.com</span>
                    </span>

                    <span className="text-nameSize select-none text-textsColor-texts font-medium flex flex-row justify-start items-center gap-x-2">
                        
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6.19961C4 6.58461 4.3 6.89961 4.665 6.89961H5.415C5.735 6.89961 5.995 6.62461 5.995 6.28961C5.995 5.92461 5.835 5.79461 5.6 5.70961L4.4 5.28961C4.16 5.20461 4 5.07461 4 4.70961C4 4.37461 4.26 4.09961 4.58 4.09961H5.33C5.7 4.10461 6 4.41461 6 4.79961" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 6.9248V7.2948" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 3.70508V4.09508" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.995 9.49C7.20138 9.49 8.99 7.70138 8.99 5.495C8.99 3.28862 7.20138 1.5 4.995 1.5C2.78862 1.5 1 3.28862 1 5.495C1 7.70138 2.78862 9.49 4.995 9.49Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.48828 10.44C6.93828 11.075 7.67328 11.49 8.51328 11.49C9.87828 11.49 10.9883 10.38 10.9883 9.015C10.9883 8.185 10.5783 7.45 9.95328 7" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>0 FTMO Points</span>
                    </span>

                </div>
            </div>
            <div className="h-full flex flex-col justify-start items-end ">
                <button onClick={EditNickName} className="  flex justify-center items-center px-6 py-3 bg-componentBg-mainBg rounded-[8px] border-[1px] border-solid border-textsColor-texts hover:scale-[0.99] hover:border-btnColors-Mailblue transition-all duration-500 cursor-pointer text-textsColor-texts text-nameSize font-light hover:text-btnColors-Mailblue hover:font-bold]">
                    Edit nickname
                </button>
            </div>
        </div>
    )
}