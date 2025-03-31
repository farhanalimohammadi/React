import React from "react";
import RouterElement from "../staticElems/routerElem";
import { useParams } from "react-router-dom";
import BillingHeader from "./components/billing-header";
import OrderList from "./components/orders-list";
export default function Billing(){
    
    const {id} = useParams()
    return (
                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[48px]">
                    <div className="w-full flex flex-col justify-start items-start gap-y-[16px]">
                        <RouterElement params={id}/>
                        <BillingHeader admin={true}/>
                        <OrderList admin={true}/>
                    </div>

                </div>
    )
}