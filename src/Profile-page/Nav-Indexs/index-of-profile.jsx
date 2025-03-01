import React, { useState } from "react";
import ProfileInfo from "../componets/Personal-information/profile-info";
import Clients from "../componets/Personal-information/clientPart";
import EditImage from "../componets/Personal-information/Edit-profile-image";
import NickName from "../componets/Personal-information/Edit-nickname";

import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleEditProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };


    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleEditName = () => {
        setIsEditOpen(!isEditOpen);
    };
    React.useEffect(() => {
        if (isEditOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isEditOpen]);

    return (
        <div>
                <ProfileInfo EditProfile={handleEditProfile} EditNickName={handleEditName} />
                <div className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${isProfileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <EditImage />
                </div>
                <Clients />
                <div className="w-full p-4 flex flex-col justify-between items-start gap-y-[16px]">
                    <div className="flex flex-row justify-start items-center gap-x-[12px]">
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Privacy policy
                        </h3>
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Terms & Conditions
                        </h3>
                    </div>
                    <p className="text-justify text-nameSize text-textsColor-texts">
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            {/*Modal of Edit NickName*/}
                <AnimatePresence>
                    {isEditOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                                onClick={handleEditName}
                            />
                            <motion.div
                                initial={{ y: "-100vh" }} 
                                animate={{ y: 0 }} 
                                exit={{ y: "-100vh" }} 
                                transition={{ type: "spring", stiffness: 100, damping: 20 }} 
                                className="fixed inset-0 flex items-center justify-center z-50"
                            >
                                <NickName closeModal={handleEditName} />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
        </div>
    );
}