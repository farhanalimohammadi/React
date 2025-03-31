import React from "react";
import Order from "./orders/order-box";
export default function OrderList({admin}){

    const billingInfo = [
        {challenge : ["$10,000" , "2048437"] , date : ["2024/11/16" , false] , amount : "$168.08" , order : "$168.08" , account : "FTMO MT4" , status : "WAIT" , },
        {challenge : ["$16,000" , "2048437"] , date : ["2024/11/16" , false] , amount : "$168.08" , order : "$168.08" , account : "FTMO MT4" , status : "WAIT" , },
        {challenge : ["$1,000" , "2048437"] , date : ["2024/11/16" , true] , amount : "$168.08" , order : "$168.08" , account : "FTMO MT4" , status : "FINISH" , },
        {challenge : ["$23,000" , "2048437"] , date : ["2024/11/16" , false] , amount : "$168.08" , order : "$168.08" , account : "FTMO MT4" , status : "WAIT" , },
    ]
    
    return(
        <div className="w-full bg-componentBg-mainBg rounded-[12px] flex flex-col justify-start items-stretch">
            <ul className=" list-none">
                <li className="w-full flex flex-row justify-between items-center rounded-t-[12px] border-b-[1px] border-solid border-[#acacac] ">
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">FTMO Challenge</span>
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">Dates</span>
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">Amount to Pay</span>
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">Order</span>
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">Account</span>
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">Status</span>
                    <span className="w-[144.82px] p-4 gap-[10px] flex justify-start items-center text-[14px] text-textsColor-texts font-bold leading-[100%] ">Invoice & Documents</span>
                </li>
                {billingInfo.map((item , index) => (
                    index + 1 === billingInfo.length ? (
                        <Order admin={admin} challenge={item.challenge} date={item.date} amount={item.amount} account={item.account} order={item.order} status={item.status} lastItem={true} />
                    ) : (
                        <Order admin={admin} challenge={item.challenge} date={item.date} amount={item.amount} account={item.account} order={item.order} status={item.status} lastItem={false} />
                    )
                ))}
            </ul>
        </div>
    )
}