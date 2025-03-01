import React from 'react';
// components...

import RouterElement from '../staticElems/routerElem';
import StartChallange from './start-FTMO-challnge';
// icons...
import FlagIcon from '../Icons/Flag.svg'

export default function ShoppingPage(){
    return(

                            <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[50px]">
                                <RouterElement />

                                    <h3 className="flex flex-row justify-start items-center gap-x-1">
                                        <span className="">
                                        <object 
                                            data={FlagIcon}
                                            type="image/svg+xml" 
                                            className="w-[24px] h-[24px]"
                                        />
                                        </span>
                                        <span className="text-textsColor-texts text-nameSize font-bold">Configure your requirements and start FTMO Challenge</span>
                                    </h3>

                                    <div className="w-full p-[16px] flex flex-col justify-between items-center gap-y-[16px] bg-componentBg-mainBg rounded-xl">
                                        <StartChallange/>
                                    </div>


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