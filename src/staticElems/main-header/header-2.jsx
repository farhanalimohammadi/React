import React, { useState, useEffect } from 'react';
import Links from './Optional-links';
import Simplelinks from './Simple-links';
import { useViewportWidth } from '../../hooks/useViewportWidth';

export default function Header2({ refs }) {
  const [showScroll, setShowScroll] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const viewportWidth = useViewportWidth();

  useEffect(() => {
    const handleScroll = () => {
      const newScroll = window.scrollY;
      if (newScroll > lastScroll && newScroll > 25) {
        setShowScroll(false);
      } else if (newScroll < lastScroll) {
        setShowScroll(true);
      }
      setLastScroll(newScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const howItWorksSublinks = [
    {name: "Evaluation Process" , ref: refs[0]},
    {name : "Trading Objectives" , ref: refs[1] },
    {name : "Scaling Plan" , herf:""}
  ]
  const tradingSublinks = [
    {name: "Blog" , herf:"/blog" },
    {name : "Trading Updates" , herf:"/trading-updates" },
    {name : "Tools & Services" , herf:"/tools-&-services" },
    {name : "Trading Platform" , herf:"/trading-platform" },
    {name : "Premium Programme" , herf:"/premium-programme" },
    {name : "Symbols" , herf:"/symbols" },
    {name : "Leaderboard" , herf:"/trader/leaderboard" },
    {name : "Economic Calendar" , herf:"/calendar" },
    {name : "FTMO Free Trial" , herf:"/trader/accountoverview/freeshopping" },
    {name : "Perfoemance Coaches" , herf:"/perfoemance-coaches" },
  ]
  const aboutUsSublinks = [
    {name: "Contact" , herf:"/contact-us" },
    {name : "About us" , herf:"/about-us" },
    {name : "Careers" , herf:"/contact-us" },
    {name : "FTMO Awards" , herf:"/about-us" },
  ]
  const languageSublinks = [
    {name: "Espanol" , herf:"" },
    {name : "Deutsch" , herf:"" },
    {name : "Francais" , herf:"" },
    {name : "English" , herf:"" },
  ]

  return (
    <div
      className={`flex z-[999] flex-row justify-between items-center fixed bg-componentBg-mainBg top-0 left-0 transition-all duration-300 ease-linear py-YP ${
        showScroll ? 'translate-y-0' : 'translate-y-[-77px]'
      }`}
      style={{ width: viewportWidth }}
    >
      <div className="w-full min-w-[250px] max-w-[1376px] mx-auto px-[20px] thirdRes:px-[32px] flex flex-row justify-between items-center">
        <div>
          <h1 className="text-textsColor-texts font-medium text-logoRes secondRes:text-logoSize">Logo place</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden thirdRes:flex flex-row justify-center items-center gap-x-[24px]">
          <div className="flex items-center">
            <Links title="How it works" subLinks={howItWorksSublinks} />
          </div>
          <div className="flex items-center">
            <Simplelinks link="/faq" title="FAQ" />
          </div>
          <div className="flex items-center">
            <Simplelinks link="/comments" title="Testimonials" />
          </div>
          <div className="flex items-center">
            <Links title="Trading" subLinks={tradingSublinks} />
          </div>
          <div className="flex items-center">
            <Links title="About us" subLinks={aboutUsSublinks} />
          </div>
          <div className="flex items-center">
            <Simplelinks link="/academy" title="Academy" />
          </div>
          <div className="flex items-center">
            <Simplelinks link="/users/register" title="Client Area" />
          </div>
          <div className="flex items-center">
            <Links title="EN" subLinks={languageSublinks} />
          </div>
          <div>{/* SVG جستجو */}</div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className={`thirdRes:hidden relative z-50 ${isMobileMenuOpen ? "hidden" : ""}`}
        >
          <svg 
            className={`stroke-textsColor-texts cursor-pointer active:stroke-btnColors-Mailblue active:scale-95 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
            }`} 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 12H21" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 17H21" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Content */}
      <div 
        className={`fixed top-0 left-0 h-[50vh] bg-componentBg-mainBg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-50vh]'
        }`}
        style={{ width: viewportWidth }}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMobileMenu}
              className="text-textsColor-texts hover:text-btnColors-Mailblue"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-y-4 p-4 overflow-y-auto">
            <Links title="How it works" subLinks={howItWorksSublinks} onLinkClick={toggleMobileMenu} />
            <Simplelinks link="/faq" title="FAQ" />
            <Simplelinks link="/comments" title="Testimonials" />
            <Links title="Trading" subLinks={tradingSublinks} onLinkClick={toggleMobileMenu} />
            <Links title="About us" subLinks={aboutUsSublinks} onLinkClick={toggleMobileMenu} />
            <Simplelinks link="/academy" title="Academy" />
            <Simplelinks link="/users/register" title="Client Area" />
            <Links title="EN" subLinks={languageSublinks} onLinkClick={toggleMobileMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}