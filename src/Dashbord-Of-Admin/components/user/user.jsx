import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User(){

    const users = [
        {id : "1" , name : "فرحان" , lastName : "علیمحمدی" , email : "farhanmohammadi045@gmail.com" , userName : "ferivv" , points : 0 , logInTime : "16:47" , logInDate : "2022/4/18"} , 
        {id : "2" , name : "ali" , lastName : "salehei" , email : "salehali00@gmail.com" , userName : "GHDjbv" , points : 3 , logInTime : "19:31" , logInDate : "2020/10/4"} , 
        {id : "3" , name : "vali" , lastName : "asghari" , email : "asgharv1374@gmail.com" , userName : "BHsfg" , points : 6 , logInTime : "16:12" , logInDate : "2019/12/9"} , 
        {id : "4" , name : "bahram" , lastName : "aghaienasab" , email : "bahram.gg.agha2@gmail.com" , userName : "vnjfa" , points : 0 , logInTime : "12:18" , logInDate : "2024/7/27"} , 
        {id : "5" , name : "erfan" , lastName : "alimohammadi" , email : "erfanmohammadi33@gmail.com" , userName : "fbvaori" , points : 1 , logInTime : "5:54" , logInDate : "2021/9/29"} , 
        {id : "6" , name : "mohammad" , lastName : "maisamie" , email : "nohammdmaisam756@gmail.com" , userName : "LDFVNHy" , points : 0 , logInTime : "22:57" , logInDate : "2023/3/13"} , 
    ]

    const [searchInput , setSearchInput] = useState("")
    const handleSearch = (e) => {
        const value = e.target.value
        setSearchInput((prev) => (prev = value))

    }

    const filteredUsers = users.filter(user =>
        user.userName.toLowerCase().includes(searchInput.toLowerCase())
    );

    const navigate = useNavigate(); 

    const handleNavigateButton = (e) => {
        const button = e.currentTarget;
        const userName = button.id;
        navigate(`/dashbord/user/profile/${userName}`);
    };


    return(
        <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[50px]">
            <div className="w-full flex flex-col justify-start items-start gap-y-[16px]">
                <div className="w-full bg-componentBg-mainBg p-4 gap-y-4 flex flex-col justify-center items-center rounded-[16px] ">
                    <div className="w-full flex flex-row justify-start items-center gap-x-2 border-b-[1px] border-solid border-[#a0a0a0] pb-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2133 14.4933C16.08 14.48 15.92 14.48 15.7733 14.4933C12.6 14.3867 10.08 11.7867 10.08 8.58667C10.08 5.32 12.72 2.66667 16 2.66667C19.2667 2.66667 21.92 5.32 21.92 8.58667C21.9067 11.7867 19.3867 14.3867 16.2133 14.4933Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.54668 19.4133C6.32001 21.5733 6.32001 25.0933 9.54668 27.24C13.2133 29.6933 19.2267 29.6933 22.8933 27.24C26.12 25.08 26.12 21.56 22.8933 19.4133C19.24 16.9733 13.2267 16.9733 9.54668 19.4133Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="text-logoSize text-textsColor-texts font-bold">user</span>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center px-2 relative ">
                        <span className="absolute left-[14px] z-10">       
                            <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 22L20 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <input
                            value={searchInput}
                            onChange={handleSearch}
                            type="text"
                            className="w-[240px] search-input py-2 px-4 pl-9 text-textsColor-texts text-nameSize font-light bg-componentBg-inputBg border-none outline-none focus:border-[1px] focus:border-btnColors-Mailblue focus:border-solid focus:scale-[1.02] transition-all duration-500 ease-linear rounded-[8px]"
                            placeholder="Write Here"
                        />
                        <span className="text-nameSize text-textsColor-texts font-medium ">report</span>
                    </div>
                </div>

                {filteredUsers.map((user) => (

                    <div key={user.id} className="flex flex-row justify-between items-stretch gap-x-[40px] w-full p-4 bg-componentBg-mainBg rounded-[12px]">

                        <div className="flex flex-col justify-start items-center">
                            <div className="w-[80px] h-[80px] rounded-full bg-[#ADE7FF] flex justify-center items-end overflow-hidden">
                                <svg width="60" height="66" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.5858 32C30.2444 31.9511 29.8053 31.9511 29.4151 32C20.8297 31.7069 14.0005 24.6718 14.0005 16.0244C14.0005 7.18168 21.1224 0 30.0005 0C38.8297 0 46.0005 7.18168 46.0005 16.0244C45.9517 24.6718 39.1712 31.7069 30.5858 32Z" fill="#1481FE"/>
                                    <path d="M60 58.4311C52.0772 66.8728 41.5727 72 30 72C18.4273 72 7.92285 66.8728 0 58.4311C0.445104 53.5628 3.11573 48.7982 7.87834 45.0693C20.0742 35.6436 40.0148 35.6436 52.1217 45.0693C56.8843 48.7982 59.5549 53.5628 60 58.4311Z" fill="#1481FE"/>
                                </svg>
                            </div>
                        </div>

                        <div className=" flex flex-col justify-center items-stretch gap-y-1">
                            <h3 className="text-nameSize text-textsColor-texts font-bold flex flex-row gap-x-1"> <span className="">{user.name}</span> <span>{user.lastName}</span></h3>
                            <button onClick={handleNavigateButton} id={user.userName} className=" w-[260px] flex-wrap flex flex-row justify-start items-center gap-x-2 cursor-pointer hover:text-btnColors-Mailblue hover:scale-[0.98] transition-all duration-300 ease-linear ">
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.08 5.935C6.03 5.93 5.97 5.93 5.915 5.935C4.725 5.895 3.78 4.92 3.78 3.72C3.78 2.495 4.77 1.5 6 1.5C7.225 1.5 8.22 2.495 8.22 3.72C8.215 4.92 7.27 5.895 6.08 5.935Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.57999 7.78C2.36999 8.59 2.36999 9.91 3.57999 10.715C4.95499 11.635 7.20999 11.635 8.58499 10.715C9.79499 9.905 9.79499 8.585 8.58499 7.78C7.21499 6.865 4.95999 6.865 3.57999 7.78Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="text-nameSize text-textsColor-texts font-light hover:text-btnColors-Mailblue transition-all duration-300 ease-linear ">{user.email}</span>
                            </button>
                            <button onClick={handleNavigateButton} id={user.userName} className=" w-[260px] flex-wrap flex flex-row justify-start items-center gap-x-2 cursor-pointer hover:text-btnColors-Mailblue hover:scale-[0.98] transition-all duration-300 ease-linear ">
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.08 5.935C6.03 5.93 5.97 5.93 5.915 5.935C4.725 5.895 3.78 4.92 3.78 3.72C3.78 2.495 4.77 1.5 6 1.5C7.225 1.5 8.22 2.495 8.22 3.72C8.215 4.92 7.27 5.895 6.08 5.935Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.57999 7.78C2.36999 8.59 2.36999 9.91 3.57999 10.715C4.95499 11.635 7.20999 11.635 8.58499 10.715C9.79499 9.905 9.79499 8.585 8.58499 7.78C7.21499 6.865 4.95999 6.865 3.57999 7.78Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="text-nameSize text-textsColor-texts font-light hover:text-btnColors-Mailblue transition-all duration-300 ease-linear ">{user.userName}</span>
                            </button>
                            <button onClick={handleNavigateButton} id={user.userName} className=" w-[260px] flex-wrap flex flex-row justify-start items-center gap-x-2 cursor-pointer hover:text-btnColors-Mailblue hover:scale-[0.98] transition-all duration-300 ease-linear ">
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6.20001C4 6.58501 4.3 6.90001 4.665 6.90001H5.415C5.735 6.90001 5.995 6.62501 5.995 6.29001C5.995 5.92501 5.835 5.79501 5.6 5.71001L4.4 5.29001C4.16 5.20501 4 5.07501 4 4.71001C4 4.37501 4.26 4.10001 4.58 4.10001H5.33C5.7 4.10501 6 4.41501 6 4.80001" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 6.92499V7.29499" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 3.70499V4.09499" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.995 9.49C7.20138 9.49 8.99 7.70138 8.99 5.495C8.99 3.28862 7.20138 1.5 4.995 1.5C2.78862 1.5 1 3.28862 1 5.495C1 7.70138 2.78862 9.49 4.995 9.49Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.48999 10.44C6.93999 11.075 7.67499 11.49 8.51499 11.49C9.87999 11.49 10.99 10.38 10.99 9.015C10.99 8.185 10.58 7.45 9.95499 7" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="text-nameSize text-textsColor-texts font-light hover:text-btnColors-Mailblue transition-all duration-300 ease-linear ">{user.points} try fund Points</span>
                            </button>
                        </div>

                        <div className="flex flex-col justify-start items-center ">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12C2 17.52 6.48 22 12 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
                                </svg>
                                <span className="text-textsColor-texts textnameSize font-medium ">{user.logInDate}</span>
                                <span className="text-textsColor-texts textnameSize font-medium ">{user.logInTime}</span>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-start gap-x-[10px] ">
                            {/*دکمه های notif , coupon در زمانی دیگر درست خواهد شد.*/}
                            {['point' , 'coupon' , 'notif' , 'more'].map((item) => (
                                <button id={user.userName} onClick={item === "more" ? handleNavigateButton : null} className="text-textsColor-texts text-nameSize font-medium px-4 py-2 border-[1px] border-solid border-textsColor-texts rounded-[8px] hover:scale-[0.98] hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-300 ease-linear">
                                    {item}
                                </button>
                            ))}
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}