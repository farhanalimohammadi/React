import React from "react";

import NameInfoClient from "./first-client";
import InfoBox from "./second-client";
import TextBox from "./textBox-Of-Client";

export default function Clients(){
    return(
        <div className="w-full flex flex-col justify-start items-start gap-y-[50px]">
            <NameInfoClient/>
            <InfoBox/>
            <TextBox/>
            <div className="w-full flex justify-center items-center ">
                <button className="w-[240px] flex flex-row justify-center items-center py-3 px-4 text-textsColor-texts text-nameSize font-bold bg-btnColors-Mailblue rounded-[8px] hover:bg-btnColors-Mailblue/80 transition-all duration-300 ease-linear hover:scale-[1.02]">SAVE</button>
            </div>
        </div>
    )
}