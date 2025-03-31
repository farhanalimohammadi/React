// import React, { useState } from "react";

// export default function NickName({EditNickname}){

//     const [nickName , setNickName] = useState({
//         name : "" ,
//     })

//     const handleNickName = (e) => {
//         const {name , value} = e.target
//         setNickName((prev) => ({...prev , [name]: value})) 
//     }
//     return(
//         <div className="w-[450px] bg-componentBg-mainBg rounded-[8px] flex flex-col justify-center items-stretch fixed top-[40%]  right-[32%]">
//             <div className="w-full p-4 flex justify-between items-center flex-row border-b-[2px] border-solid border-[#a1a1a1]">
//                 <span className="text-textsColor-texts text-nameSize font-bold">Edit My Profile</span>
//                 <svg className="cursor-pointer w-[24px] h-[24px] fill-textsColor-texts hover:fill-[#FC3548] transition-all duration-300 ease-linear "  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" />
//                 </svg>
//             </div>
//             <div className="w-full flex flex-col p-4 justify-center items-stretch gap-y-4 border-b-[1px] border-solid border-[#a1a1a1]">
//                 <div className="w-full bg-[#3F311E] text-[#BA833D] rounded-[8px] p-2 flex flex-row justify-center items-start gap-x-2">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z" stroke="#BA833D" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M8.99609 12.75L8.99609 9" stroke="#BA833D" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M9.00391 6.75L8.99717 6.75" stroke="#BA833D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                     <span className="text-[12px] font-light leading-[19.36px]">
//                     Nickname cannot be changed. For any concerns or changes, please contact support@ftmo.com.
//                     </span>
//                 </div>
//                 <div className="w-full flex flex-col justify-center items-start gap-y-2">
//                     <label className="text-nameSize text-textsColor-texts font-bold cursor-pointer select-none" htmlFor="nickame">NickName</label>
//                     <input
//                     className="w-full bg-componentBg-inputBg border-none outline-none rounded-[8px] text-textsColor-texts text-nameSize font-light px-4 py-3 focus:scale-[0.98] transition-all duration-300 "
//                     type="text"
//                     value={NickName.value}
//                     onChange={handleNickName} />
//                 </div>
                
//             </div>
//             <div className="w-full p-4 flex flex-row justify-center items-center gap-x-2 ">
//                 <button className="px-4 py-2 rounded-[4px] bg-componentBg-buttonBg border-none outline-none text-textsColor-texts text-nameSize font-medium hover:bg-componentBg-buttonBg/60 transition-all duration-300 ease-linear" >Close</button>
//                 <button className="px-4 py-2 rounded-[4px] bg-btnColors-Mailblue border-none outline-none text-textsColor-texts text-nameSize font-medium hover:bg-btnColors-Mailblue/60 transition-all duration-300 ease-linear" >Save</button>
//             </div>
//         </div>
//     )
// }
import React, { useState } from "react";

export default function NickName({ closeModal }) {
    const [nickName, setNickName] = useState({
        name: "",
    });

    const handleNickName = (e) => {
        const { name, value } = e.target;
        setNickName((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-[600px] bg-componentBg-mainBg rounded-[8px] flex flex-col justify-center items-stretch z-50">
            <div className="w-full p-4 flex justify-between items-center flex-row border-b-[2px] border-solid border-[#a1a1a1]">
                <span className="text-textsColor-texts text-nameSize font-bold">Edit My Profile</span>
                <svg 
                    onClick={closeModal} 
                    className="cursor-pointer w-[24px] h-[24px] fill-textsColor-texts hover:fill-[#FC3548] transition-all duration-300 ease-linear" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" />
                </svg>
            </div>
            <div className="w-full flex flex-col p-4 justify-center items-stretch gap-y-4 border-b-[1px] border-solid border-[#a1a1a1]">
                <div className="w-full bg-[#3F311E] text-[#BA833D] rounded-[8px] p-2 flex flex-row justify-center items-start gap-x-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z" stroke="#BA833D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.99609 12.75L8.99609 9" stroke="#BA833D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.00391 6.75L8.99717 6.75" stroke="#BA833D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="text-[12px] font-light leading-[19.36px]">
                        Nickname cannot be changed. For any concerns or changes, please contact support@ftmo.com.
                    </span>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-y-2">
                    <label className="text-nameSize text-textsColor-texts font-bold cursor-pointer select-none" htmlFor="nickname">NickName</label>
                    <input
                        name="name"
                        className="w-full bg-componentBg-inputBg border-none outline-none rounded-[8px] text-textsColor-texts text-nameSize font-light px-4 py-3 focus:scale-[0.98] transition-all duration-300"
                        type="text"
                        value={nickName.name}
                        onChange={handleNickName}
                    />
                </div>
            </div>
            <div className="w-full p-4 flex flex-row justify-center items-center gap-x-2">
                <button 
                    onClick={closeModal} 
                    className="px-4 py-2 rounded-[4px] bg-componentBg-buttonBg border-none outline-none text-textsColor-texts text-nameSize font-medium hover:bg-componentBg-buttonBg/60 transition-all duration-300 ease-linear"
                >
                    Close
                </button>
                <button className="px-4 py-2 rounded-[4px] bg-btnColors-Mailblue border-none outline-none text-textsColor-texts text-nameSize font-medium hover:bg-btnColors-Mailblue/60 transition-all duration-300 ease-linear">
                    Save
                </button>
            </div>
        </div>
    );
}