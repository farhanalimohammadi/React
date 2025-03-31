import React from "react";

export default function Platform(){

    return(
        <div className="w-full flex flex-col justify-start items-start gap-y-4">
            <h3 className="text-textsColor-texts text-nameSize font-bold ">Platforms</h3>
            <div className="w-full flex flex-col justify-start items-stretch gap-y-4">
                {/*اینجا قراره برای این محتوا یه حلقه مپ درست کنم و اطلاعاتی اگه از سرور بساد با اون بزنم و اگرم نیومد با اطلاعات داینامیک میزنم که قراره داده بشه ...*/}
                <span className="w-full bg-componentBg-mainBg rounded-[8px] p-4 flex flex-row justify-between items-center  ">
                    <span className=" flex justify-center items-center translate-x-[-16px] translate-y-[-4px]">
                        <img className="w-[219px] h-[44px] object-cover" src="https://s3-alpha-sig.figma.com/img/2175/3c84/581924f72be8c9961d07a2d4d4c98679?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CtHNziNgdCDaiqfbceJ46MKPbJyvzLiRnBSkPD631s1R-XV0DveuCFbstAoNXzWeGk7jeA~bsbRMmL1t9Edt~kRHcle1TIjfpC3dcGXW8zLyxvwKthSWX1HcnBS7gEi9AyEIHFX33NyT5TQ8fY9aHlQJoT2n73xaHzDZfNBGZfJlztp6RdOvMdaeV-P4VHnQz~MKPBUYlJEjnh4bY2CfQybTNGBECVl51d8cP35Gp4ntTWQ-PZH89TcaHklWNMIecRtBJEeCkxGRb1urJsdTTj1c-dSQHPD-xmm0pMPkjC7yfqxEfJ~FdF05WJRDyCxmr1bGDeV1YB~kH~dSwSDqOg__" alt="" />
                    </span>
                    <button className="flex justify-center items-center px-4 py-3 bg-componentBg-mainBg text-btnColors-Mailblue border-[1.5px] border-btnColors-Mailblue border-solid rounded-[8px] text-nameSize font-semibold hover:text-textsColor-texts hover:border-textsColor-texts hover:scale-[1.02] active:scale-90 active:border-btnColors-Mailblue active:text-btnColors-Mailblue transition-all duration-300 ease-linear  ">Supported platforms</button>
                </span>

                <span className="w-full bg-componentBg-mainBg rounded-[8px] p-4 flex flex-row justify-between items-center  ">
                    <span className=" flex justify-center items-center translate-x-[-16px] translate-y-[-4px]">
                        <img className="w-[219px] h-[44px] object-cover" src="https://s3-alpha-sig.figma.com/img/2175/3c84/581924f72be8c9961d07a2d4d4c98679?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CtHNziNgdCDaiqfbceJ46MKPbJyvzLiRnBSkPD631s1R-XV0DveuCFbstAoNXzWeGk7jeA~bsbRMmL1t9Edt~kRHcle1TIjfpC3dcGXW8zLyxvwKthSWX1HcnBS7gEi9AyEIHFX33NyT5TQ8fY9aHlQJoT2n73xaHzDZfNBGZfJlztp6RdOvMdaeV-P4VHnQz~MKPBUYlJEjnh4bY2CfQybTNGBECVl51d8cP35Gp4ntTWQ-PZH89TcaHklWNMIecRtBJEeCkxGRb1urJsdTTj1c-dSQHPD-xmm0pMPkjC7yfqxEfJ~FdF05WJRDyCxmr1bGDeV1YB~kH~dSwSDqOg__" alt="" />
                    </span>
                    <button className="flex justify-center items-center px-4 py-3 bg-componentBg-mainBg text-btnColors-Mailblue border-[1.5px] border-btnColors-Mailblue border-solid rounded-[8px] text-nameSize font-semibold hover:text-textsColor-texts hover:border-textsColor-texts hover:scale-[1.02] active:scale-90 active:border-btnColors-Mailblue active:text-btnColors-Mailblue transition-all duration-300 ease-linear  ">Supported platforms</button>
                </span>

                <span className="w-full bg-componentBg-mainBg rounded-[8px] p-4 flex flex-row justify-between items-center  ">
                    <span className=" flex justify-center items-center translate-x-[-16px] translate-y-[-4px]">
                        <img className="w-[219px] h-[44px] object-cover" src="https://s3-alpha-sig.figma.com/img/2175/3c84/581924f72be8c9961d07a2d4d4c98679?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CtHNziNgdCDaiqfbceJ46MKPbJyvzLiRnBSkPD631s1R-XV0DveuCFbstAoNXzWeGk7jeA~bsbRMmL1t9Edt~kRHcle1TIjfpC3dcGXW8zLyxvwKthSWX1HcnBS7gEi9AyEIHFX33NyT5TQ8fY9aHlQJoT2n73xaHzDZfNBGZfJlztp6RdOvMdaeV-P4VHnQz~MKPBUYlJEjnh4bY2CfQybTNGBECVl51d8cP35Gp4ntTWQ-PZH89TcaHklWNMIecRtBJEeCkxGRb1urJsdTTj1c-dSQHPD-xmm0pMPkjC7yfqxEfJ~FdF05WJRDyCxmr1bGDeV1YB~kH~dSwSDqOg__" alt="" />
                    </span>
                    <button className="flex justify-center items-center px-4 py-3 bg-componentBg-mainBg text-btnColors-Mailblue border-[1.5px] border-btnColors-Mailblue border-solid rounded-[8px] text-nameSize font-semibold hover:text-textsColor-texts hover:border-textsColor-texts hover:scale-[1.02] active:scale-90 active:border-btnColors-Mailblue active:text-btnColors-Mailblue transition-all duration-300 ease-linear  ">Supported platforms</button>
                </span>
            </div>
        </div>
    )
}