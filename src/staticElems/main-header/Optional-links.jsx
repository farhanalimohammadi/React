import React , {useState} from "react";
import arrowdown from "../../Icons/arrowdown.svg"

export default function Links({ title , /*links*/}){
    const [isOpen, setIsOpen] = useState(false);

    // توابع برای باز و بسته کردن منو
    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className=" hover:scale-[1.02] flex items-center gap-2 hover:text-btnColors-Mailblue border-none outline-none transition-all durition-300 group"
            >
                <span className='group-hover:text-btnColors-Mailblue transition-all durition-300  text-textsColor-texts text-nameSize font-bold'>{title}</span>
                <svg
                            viewBox="0 0 18 9"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-[18px] h-[18px] text-white flex justify-center items-center group-hover:text-btnColors-Mailblue translate-y-[1px] transition-all duration-300 ease-linear transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                            fill="none"
                            stroke="currentColor"
                            >
                            <path
                                d="M16.9181 0.950195L10.3981 7.4702C9.62812 8.2402 8.36813 8.2402 7.59813 7.4702L1.07812 0.950195"
                                strokeWidth="1.5"
                            />
                </svg>
            </button>

            {/* منوی کشویی */}
                <ul
                className={`absolute right-0 mt-2 w-48 bg-componentBg-mainBg text-textsColor-texts shadow-lg rounded-[8px]  overflow-hidden transform ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} transition-all duration-500 ease-linear z-10`}
                onMouseLeave={() => setIsOpen(false)} // بستن منو هنگام ترک
                >
                    {/* {Map.links((link , index ) => {
                        <li>
                            <Link key={index} to={link}>
                               {link.text}
                            </Link>
                        </li>
                    })} */}
                    <li>
                        <p className="text-textsColor-texts text-nameSize cursor-pointer hover:bg-btnColors-Mailblue transition-all duration-300  font-medium px-4 py-2">Test</p>
                    </li>
                    <li>
                        <p className="text-textsColor-texts text-nameSize cursor-pointer hover:bg-btnColors-Mailblue transition-all duration-300  font-medium px-4 py-2">Test</p>
                    </li>
                    <li>
                        <p className="text-textsColor-texts text-nameSize cursor-pointer hover:bg-btnColors-Mailblue transition-all duration-300  font-medium px-4 py-2">Test</p>
                    </li>
                </ul>
        </div>
    )
}