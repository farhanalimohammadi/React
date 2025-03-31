import React , {useState} from "react";


export default function ProfileNavBar(){

    const [Items, setItems] = useState([
        { name: "Personal Information", id: "personalinformation", status: true },
        { name: "Account Information", id: "accountinformation", status: false },
        { name: "Security", id: "security", status: false },
        { name: "FTMO Identity", id: "identity", status: false },
        { name: "Newsletters", id: "newsletters", status: false },
        { name: "FTMO Points", id: "points", status: false },
    ]);
    
    
    return(
        <div className="w-full bg-componentBg-mainBg rounded-[12px] flex flex-col justify-center items-stretch">
            <div className="w-full p-4 flex flex-row justify-start items-center gap-x-2 border-b-[1px] border-solid border-[#a1a1a1] ">

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2115 14.4937C16.0781 14.4803 15.9181 14.4803 15.7715 14.4937C12.5981 14.387 10.0781 11.787 10.0781 8.58699C10.0781 5.32033 12.7181 2.66699 15.9981 2.66699C19.2648 2.66699 21.9181 5.32033 21.9181 8.58699C21.9048 11.787 19.3848 14.387 16.2115 14.4937Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.545 19.413C6.31833 21.573 6.31833 25.093 9.545 27.2397C13.2117 29.693 19.225 29.693 22.8917 27.2397C26.1183 25.0797 26.1183 21.5597 22.8917 19.413C19.2383 16.973 13.225 16.973 9.545 19.413Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <span className="text-logoSize text-textsColor-texts font-medium ">Profile</span>
            </div>
            <div className="w-full px-4 pt-4 flex flex-row justify-center items-end gap-x-6 ">
                {Items.map((item)=> (
                    <button
                    key={item.id}
                    id={item.id}
                    className={`p-4 flex flex-row justify-center items-center text-nameSize border-none ${item.status ? "text-btnColors-Mailblue " : " text-textsColor-texts"} font-medium cursor-pointer select-none relative`}>
                        {item.name}
                        {item.status ? (
                            <span className="w-full transition-all duration-300 ease-linear bg-btnColors-Mailblue h-[2px] rounded-[2px] absolute bottom-0"></span>
                        ) : null}
                    </button>
                ))}

            </div>
        </div>
    )
}