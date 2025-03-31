import React from "react";
import RouterElement from "../staticElems/routerElem";
import { useParams } from "react-router-dom";
import Platform from "./components/platForms";
import Other from "./components/others";

export default function Download(){

    const {id} = useParams()

    return(
        <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[48px] ">
            <RouterElement params={id}/>

            <div className="w-full flex flex-row justify-start items-center p-4 gap-x-2 bg-componentBg-mainBg rounded-[12px]">
                <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9219 11.8662C26.7219 12.2795 28.6819 14.7462 28.6819 20.1462V20.3195C28.6819 26.2795 26.2953 28.6662 20.3353 28.6662H11.6553C5.69526 28.6662 3.30859 26.2795 3.30859 20.3195V20.1462C3.30859 14.7862 5.24193 12.3195 9.96193 11.8795" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 2.66699V19.8403" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.4685 16.8662L16.0018 21.3329L11.5352 16.8662" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span className="text-logoSize text-textsColor-texts font-medium ">Download</span>
            </div>

            <Platform/>

            <Other/>
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