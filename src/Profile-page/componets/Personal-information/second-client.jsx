import React , {useState , useEffect , useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoBox(){

    const [item , setItem ] = useState({
        countery: ''
    })

      const [isOpen, setIsOpen] = useState(false);
      const clientRef = useRef(null);
      const handleClickOutside = (e) => {
        if (clientRef.current && !clientRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    return (
        <div className="w-full flex flex-col justify-start items-start gap-y-4">
            <h3 className="text-textsColor-texts text-namesize font-bold ">client</h3>

            <div className="w-full flex flex-col justify-center items-center px-4 py-8 gap-y-8 bg-componentBg-mainBg rounded-[12px] ">

                <div className="w-full flex flex-row justify-start items-center gap-8 flex-wrap">
                    <div className="w-[48.35%] flex flex-col justify-center items-start gap-y-2">
                            <label htmlFor="phone" className="select-none text-nameSize text-textsColor-texts font-bold cursor-pointer">
                                Contact Phone
                            </label>
                            <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="w-full px-4 py-3 bg-componentBg-inputBg rounded-[8px] border-none outline-none text-textsColor-texts text-nameSize font-light"
                            value={"+989219861954"}
                            />
                    </div>

                    <div className="w-[48.35%] flex flex-col justify-center items-start gap-y-2">
                            <label htmlFor="email" className="select-none text-nameSize text-textsColor-texts font-bold cursor-pointer">
                                E-mail address
                            </label>
                            <input
                            type="text"
                            name="email"
                            id="eamil"
                            className="w-full px-4 py-3 bg-componentBg-inputBg rounded-[8px] border-none outline-none text-textsColor-texts text-nameSize font-light"
                            value={"maisam1334@gmail.com"}
                            />
                    </div>

                    <div ref={clientRef} className="w-[48.35%] flex flex-col justify-center items-start gap-y-2 relative">
                        <span className="text-nameSize text-textsColor-texts font-bold  select-none">Country of residence</span>
                        
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full cursor-pointer hover:scale-x-[0.99] bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium px-4 py-3 rounded-[8px] outline-none border-none transition-all duration-300 ease-linear flex flex-row justify-between items-center"
                        >
                            <span>{item.countery ? item.countery : "Select Countery"}</span>
                            <svg
                            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-linear`}
                            width="18"
                            height="9"
                            viewBox="0 0 18 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="w-full h-[120px] bg-componentBg-inputBg text-textsColor-texts absolute top-24 flex flex-col justify-start items-stretch rounded-[8px] overflow overflow-hidden"
                            >
                                {["iran" , "iraq" , "irland" , "italy" , "america" , "saudi" , "france" , "canada" , "turkiye" , "United Arab Emirates"].map((item) => (
                                <motion.span
                                    key={item}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                    setItem((prev) => ({ ...prev, countery: e.target.textContent }));
                                    setIsOpen(false);
                                    }}
                                    className="px-4 py-2 text-textsColor-texts text-nameSize font-light hover:bg-btnColors-Mailblue hover:text-white transition-all duration-200 ease-linear rounded-[8px] cursor-pointer"
                                >
                                    {item}
                                </motion.span>
                                ))}
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-8 flex-wrap">
                    <div className="w-[48.35%] flex flex-col justify-center items-start gap-y-2">
                            <label htmlFor="city" className="select-none text-nameSize text-textsColor-texts font-bold cursor-pointer">
                                City
                            </label>
                            <input
                            type="text"
                            name="city"
                            id="city"
                            className="w-full px-4 py-3 bg-componentBg-inputBg rounded-[8px] border-none outline-none text-textsColor-texts text-nameSize font-light"
                            value={"Abad"}
                            />
                    </div>

                    <div className="w-[48.35%] flex flex-col justify-center items-start gap-y-2">
                            <label htmlFor="street" className="select-none text-nameSize text-textsColor-texts font-bold cursor-pointer">
                                Street
                            </label>
                            <input
                            type="text"
                            name="street"
                            id="street"
                            className="w-full px-4 py-3 bg-componentBg-inputBg rounded-[8px] border-none outline-none text-textsColor-texts text-nameSize font-light"
                            value={"abad"}
                            />
                    </div>

                    <div className="w-[48.35%] flex flex-col justify-center items-start gap-y-2">
                            <label htmlFor="pstal" className="select-none text-nameSize text-textsColor-texts font-bold cursor-pointer">
                                Pstal Code
                            </label>
                            <input
                            type="text"
                            name="pstal"
                            id="pstal"
                            className="w-full px-4 py-3 bg-componentBg-inputBg rounded-[8px] border-none outline-none text-textsColor-texts text-nameSize font-light"
                            value={"0457768890"}
                            />
                    </div>

                </div>
            </div>
        </div>
    )
}

