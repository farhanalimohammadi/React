import React from "react";

export default function BalanceButton({ price, discount, isSelected, onClick }) {
  return (
    <div className="relative inline-block">
      <button
        onClick={onClick}
        style={{
          border: isSelected ? "2px solid #1481FE" : "none",
        }}
        className="group bg-componentBg-buttonBg outline-none px-2 secondRes:px-4 py-3 w-[144px] text-textsColor-texts text-[16px] font-semibold secondRes:font-bold rounded-lg relative "
      >
        ${price}
        <div className="cursor-pointer">
          <div
            className="w-[71px] h-[18.01px] absolute rotate-[35deg] top-[3px] -right-4 flex justify-center items-center"
          >
            <svg
              className="absolute scale-75 secondRes:scale-100 rotate-[-29deg]"
              width="71"
              height="52"
              viewBox="0 0 71 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.4878 35.501L34.3637 14.6447L9 0.000976562L8.84688 10.9162L0 15.5894L61.4878 51.0894L61.1115 41.0912L70.4878 35.501Z"
                fill="#1481FE"
              />
            </svg>
            <p
              className="z-10 text-textsColor-texts text-[12px] font-light"
            >
              {discount === "0" ? "%" : `${discount}% SALE`}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}