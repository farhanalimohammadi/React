import React from "react";
import { useParams } from "react-router-dom";
import ProfileNavBar from './user-profile/nav-of-profile'
import Profile from "./user-profile/profile-content";

export default function UserProfile(){

    const users = [
        {id : "1" , name : "فرحان" , lastName : "علیمحمدی" , email : "farhanmohammadi045@gmail.com" , userName : "ferivv" , points : 0 , logInTime : "16:47" , logInDate : "2022/4/18"} , 
        {id : "2" , name : "ali" , lastName : "salehei" , email : "salehali00@gmail.com" , userName : "GHDjbv" , points : 3 , logInTime : "19:31" , logInDate : "2020/10/4"} , 
        {id : "3" , name : "vali" , lastName : "asghari" , email : "asgharv1374@gmail.com" , userName : "BHsfg" , points : 6 , logInTime : "16:12" , logInDate : "2019/12/9"} , 
        {id : "4" , name : "bahram" , lastName : "aghaienasab" , email : "bahram.gg.agha2@gmail.com" , userName : "vnjfa" , points : 0 , logInTime : "12:18" , logInDate : "2024/7/27"} , 
        {id : "5" , name : "erfan" , lastName : "alimohammadi" , email : "erfanmohammadi33@gmail.com" , userName : "fbvaori" , points : 1 , logInTime : "5:54" , logInDate : "2021/9/29"} , 
        {id : "6" , name : "mohammad" , lastName : "maisamie" , email : "nohammdmaisam756@gmail.com" , userName : "LDFVNHy" , points : 0 , logInTime : "22:57" , logInDate : "2023/3/13"} , 
    ]
    const {name} = useParams()
    const userInfo = users.filter((user) => user.userName === name)
    

    return(
        <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[50px]">
            <ProfileNavBar />
            <Profile users={userInfo}/>
        </div>
    )
}