import React from "react";

export default function EditImage(){

    return(
        <div className="w-full flex flex-col justify-start items-start gap-y-4 ">
            <h3 className="text-nameSize text-textsColor-texts font-bold ">Profile picture settings</h3>
            <div className="w-full bg-componentBg-mainBg py-8 px-4 rounded-[12px] flex flex-col justify-between items-center gap-y-4">
                <div className="w-full px-8 py-6 bg-btnColors-Mailblue rounded-[8px]">
                    <p className="text-nameSize text-textsColor-texts font-light text-center">
                        Please do not upload pictures (such as ID) or any documents containing sensitive or corrupted data. Your profile picture may be visible to third persons when using selected services.
                    </p>
                </div>
                <div className=" cursor-pointer group border-[2px] border-dashed px-4 py-8 border-textsColor-texts hover:border-btnColors-Mailblue transition-all duration-300 ease-linear w-full bg-componentBg-mainBg hover:bg-componentBg-inputBg rounded-[8px] flex flex-row justify-center items-center gap-x-2">
                    <svg className="stroke-textsColor-texts select-none group-hover:stroke-btnColors-Mailblue transition-all duration-300 ease-linear " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 12H16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 16V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="text-textsColor-texts text-nameSize font-bold group-hover:text-btnColors-Mailblue transition-all duration-300 ">Drag and drop file here or click</span>
                </div>
            </div>
        </div>
    )
}