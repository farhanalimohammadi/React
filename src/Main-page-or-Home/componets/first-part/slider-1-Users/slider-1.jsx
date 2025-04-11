import React from "react";
import { motion } from "framer-motion";

export default function Slider({ name, region, bg, img, counteryIcon }) {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md cursor-pointer"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        variants={contentVariants}
        className="relative z-10 h-full flex flex-col justify-between p-4"
      >
        {/* Top Section */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2">
          <img
            src={counteryIcon}
            alt={`${region} flag`}
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
          <div>
            <h3 className="text-white text-sm font-semibold">{name}</h3>
            <p className="text-white/80 text-xs">From {region}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          <motion.img
            src={img}
            alt={name}
            className="w-2/3 mx-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            loading="lazy"
          />
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-2"
          >
            <svg width="60" height="60" viewBox="0 0 80 63" fill="none">
              <g filter="url(#filter0_d_196_2319)">
                <rect x="16" y="24" width="40" height="23" rx="6" fill="#FF0000" />
                <path d="M43 35L32.5 41.0622L32.5 28.9378L43 35Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_d_196_2319" x="-8" y="0" width="88" height="71" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_2319" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_196_2319" result="shape" />
                </filter>
              </defs>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}