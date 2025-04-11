import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import Slider from "./slider-1";

export default function UsersSlider() {
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    { id: 1, name: "Jack Wilson", region: "Europe", bg: "../../../../Icons/pngIcons/countereis/Europe-bg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-1.png", counteryIcon: "../../../../Icons/pngIcons/Frame-europe.png" },
    { id: 2, name: "Elina Nami", region: "Japan", bg: "../../../../Icons/pngIcons/countereis/Japan-bgg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-2.png", counteryIcon: "../../../../Icons/pngIcons/Frame-japan.png" },
    { id: 3, name: "Jack Wilson", region: "US", bg: "../../../../Icons/pngIcons/countereis/American-bg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-3.png", counteryIcon: "../../../../Icons/pngIcons/Frame-american.png" },
    { id: 4, name: "Elina Nami", region: "Australia", bg: "../../../../Icons/pngIcons/countereis/Australia-bg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-4.png", counteryIcon: "../../../../Icons/pngIcons/Frame-astr.png" },
    { id: 5, name: "Jack Wilson", region: "England", bg: "../../../../Icons/pngIcons/countereis/England-bgg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-5.png", counteryIcon: "../../../../Icons/pngIcons/Frame-england.png" },
    { id: 6, name: "Farhan Alimohammadi", region: "Iran", bg: "../../../../Icons/pngIcons/countereis/iran-bgg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-1.png", counteryIcon: "../../../../Icons/pngIcons/Frame-iran.png" },
  ];

  return (
    <section 
      className="relative w-full max-w-[85%] mx-auto  overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectCreative]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-110%", 0, -200],
              opacity: 0,
              scale: 0.95,
            },
            next: {
              shadow: true,
              translate: ["110%", 0, -200],
              opacity: 0,
              scale: 0.95,
            },
          }}
          speed={1200}
          grabCursor={true}
          resistanceRatio={0.9}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            500: { // firstRes
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: { // secondRes
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1080: { // thirdRes
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="relative !overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="transition-all duration-500 ease-in-out">
              <div className="group relative overflow-hidden rounded-lg">
                <Slider {...slide} />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 firstRes:px-2 secondRes:px-0 z-10 pointer-events-none">
            <button
              className={`swiper-button-prev pointer-events-auto w-12 h-12 flex items-center justify-center 
                bg-gradient-to-r from-gray-900/90 to-gray-800/90 rounded-full shadow-lg 
                hover:from-blue-600/90 hover:to-blue-500/90 transition-all duration-300 
                transform ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className={`swiper-button-next pointer-events-auto w-12 h-12 flex items-center justify-center 
                bg-gradient-to-r from-gray-900/90 to-gray-800/90 rounded-full shadow-lg 
                hover:from-blue-600/90 hover:to-blue-500/90 transition-all duration-300 
                transform ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>

      {/* Description */}
      <div className="mt-12 min-w-[200px] max-w-[100%] mx-auto flex flex-col justify-start items-start ">
        <h3 className="text-[16px] md:text-[32px] font-bold text-textsColor-texts mb-4">
          Enhance Your Skills with Modern Prop Trading Firm
        </h3>
        <p className="text-[10px] md:text-[16px] text-textsColor-texts text-justify leading-relaxed">
          FTMO developed a unique Evaluation Process for traders, consisting of an FTMO Challenge and a Verification,
          specifically tailored to discover trading talents. Upon completing the Evaluation Process, traders are offered
          to enhance their trading skills on an FTMO Account in a demo environment as FTMO Traders with a balance of up
          to $200,000 in fictitious funds. Despite trading on a demo account, FTMO Traders can be rewarded for their
          performance with up to 90% of the simulated profits they generate, without any risk of losing their own
          capital. The best-performing FTMO Traders can progress into our Premium Programme, where they can be employed
          as professional traders with fixed salary by Quantlane – a traditional proprietary trading company. Journey
          to become an FTMO Trader might be challenging, but our educational Tools & Services are here to help everyone.
        </p>
      </div>
    </section>
  );
}