import React from "react";
import { Link } from "react-router-dom";

export default function FirstPart(){
    return(
        <div className="flex w-full flex-col justify-center items-center secondRes:items-start gap-y-6 secondRes:gap-y-8 thirdRes:gap-y-14 mx-auto mt-[100px] thirdRes:mt-[156px] px-12">
            <div className="flex min-w-[250px] max-w-[958px] flex-col justify-between items-center secondRes:items-start gap-y-[16px]">

                <div className=""><h3 className='text-textsColor-texts text-justify text-[32px] secondRes:text-[48px] thirdRes:text-[96px] leading-[40px] secondRes:leading-[70px] thirdRes:leading-[104.66px]'>
                    Monetize  your <br /> demo <span className="bg-gradient-to-r from-btnColors-Mailblue to-[#acacac] bg-clip-text text-transparent font-bold">Trading</span>
                </h3></div>
                <div className="w-full flex flex-row justify-center secondRes:justify-start items-center">
                    <p className='text-btnColors-Mailblue text-[32px] thirdRes:text-[48px] font-bold text-center secondRes:text-start'>Since 2025</p>
                </div>

                <div className=" flex flex-row justify-center items-center min-w-[100px] max-w-[750px]">
                    <p className='text-textsColor-texts text-thirdnameRes secondRes:text-secondnameRes thirdRes:text-nameSize text-center secondRes:text-start leading-[19.44px] '>
                        Master your trading skills on our simulated trading platform, improve your trading on A demo FTMO account WITH up to $200,000 and get A reward OF up to 90% of your simulated profits
                    </p>
                </div>
                <div className="absolute w-[400px] h-[400px] rounded-full bg-btnColors-Mailblue/15 blur-[150px]"></div>
            </div>

            <div className="flex flex-row justify-between items-center gap-x-4 secondRes:gap-x-6 thirdRes:gap-x-8">
                <Link to={"/trader/accountoverview/shopping"} className=" w-[140px] secondRes:w-[208px] flex justify-center items-center py-[10px] px-[15px] secondRes:py-[16px] secondRes:px-[30px] bg-btnColors-Mailblue rounded-lg text-textsColor-texts text-secondnameRes font-light secondRes:text-nameSize secondRes:font-semibold thirdRes:font-bold outline-none border-[2px] border-solid border-btnColors-Mailblue hover:bg-componentBg-primeryBg hover:text-btnColors-Mailblue transition-all duration-500 delay-100">
                    FTMO CHALLENGE
                </Link>
                <Link to={"/trader/accountoverview/freeshopping"} className="w-[140px] secondRes:w-[208px] flex justify-center items-center py-[10px] px-[15px] secondRes:py-[16px] secondRes:px-[30px] bg-componentBg-primeryBg rounded-lg text-btnColors-Mailblue text-secondnameRes font-light secondRes:text-nameSize secondRes:font-semibold thirdRes:font-bold border-[1px] secondRes:border-[2px] border-solid border-btnColors-Mailblue hover:bg-btnColors-Mailblue hover:text-textsColor-texts transition-all duration-500 delay-100">
                    FREE TRIAL
                </Link>
            </div>
        </div>
    )
}