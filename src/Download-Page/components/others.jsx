import React from "react";

export default function Other(){
    return(
        <div className="w-full flex flex-col justify-start items-start gap-y-4 ">
            <h3 className="text-textsColor-texts text-nameSize font-bold ">
                Others
            </h3>

            <div className="w-full flex flex-col justify-start items-stretch gap-y-4 ">
                {["FTMO Background 1920x1080px (ZIP" , "Wallpapers" , "Piggy Bank 3D Model" , "Printable FTMO Posters"].map((item) => (
                    <span className="w-full bg-componentBg-mainBg rounded-[8px] p-4 flex flex-row justify-between items-center  ">
                        <span className=" flex flex-row justify-start items-center gap-x-4">
                            <svg width="37" height="50" viewBox="0 0 37 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0H24L37 13V44C37 47.3137 34.3137 50 31 50H6C2.68629 50 0 47.3137 0 44V6C0 2.68629 2.68629 0 6 0Z" fill="#535456"/>
                                <path d="M28 13H37L24 0V9C24 11.2091 25.7909 13 28 13Z" fill="#6D6D6D"/>
                                <path d="M6.97727 36V34.8295L13.0966 25.875H6.92614V24.3636H15.2443V25.5341L9.125 34.4886H15.2955V36H6.97727ZM19.2528 24.3636V36H17.4972V24.3636H19.2528ZM21.8097 36V24.3636H25.9574C26.8627 24.3636 27.6127 24.5284 28.2074 24.858C28.8021 25.1875 29.2472 25.6383 29.5426 26.2102C29.8381 26.7784 29.9858 27.4186 29.9858 28.1307C29.9858 28.8466 29.8362 29.4905 29.5369 30.0625C29.2415 30.6307 28.7945 31.0814 28.196 31.4148C27.6013 31.7443 26.8532 31.9091 25.9517 31.9091H23.0994V30.4205H25.7926C26.3646 30.4205 26.8286 30.322 27.1847 30.125C27.5407 29.9242 27.8021 29.6515 27.9688 29.3068C28.1354 28.9621 28.2188 28.5701 28.2188 28.1307C28.2188 27.6913 28.1354 27.3011 27.9688 26.9602C27.8021 26.6193 27.5388 26.3523 27.179 26.1591C26.8229 25.9659 26.3532 25.8693 25.7699 25.8693H23.5653V36H21.8097Z" fill="white"/>
                            </svg>
                            <span className="text-textsColor-texts text-nameSize font-bold">{item}</span>

                        </span>
                        <button className="flex justify-center items-center hover:scale-[1.02] hover:text-btnColors-Mailblue group ">
                            <svg className="group-hover:stroke-btnColors-Mailblue stroke-textsColor-texts group-hover:scale-[1.02] group-active:scale-90 group-active:stroke-textsColor-texts transition-all duration-300 ease-linear" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9219 11.8662C26.7219 12.2795 28.6819 14.7462 28.6819 20.1462V20.3195C28.6819 26.2795 26.2953 28.6662 20.3353 28.6662H11.6553C5.69526 28.6662 3.30859 26.2795 3.30859 20.3195V20.1462C3.30859 14.7862 5.24193 12.3195 9.96193 11.8795"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 2.66699V19.8403"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.4685 16.8662L16.0018 21.3329L11.5352 16.8662"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </span>

                ))}
            </div>
        </div>
    )
}