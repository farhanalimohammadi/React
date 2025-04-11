import React, { useRef, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Slider from "./slider-items";

export default function FindOutSlider() {
  const swiperRef = useRef(null);

  const slides = useMemo(() => [
    { id: '1', title: 'TRADING' },
    { id: '2', title: 'FTMO BLOG' },
    { id: '3', title: 'FREE TRIAL' },
    { id: '5', title: 'FTMO DISCORD' },
    { id: '6', title: 'Tools & Services' },
    { id: '7', title: 'Test Item' }
  ], []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <div className="w-full justify-start items-center flex-col flex gap-y-4">
      <div className="w-[85%] relative">
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          speed={500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            dynamicBullets: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-[300px]"
          breakpoints={{
            0: {
              slidesPerView: 1.35,
              spaceBetween: 10,
              centeredSlides: true
            },
            390: {
              slidesPerView: 1.2,
              spaceBetween: 10,
              centeredSlides: true
            },
            450: {
              slidesPerView: 1.4,
              spaceBetween: 10,
              centeredSlides: true
            },
            500: {
              slidesPerView: 1.60,
              spaceBetween: 10,
              centeredSlides: true
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: true
            },
            700: {
              slidesPerView: 2.20,
              spaceBetween: 10,
              centeredSlides: false
            },
            800: {
              slidesPerView: 2.40,
              spaceBetween: 10,
              centeredSlides: true
            },
            800: {
              slidesPerView: 2.70,
              spaceBetween: 10,
              centeredSlides: true
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true
            },
            1100: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              centeredSlides: true
            },
            1200: {
              slidesPerView: 3.95,
              spaceBetween: 10,
              centeredSlides: true
            }
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slider title={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="hidden thirdRes:flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full z-10 px-4">
          <button
            onClick={handlePrev}
            className="swiper-button-prev bg-componentBg-buttonBg text-white rounded-full p-6 flex justify-center items-center shadow-lg hover:bg-componentBg-buttonBg/80 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="swiper-button-next bg-componentBg-buttonBg text-white rounded-full p-6 flex justify-center items-center shadow-lg hover:componentBg-buttonBg/80 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination mt-4 flex justify-center gap-x-2"></div>
      </div>
    </div>
  );
}