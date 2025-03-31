import React, { useState, useEffect } from 'react';
import Links from './Optional-links';
import Simplelinks from './Simple-links';

export default function Header2({ refs }) { // اصلاح نام پراپس
  const [showScroll, setShowScroll] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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

//   const howItWorksSublinks = [
//     { name: 'Evaluation Process', ref: evaluationRef }, // فقط ref برای اسکرول
//     { name: 'Trading Objectives', href: '/trading-objectives' }, // href برای نویگیشن
//     { name: 'Scaling Plan', href: '/scaling-plan' },
//   ];
//   const tradingSublinks = [
//     { name: 'Blog', href: '/blog' },
//     { name: 'Trading Updates', href: '/updates' },
//     // بقیه موارد...
//   ];
//   const aboutUsSublinks = [
//     { name: 'Contact', href: '/contact' },
//     // بقیه موارد...
//   ];
//   const languageSublinks = [
//     { name: 'Espanol', href: '/es' },
//     // بقیه موارد...
//   ];
    const howItWorksSublinks = [
        {name: "Evaluation Process" , ref: refs[0]},
        {name : "Trading Objectives" , ref: refs[1] },
        {name : "Scaling Plan" , herf:""}
    ]
    const tradingSublinks = [
        {name: "Blog" , herf:"/blog" },
        {name : "Trading Updates" , herf:"/trading-updates" ,},
        {name : "Tools & Services" , herf:"/tools-&-services" ,},
        {name : "Trading Platform" , herf:"/trading-platform" ,},
        {name : "Premium Programme" , herf:"/premium-programme" ,},
        {name : "Symbols" , herf:"/symbols" ,},
        {name : "Leaderboard" , herf:"/trader/leaderboard" ,},
        {name : "Economic Calendar" , herf:"/calendar" ,},
        {name : "FTMO Free Trial" , herf:"/trader/accountoverview/freeshopping" ,},
        {name : "Perfoemance Coaches" , herf:"/perfoemance-coaches" ,},
    ]
    const aboutUsSublinks = [
        {name: "Contact" , herf:"/contact-us" ,},
        {name : "About us" , herf:"/about-us" ,},
        {name : "Careers" , herf:"/contact-us" ,},
        {name : "FTMO Awards" , herf:"/about-us" ,},
    ]
    const languageSublinks = [
        {name: "Espanol" , herf:"" ,},
        {name : "Deutsch" , herf:"" ,},
        {name : "Francais" , herf:"" ,},
        {name : "English" , herf:"" ,},
    ]

  return (
    <div
      className={`flex z-[999] flex-row justify-between items-center py-YP px-XP bg-componentBg-mainBg fixed top-0 left-0 w-full transition-all duration-500 ease-linear ${
        showScroll ? 'translate-y-0' : 'translate-y-[-77px]'
      }`}
    >
      <div>
        <h1 className="text-logoSize text-textsColor-texts font-medium">Logo place</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-[32px]">
        <Links title="How it works" subLinks={howItWorksSublinks} />
        <Simplelinks link="/faq" title="FAQ" />
        <Simplelinks link="/comments" title="Testimonials" />
        <Links title="Trading" subLinks={tradingSublinks} />
        <Links title="About us" subLinks={aboutUsSublinks} />
        <Simplelinks link="/academy" title="Academy" />
        <Simplelinks link="/users/register" title="Client Area" />
        <Links title="EN" subLinks={languageSublinks} />
        <div>{/* SVG جستجو */}</div>
      </div>
    </div>
  );
}
// const howItWorksSublinks = [
//     {name: "Evaluation Process" , herf: evalutionRef , ref: true},
//     {name : "Trading Objectives" , herf:"" , ref: false},
//     {name : "Scaling Plan" , herf:"" , ref: false}
// ]
// const tradingSublinks = [
//     {name: "Blog" , herf:"/blog" , ref: false},
//     {name : "Trading Updates" , herf:"" , ref: false},
//     {name : "Tools & Services" , herf:"" , ref: false},
//     {name : "Trading Platform" , herf:"" , ref: false},
//     {name : "Premium Programme" , herf:"" , ref: false},
//     {name : "Symbols" , herf:"" , ref: false},
//     {name : "Leaderboard" , herf:"" , ref: false},
//     {name : "Economic Calendar" , herf:"" , ref: false},
//     {name : "FTMO Free Trial" , herf:"" , ref: false},
//     {name : "Perfoemance Coaches" , herf:"" , ref: false},
//     {name : "FTMO Academy" , herf:"" , ref: false},
// ]
// const aboutUsSublinks = [
//     {name: "Contact" , herf:"" , ref: false},
//     {name : "About us" , herf:"" , ref: false},
//     {name : "Careers" , herf:"" , ref: false},
//     {name : "FTMO Awards" , herf:"" , ref: false},
// ]
// const languageSublinks = [
//     {name: "Espanol" , herf:"" , ref: false},
//     {name : "Deutsch" , herf:"" , ref: false},
//     {name : "Francais" , herf:"" , ref: false},
//     {name : "English" , herf:"" , ref: false},
// ]