import React from "react";
import { useParams } from "react-router-dom";
import RouterElement from "../staticElems/routerElem";
import Customer from "./components/Customer";

export default function Ticket(){
    const {id} = useParams()
    return(
        <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[48px]">
            <RouterElement params={id}/>
            <Customer/>

            <div className="w-full p-4 flex flex-col justify-between items-start gap-y-[16px]">
                        <div className="flex flex-row justify-start items-center gap-x-[12px]">
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Privacy policy
                        </h3>
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Terms & Conditions
                        </h3>
                        </div>
                        <p className="text-justify text-nameSize text-textsColor-texts">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
        </div>
    )
}