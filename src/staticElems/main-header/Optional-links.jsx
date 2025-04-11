import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Links = ({ title, subLinks = [], onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, []);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  const handleSubLinkClick = useCallback((subLink) => {
    setIsOpen(false);
    
    if (subLink.ref && subLink.ref.current) {
      subLink.ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (subLink.herf) {
      navigate(subLink.herf);
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  }, [navigate, onLinkClick]);

  return (
    <div 
      className="relative w-full cursor-pointer" 
      ref={dropdownRef}
      onClick={handleClick}
    >
      <div className="select-none group flex flex-row justify-between thirdRes:justify-center thirdRes:gap-x-2  items-center w-full p-2">
        <span className={`select-none text-textsColor-texts text-nameSize font-medium transition-all group-hover:text-btnColors-Mailblue duration-200 ${
          isOpen ? 'text-btnColors-Mailblue' : 'hover:text-btnColors-Mailblue'
        }`}>
          {title}
        </span>
        <svg
          className={`select-none stroke-textsColor-texts group-hover:stroke-btnColors-Mailblue w-6 h-6 transform transition-all duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.9181 8.9502L13.3981 15.4702C12.6281 16.2402 11.3681 16.2402 10.5981 15.4702L4.07812 8.9502" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {isOpen && (
        <div className=" select-none thirdRes:absolute relative top-0 thirdRes:top-full left-0 w-full thirdRes:w-48 bg-componentBg-mainBg2 rounded-[4px] transform transition-all duration-200 ease-in-out z-50">
          <div className=" select-none w-full flex flex-col justify-start items-stretch">
            {subLinks.map((subLink, index) => (
              <button
                key={index}
                className={` select-none w-full text-left p-4  cursor-pointer text-textsColor-texts text-[14px] font-medium transition-all duration-200 ${
                  index + 1 === subLinks.length
                    ? 'rounded-b-[4px]'
                    : index === 0
                    ? 'rounded-t-[4px]'
                    : 'rounded-none'
                } hover:bg-btnColors-Mailblue hover:text-white`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubLinkClick(subLink);
                }}
              >
                {subLink.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;