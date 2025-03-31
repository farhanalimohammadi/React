
import React from "react";

export default function OrderBoxes({ values, date }) {
  const labels = [
    "Order number",
    "ID",
    "Account Size",
    "Broker",
    "Platform",
    "Paid",
  ];

  return (
    <div className="w-[325px] shadow-[0_0_5px_#000] rounded-[12px]">
      <div className="flex flex-col justify-center items-stretch rounded-[12px] bg-componentBg-mainBg">
        <div className="flex flex-row justify-center items-center">
          {/* ستون اول: لیبل‌ها */}
          <div className="w-[50%] flex flex-col">
            {labels.map((label, index) => (
              <div
                key={index}
                className={`border-b-[1px] border-solid border-[#acacac] py-[18px] px-4 flex justify-start items-center w-full text-textsColor-texts text-nameSize font-medium ${
                  index === 0 ? "rounded-tl-[12px]" : ""
                } ${index === labels.length - 1 ? "border-none" : ""}`}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="w-[50%] flex flex-col bg-componentBg-mainBg2 rounded-tr-[12px]">
            {values.map((item, index) => (
              <div
                key={index}
                className={`py-[18px] px-4 flex justify-end items-center w-full text-nameSize font-medium ${
                  index < values.length - 1
                    ? "border-b-[1px] border-solid border-[#acacac]"
                    : ""
                } ${index === 0 ? "rounded-tr-[12px]" : "rounded-none"} ${
                  item.link ? "cursor-pointer hover:underline" : "cursor-auto"
                }`}
                style={{ color: item.color || "#fff" }}
                onClick={item.link ? () => window.open(item.link, "_blank") : null}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full rounded-b-[12px] bg-btnColors-Mailblue flex flex-row justify-between items-center px-4 py-[18px]">
          <span className="text-textsColor-texts text-nameSize font-medium">
            {date}
          </span>
          <span
            className="text-textsColor-texts text-nameSize font-medium cursor-pointer hover:underline"
            onClick={() => window.open("https://fund-challenge.com", "_blank")}
          >
            Try Fund Challenge
          </span>
        </div>
      </div>
    </div>
  );
}