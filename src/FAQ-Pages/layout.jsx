import { Outlet } from "react-router-dom";
import Header2 from "../staticElems/main-header/header-2";
import Footer from "../staticElems/footer/Footer";
import { useState } from "react";

function FAQlayout() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="w-full min-h-screen bg-componentBg-primeryBg flex flex-col justify-start items-center relative overflow-x-hidden">
      <Header2/>
      <div className="absolute -right-12 top-6 w-[200px] h-[200px] blur-[150px] bg-btnColors-Mailblue shadow-[0_0_20px_#1481FE] rounded-full z-10"></div>
      <div className="absolute -left-12 bottom-[600px] w-[200px] h-[200px] blur-[150px] bg-btnColors-Mailblue shadow-[0_0_20px_#1481FE] rounded-full z-10"></div>

      <div className="w-full flex flex-col justify-start items-center gap-y-[120px] mt-[140px]">
        <div className="flex flex-col justify-center items-center gap-y-8 w-full relative">
          <label className="text-textsColor-texts text-[32px] font-bold" htmlFor="search-faq">Frequently Asked Questions</label>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search" 
            name="search-faq" 
            id="search-faq" 
            placeholder="Write Here..." 
            className="w-[75.66%] bg-componentBg-inputBg rounded-[12px] pl-10 pr-4 py-3 border-none outline-none text-textsColor-texts text-nameSize font-medium z-10 focus:shadow-[0px_0px_30px_-8px_#1481FE] transition-all duration-300 ease-linear"
            value={searchTerm}
          />
          <div className="w-[75.66%] absolute bottom-0 py-3 flex justify-start items-center">
            <span className="ml-2 z-10 cursor-pointer">                    
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 22L20 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full">
          <Outlet context={{ searchTerm }}/>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default FAQlayout;