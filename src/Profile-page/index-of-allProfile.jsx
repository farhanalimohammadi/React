import React, { useEffect, useState } from "react";
import RouterElement from '../staticElems/routerElem';
import ProfileNavBar from "./componets/Personal-information/nav-of-profile";
import {Outlet, useParams } from "react-router-dom";
import useUpdatePath from "../hooks/useUpdatePath";



export default function AllProfile() {

    // const [navItems , setNavItems] = useState({
    //     personalInformation : false,
    //     accountInformation : false,
    //     security : false,
    //     identity : false,
    //     newsLetters : false,
    //     points : false,
    // })

    useUpdatePath(); 
    const {param} = useParams()

    const handleParam = () => {
        setNavItems((prev) => prev.map((item) => ({...item , status: item.id === param ? true : false})))
    }
    useEffect(() => {
        handleParam()
    } , [])
    
    const [navItems, setNavItems] = useState([
        { name: "Personal Information", id: "personalinformation", status: true },
        { name: "Account Information", id: "accountinformation", status: false },
        { name: "Security", id: "security", status: false },
        { name: "FTMO Identity", id: "identity", status: false },
        { name: "Newsletters", id: "newsletters", status: false },
        { name: "FTMO Points", id: "points", status: false },
    ]);
    return (

        <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[50px]">

                <RouterElement />
                <ProfileNavBar Items={navItems} />
                {/*other elements in Profile: */}
                <Outlet/>
        </div>
    );
}