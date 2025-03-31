import React from "react";

export default function Customer(){
    return(
    <div className="w-full flex flex-col justify-start items-start gap-y-4 ">
        <h3 className="text-nameSize text-textsColor-texts font-bold ">Customer Support </h3>
        <div className="w-full bg-componentBg-mainBg rounded-[12px] flex flex-col justify-between items-stretch pt-4 pb-8 gap-y-4">
            <div className="w-full px-4 flex flex-row justify-start items-center ">
                <span className="text-textsColor-texts text-logoSize font-medium ">Open New Ticket</span>    
            </div>
            <div className="w-full bg-[#acacac] h-[1px] "></div>  

            <div className="w-full flex flex-col justify-between items-stretch gap-y-12 ">
                <div className="w-full px-4 flex flex-col justify-start items-center gap-y-2"> 
                    <label htmlFor="subject" className="text-textsColor-texts text-nameSize font-bold select-none cursor-pointer w-full flex flex-row justify-start items-center">
                        Subject    
                    </label>
                    <input type="text" id="subject" name="subject" className="w-full bg-componentBg-inputBg rounded-[8px] text-textsColor-texts text-[16px] font-light px-3 py-3 focus:scale-x-[0.98] transform origin-left focus:border-[2px] focus:border-[#000] focus:border-solid transition-all duration-300 ease-linear border-none border-[#000] outline-none" />  
                </div>    
                <div className="w-full px-4 flex flex-col justify-start items-center gap-y-2"> 
                    <label htmlFor="content" className="text-textsColor-texts text-nameSize font-bold select-none cursor-pointer w-full flex flex-row justify-start items-center">
                        Content    
                    </label>
                    <textarea id="content" name="content" className="w-full bg-componentBg-inputBg rounded-[8px] text-textsColor-texts text-[16px] font-light px-3 py-3 h-[188px] flex flex-col justify-start items-start border-none outline-none" />  
                </div>
                <div className="w-full px-4 flex flex-col justify-start items-start gap-y-6 ">
                    <span className="text-textsColor-texts text-nameSize font-bold">Attachments</span>
                    <span className="group active:scale-90 p-4 flex flex-row justify-center items-center gap-x-2 rounded-[8px] border-[1px] border-[#acacac] border-solid hover:border-btnColors-Mailblue hover:scale-[1.02] transition-all duration-300 ease-linear cursor-pointer">
                        
                        <svg className="stroke-white group-hover:stroke-btnColors-Mailblue transition-all duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 12H16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 16V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="text-textsColor-texts text-nameSize font-bold group-hover:text-btnColors-Mailblue transition-all duration-300 ease-linear">
                           Click here to upload a file.
                        </span>
                    </span>
                    <span className="group active:scale-90 p-4 flex flex-row justify-center items-center gap-x-2 rounded-[8px] border-[1px] border-[#acacac] border-solid hover:border-btnColors-Mailblue hover:scale-[1.02] transition-all duration-300 ease-linear cursor-pointer">
                        
                        <svg className="stroke-white group-hover:stroke-btnColors-Mailblue transition-all duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 12H16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 16V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="text-textsColor-texts text-nameSize font-bold group-hover:text-btnColors-Mailblue transition-all duration-300 ease-linear">
                           Click here to upload a file.
                        </span>
                    </span>
                </div>
                <div className="w-full flex flex-row justify-center items-center ">
                    <button className="px-6 py-3 hover:bg-btnColors-Mailblue/85 hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-linear flex justify-center items-center text-textsColor-texts text-nameSize font-bold bg-btnColors-Mailblue rounded-[8px] border-none outline-none ">
                        Submit
                    </button>
                </div>   
            </div>  
        </div>
    </div>
    )
}