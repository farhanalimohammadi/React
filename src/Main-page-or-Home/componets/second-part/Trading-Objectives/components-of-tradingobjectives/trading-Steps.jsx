import React, { useState } from "react";

export default function TradingSteps({ selectedBalance, quick }) {
  const [selectedStep, setSelectedStep] = useState(0);

  const stepsData = [
    {
      name: "10,000",
      step1: ["unlimited", "4 days", "€500", "€1 000", "€1 000", "€89"],
      step2: ["unlimited", "4 days", "€500", "€1 000", "€500", "Free"],
      step3: ["unlimited", "X", "€500", "€1 000", "X", "Refund"],
    },
    {
      name: "25,000",
      step1: ["unlimited", "4 days", "$1,250", "$2,500", "$2,500", "$250"],
      step2: ["unlimited", "4 days", "$1,250", "$2,500", "$2,500", "Free"],
      step3: ["unlimited", "X", "$1,250", "$2,500", "X", "Refund"],
    },
    {
      name: "50,000",
      step1: ["unlimited", "4 days", "$2,500", "$5,000", "$5,000", "$360"],
      step2: ["unlimited", "4 days", "$2,500", "$5,000", "$5,000", "Free"],
      step3: ["unlimited", "X", "$2,500", "$5,000", "X", "Refund"],
    },
    {
      name: "100,000",
      step1: ["unlimited", "4 days", "$5,000", "$10,000", "$10,000", "$540"],
      step2: ["unlimited", "4 days", "$5,000", "$10,000", "$10,000", "Free"],
      step3: ["unlimited", "X", "$5,000", "$10,000", "X", "Refund"],
    },
    {
      name: "200,000",
      step1: ["unlimited", "4 days", "$10,000", "$20,000", "$20,000", "$1000"],
      step2: ["unlimited", "4 days", "$10,000", "$20,000", "$20,000", "Free"],
      step3: ["unlimited", "X", "$10,000", "$20,000", "X", "Refund"],
    },
  ];

  const stepsButtons = [
    { name: "Step 1", content: "FTMO Challenge" },
    { name: "Step 2", content: "Verification" },
    { name: "Step 3", content: "FTMO Trader" },
  ];

  const stepsOptions = [
    { name: "Trading Period" },
    { name: "Minimum trading days" },
    { name: "Maximum Daily Loss" },
    { name: "Maximum Loss" },
    { name: "Profit Target" },
    { name: "Refundable Fee" },
  ];

  const selectedData = stepsData.find((item) => item.name === selectedBalance);

  return (
    <div className="w-full flex flex-col justify-start items-center gap-y-4">
      <div className="w-full flex flex-col justify-center gap-y-4 items-center">
        {/* Step buttons: Visible only in thirdRes (non-quick mode) */}
        {!quick && (
          <div className="w-full hidden flex-row justify-end items-center gap-x-[16px] thirdRes:flex ">
            {stepsButtons.map((button, index) => (
              <div
                key={index}
                className={`w-[23.90%] h-12 bg-componentBg-mainBg text-textsColor-texts border-white border-[1px] border-solid rounded-lg flex flex-col justify-center items-center py-3 px-4 cursor-pointer ${
                  selectedStep === index ? "border-btnColors-Mailblue" : ""
                }`}
                onClick={() => setSelectedStep(index)}
              >
                <h3 className="text-textsColor-texts thirdRes:text-[14px] font-light leading-[21px]">
                  {button.name}
                </h3>
                <p className="text-textsColor-texts thirdRes:text-[14px] font-light leading-[21px]">
                  {button.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Quick mode header: Visible only in thirdRes */}
        {quick && (
          <div className="w-full flex-row justify-end items-center gap-x-[16px] thirdRes:flex secondRes:hidden hidden">
            <div className="w-full bg-componentBg-mainBg text-textsColor-texts border-white border-[1px] border-solid rounded-lg flex flex-col gap-y-2 justify-center items-center py-1 px-4">
              <h3 className="text-textsColor-texts thirdRes:text-[14px] font-bold">
                Step 1
              </h3>
              <p className="text-textsColor-texts thirdRes:text-[14px] font-medium">
                FTMO Challenge
              </p>
            </div>
          </div>
        )}

        {/* Main content */}
        <div
          className={`w-full ${
            quick
              ? "thirdRes:grid thirdRes:grid-cols-7"
              : "thirdRes:grid thirdRes:grid-cols-4"
          } thirdRes:gap-4 secondRes:flex secondRes:flex-col flex flex-col secondRes:gap-y-6 gap-y-4`}
        >
          {/* StepsOptions: Always a column */}
        <div className={`${quick ? "thirdRes:col-span-2" : "thirdRes:col-span-1"} thirdRes:flex thirdRes:flex-col thirdRes:justify-start thirdRes:items-stretch thirdRes:gap-y-4 secondRes:flex secondRes:flex-col secondRes:gap-y-4 flex flex-col gap-y-4`}>
            {stepsOptions.map((option, index) => (
              <div
                key={index}
                className="thirdRes:flex thirdRes:flex-col thirdRes:gap-y-4 secondRes:flex secondRes:flex-col secondRes:gap-y-2 flex flex-col gap-y-2"
              >
                <div className="bg-componentBg-buttonBg rounded-[8px] px-3 py-3 h-12 flex flex-row justify-start items-center gap-x-2 my-4 thirdRes:my-0">
                  <svg
                    className="thirdRes:w-5 thirdRes:h-5 secondRes:w-4 secondRes:h-4 w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9181 8.9502L13.3981 15.4702C12.6281 16.2402 11.3681 16.2402 10.5981 15.4702L4.07812 8.9502"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-btnColors-Mailblue text-[14px] font-light secondRes:font-medium">
                    {option.name}
                  </span>
                </div>

                {/* SecondRes and FirstRes: Step titles and items below each option */}
                <div className="thirdRes:hidden secondRes:flex flex ">
                  {selectedData && !quick && (
                    <div className="flex flex-col justify-start items-center gap-y-2 secondRes:gap-y-4 w-full">
                      {stepsButtons.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex flex-row justify-between items-center gap-x-2 secondRes:gap-x-4 w-full "
                        >
                          <span className="w-[50%] border-[1px] border-solid border-[#fff] rounded-[8px] flex flex-col justify-center items-center text-textsColor-texts text-[14px] font-light py-[2px] secondRes:font-medium">
                            <span className="">{step.name}</span>
                            <span className="">{step.content}</span>
                          </span>
                          <span className="w-[50%] bg-componentBg-inputBg rounded-[8px] p-3 flex justify-center items-center text-textsColor-texts text-[14px] font-light secondRes:font-medium">
                            {selectedData[`step${stepIndex + 1}`][index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {quick && (
                    <div className=" flex flex-col gap-y-2 thirdRes:hidden w-full">
                      {stepsData.map((data, dataIndex) => (
                        <div
                          key={dataIndex}
                          className="flex flex-row jsutify-between items-center gap-x-2 w-full"
                        >
                          <span className="w-[50%] border-[1px] border-solid border-[#fff] rounded-[8px] flex flex-row justify-center items-center text-textsColor-texts text-[14px] px-2 py-2 gap-x-1 font-light secondRes:font-medium">
                            <span className="">Step 1</span>
                            <span className="">({data.name})</span>
                          </span>
                          <span className={`text-textsColor-texts text-[14px] w-[50%] bg-componentBg-inputBg rounded-[8px] flex flex-row justify-center items-center p-2 font-light secondRes:font-medium ${data.name === selectedBalance ? 'border-btnColors-Mailblue border-[1px] border-solid' : ''}`}>
                            {data.step1[index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ThirdRes: Non-quick mode - Three columns for Step 1, Step 2, Step 3 */}
{/* ThirdRes: Non-quick mode - Three columns for Step 1, Step 2, Step 3 */}
        {!quick && selectedData && (
            <>
              <div className="thirdRes:col-span-1 hidden thirdRes:flex flex-col justify-start items-stretch gap-y-4">
                {selectedData.step1.map((item, index) => (
                  <div
                    key={index}
                    className="bg-componentBg-buttonBg h-12 rounded-[8px] py-3 flex justify-center items-center"
                  >
                    <span className="text-textsColor-texts thirdRes:text-[14px] font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="thirdRes:col-span-1 hidden thirdRes:flex flex-col justify-start items-stretch gap-y-4">
                {selectedData.step2.map((item, index) => (
                  <div
                    key={index}
                    className="bg-componentBg-buttonBg h-12 rounded-[8px] py-3 flex justify-center items-center"
                  >
                    <span className="text-textsColor-texts thirdRes:text-[14px] font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="thirdRes:col-span-1 hidden thirdRes:flex flex-col justify-start items-stretch gap-y-4">
                {selectedData.step3.map((item, index) => (
                  <div
                    key={index}
                    className="bg-componentBg-buttonBg h-12 rounded-[8px] py-3 flex justify-center items-center"
                  >
                    <span className="text-textsColor-texts thirdRes:text-[14px] font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

        {quick &&
        stepsData.map((data, dataIndex) => (
            <div
            key={dataIndex}
            className="thirdRes:col-span-1 hidden thirdRes:flex flex-col justify-start items-stretch gap-y-4"
            >
            {data.step1.map((item, index) => (
                <div
                key={index}
                className={`bg-componentBg-buttonBg rounded-[8px] h-12 py-3 flex justify-center items-center ${
                    data.name === selectedBalance
                    ? "border-btnColors-Mailblue border-[1px] border-solid"
                    : ""
                }`}
                >
                <span className="text-textsColor-texts thirdRes:text-[14px] font-light">
                    {item}
                </span>
                </div>
            ))}
            </div>
        ))}
        </div>
      </div>

      <div className="w-full flex flex-row justify-start gap-x-2 shadow-[0px_0px_20px_-10px_#1EC7B4] bg-[#1EC7B466] rounded-lg border-[1px] border-solid border-[#1EC7B4] items-start thirdRes:py-[7px] secondRes:py-1.5 firstRes:py-1 thirdRes:px-3 secondRes:px-2 firstRes:px-1.5">
        <svg
          className="thirdRes:w-6 thirdRes:h-6 secondRes:w-5 secondRes:h-5 firstRes:w-4 firstRes:h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9961 17L11.9961 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0039 9L11.9949 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-textsColor-texts thirdRes:text-[14px] secondRes:text-[13px] firstRes:text-[12px] font-light">
          Special Promotion: The ${selectedBalance} FTMO Challenge is now
          available for just €
          {selectedBalance === "10,000"
            ? "89"
            : selectedBalance === "25,000"
            ? "250"
            : selectedBalance === "50,000"
            ? "360"
            : selectedBalance === "100,000"
            ? "540"
            : "1,080"}
          . This offer is exclusively for clients who currently do not have an
          active ${selectedBalance} FTMO Challenge (or the equivalent in another
          currency).
        </p>
      </div>
    </div>
  );
}