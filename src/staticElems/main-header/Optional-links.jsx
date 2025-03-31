import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Links = ({ title, subLinks = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterTitle = () => setIsHovered(true);
  const handleMouseLeaveTitle = () => setIsHovered(false);
  const handleMouseEnterDropdown = () => setIsHovered(true);
  const handleMouseLeaveDropdown = () => setIsHovered(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleSubLinkClick = (subLink) => {
    setIsOpen(false);
    setIsHovered(false);
    if (subLink.ref && subLink.ref.current) {

      subLink.ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (subLink.herf) {
      navigate(subLink.herf);
    } else {
      alert("the sistem erorr...")
    }
  };

  const isMenuOpen = isOpen || isHovered;

  return (
    <div className="relative" ref={dropdownRef}>
        <span
        className="group flex flex-row justify-start items-center gap-x-2 text-textsColor-texts hover:text-btnColors-Mailblue font-medium transition-all duration-300 ease-linear cursor-pointer"
        onMouseEnter={handleMouseEnterTitle}
        onMouseLeave={handleMouseLeaveTitle}
        onClick={handleClick}
        >
            {title}
            <svg
            className={`stroke-textsColor-texts ${isMenuOpen ? 'rotate-180' : 'rotate-0'} group-hover:stroke-btnColors-Mailblue duration-300 transition-all ease-linear`}width="24"height="24"viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19.9181 8.9502L13.3981 15.4702C12.6281 16.2402 11.3681 16.2402 10.5981 15.4702L4.07812 8.9502" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
      {subLinks.length > 0 && (
        <div
          className={`absolute left-0 top-full w-48 bg-componentBg-mainBg rounded-[4px] transform transition-all duration-300 ease-linear ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <div className="w-full flex flex-col justify-start items-stretch">
            {subLinks.map((subLink, index) => (
              <span
                key={index}
                className={`p-2 cursor-pointer bg-componentBg-mainBg text-textsColor-texts text-[14px] font-medium ${
                  index + 1 === subLinks.length
                    ? 'rounded-b-[4px]'
                    : index === 0
                    ? 'rounded-t-[4px]'
                    : 'rounded-none'
                } hover:bg-btnColors-Mailblue transition-all duration-300 ease-linear`}
                onClick={() => handleSubLinkClick(subLink)}
              >
                {subLink.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;