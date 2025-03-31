// import React from "react";
// import { useState , useRef , useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function LastPartSid(){
//     const [register , setRegister] = useState({
//         items: '',
//         items2: '',
//     })
//       const [isOpen, setIsOpen] = useState(false);
//       const [isOpen2, setIsOpen2] = useState(false);
//       const selectRef = useRef(null);
//       const selectRef2 = useRef(null);
//       const handleClickOutside = (e) => {
//         if (selectRef.current && !selectRef.current.contains(e.target)) {
//           setIsOpen(false);
//         }
//       };
//       const handleClickOutside2 = (e) => {
//         if (selectRef2.current && !selectRef2.current.contains(e.target)) {
//           setIsOpen2(false);
//         }
//       }

//         useEffect(() => {
//           document.addEventListener("mousedown", handleClickOutside);
//           return () => document.removeEventListener("mousedown", handleClickOutside);
//         }, []);
//         useEffect(() => {
//           document.addEventListener("mousedown", handleClickOutside2);
//           return () => document.removeEventListener("mousedown", handleClickOutside2);
//         }, []);
//     return(
//         <div className="w-full flex flex-col justify-start items-stretch ">
//             <div ref={selectRef} className="w-full flex flex-col items-start justify-center gap-y-2 relative">
                    
//                     <div
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="w-full cursor-pointer hover:scale-x-[0.99] bg-componentBg-mainBg text-textsColor-texts text-nameSize font-bold px-4 py-3 outline-none transition-all duration-300 ease-linear flex flex-row justify-between items-center border-t-[1px] border-b-[1px] border-solid border-[#aeaeae]"
//                     >
//                         <span>{register.items ? register.items : "Tools & Services"}</span>
//                         <svg
//                         className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-linear`}
//                         width="18"
//                         height="9"
//                         viewBox="0 0 18 9"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         >
//                         <path
//                             d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             strokeMiterlimit="10"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         </svg>
//                         </div>
//                         <AnimatePresence>
//                             {isOpen && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                                 className="w-full bg-componentBg-inputBg text-textsColor-texts absolute top-[84px] flex flex-col justify-start items-stretch rounded-[8px]"
//                             >
//                                 {["first item", "second item", "third item"].map((item) => (
//                                 <motion.span
//                                     key={item}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     onClick={(e) => {
//                                     setRegister((prev) => ({ ...prev, items: e.target.textContent }));
//                                     setIsOpen(false);
//                                     }}
//                                     className="px-4 py-2 text-textsColor-texts text-nameSize font-light hover:bg-btnColors-Mailblue hover:text-white transition-all duration-200 ease-linear rounded-[8px] cursor-pointer"
//                                 >
//                                     {item}
//                                 </motion.span>
//                                 ))}
//                             </motion.div>
//                             )}
//                     </AnimatePresence>
//                 </div>
//                 <div ref={selectRef2} className="w-full flex flex-col items-start justify-center gap-y-2 relative">
                    
//                     <div
//                         onClick={() => setIsOpen2(!isOpen2)}
//                         className="w-full cursor-pointer hover:scale-x-[0.99] bg-componentBg-mainBg text-textsColor-texts text-nameSize font-bold px-4 py-3  outline-none  transition-all duration-300 ease-linear flex flex-row justify-between items-center border-t-[1px] border-b-[1px] border-solid border-[#aeaeae]"
//                     >
//                         <span>{register.items2 ? register.items2 : "Support"}</span>
//                         <svg
//                         className={`${isOpen2 ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-linear`}
//                         width="18"
//                         height="9"
//                         viewBox="0 0 18 9"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         >
//                         <path
//                             d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             strokeMiterlimit="10"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         </svg>
//                     </div>
//                     <AnimatePresence>
//                         {isOpen2 && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 10 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }}
//                             className="w-full h-[120px] bg-componentBg-inputBg text-textsColor-texts absolute -top-24 flex flex-col justify-start items-stretch rounded-[8px] overflow overflow-hidden"
//                         >
//                             {["first item", "second item", "third item"].map((item) => (
//                             <motion.span
//                                 key={item}
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={(e) => {
//                                 setRegister((prev) => ({ ...prev, items2: e.target.textContent }));
//                                 setIsOpen(false);
//                                 }}
//                                 className="px-4 py-2 text-textsColor-texts text-nameSize font-light hover:bg-btnColors-Mailblue hover:text-white transition-all duration-200 ease-linear rounded-[8px] cursor-pointer"
//                             >
//                                 {item}
//                             </motion.span>
//                             ))}
//                         </motion.div>
//                         )}
//                 </AnimatePresence>
//             </div>
//         </div>
//     )
// }
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownItem = ({ title, items, value, onSelect, isOpen, toggleOpen, selectRef }) => {
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const itemVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div ref={selectRef} className="w-full flex flex-col items-start justify-center">
      <div
        onClick={toggleOpen}
        className="w-full cursor-pointer hover:scale-x-[0.99] bg-componentBg-mainBg text-textsColor-texts text-nameSize font-bold px-6 py-4 outline-none transition-all duration-300 ease-linear flex justify-between items-center border-b-[1px] border-solid border-textsColor-texts/50"
      >
        <span>{value || title}</span>
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
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full bg-componentBg-mainBg text-textsColor-texts flex flex-col justify-start items-stretch"
          >
            {items.map((item , index) => (
              <motion.a
                key={item.text}
                href={item.link}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => onSelect(item.text)}
                className={`px-6 py-3 text-nameSize font-light hover:bg-btnColors-Mailblue hover:text-white transition-all duration-200 ease-linear cursor-pointer ${index + 1 === items.length ? "border-b-[1px] border-solid border-textsColor-texts/50" : "border-none"}`}
              >
                {item.text}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function DropdownMenu() {
  const [registers, setRegisters] = useState({
    tools: "",
    support: ""
  });
  const [openStates, setOpenStates] = useState({});
  const refs = useRef({});

  const dropdowns = [
    {
      id: "tools",
      title: "Tools & Services",
      items: [
        { text: "Tool 1", link: "/tools/1" },
        { text: "Tool 2", link: "/tools/2" },
        { text: "Tool 3", link: "/tools/3" }
      ]
    },
    {
      id: "support",
      title: "Support",
      items: [
        { text: "FAQ", link: "/support/faq" },
        { text: "Contact", link: "/support/contact" },
        { text: "Help", link: "/support/help" }
      ]
    },
    {
      id: "app",
      title: "Mobile app",
      items: [
        { text: "FAQ", link: "/support/faq" },
        { text: "Contact", link: "/support/contact" },
        { text: "Help", link: "/support/help" }
      ]
    },
    // Add more dropdowns here as needed
  ];

  const handleClickOutside = (id) => (e) => {
    if (refs.current[id] && !refs.current[id].contains(e.target)) {
      setOpenStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    const listeners = dropdowns.map(({ id }) => {
      const handler = handleClickOutside(id);
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    });

    return () => listeners.forEach((cleanup) => cleanup());
  }, []);

  const toggleDropdown = (id) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (id) => (value) => {
    setRegisters((prev) => ({ ...prev, [id]: value }));
    setOpenStates((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="w-full flex flex-col justify-start items-stretch">
      {dropdowns.map(({ id, title, items }) => (
        <DropdownItem
          key={id}
          title={title}
          items={items}
          value={registers[id]}
          onSelect={handleSelect(id)}
          isOpen={openStates[id] || false}
          toggleOpen={() => toggleDropdown(id)}
          selectRef={(el) => (refs.current[id] = el)}
        />
      ))}
    </div>
  );
}