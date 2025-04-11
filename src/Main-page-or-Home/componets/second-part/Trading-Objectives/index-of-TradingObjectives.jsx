import React, { useState } from "react";
import BalanceButton from "./components-of-tradingobjectives/Balance";
import TradingSteps from "./components-of-tradingobjectives/trading-Steps";

export default function TradingObjectives({ objectivesRef }) {
  const [selectedBalance, setSelectedBalance] = useState("10,000");
  const [quick, setQuick] = useState(false);

  return (
    <div
      ref={objectivesRef}
      className="flex flex-col justify-between gap-y-[48px] items-center p-8 thirdRes:p-8 secondRes:p-6 firstRes:p-4 rounded-2xl bg-componentBg-mainBg w-[85%]"
    >
      <div className="flex flex-col justify-between items-start w-full gap-y-8">
        <h3 className="text-textsColor-texts thirdRes:text-[32px] secondRes:text-[28px] firstRes:text-[24px] font-bold">
          Trading Objectives
        </h3>
        <p className="flex flex-col justify-between items-start gap-y-4">
          <div className="text-textsColor-texts thirdRes:text-[14px] secondRes:text-[13px] firstRes:text-[12px] text-start font-light leading-[21px]">
            FTMO's Trading Objectives are based on risk management principles, and
            they verify that our clients can manage them effectively. By adhering
            to these objectives, clients enhance <br /> their skills and build
            healthy and sustainable trading habits.
          </div>
          <div className="text-textsColor-texts thirdRes:text-[14px] secondRes:text-[13px] firstRes:text-[12px] text-start font-light leading-[21px]">
            Upon accomplishing Trading Objectives during FTMO Challenge and
            Verification, clients gain access to an FTMO Account. These objectives
            will remain in place, except <br /> for the Profit Target.
          </div>
        </p>
      </div>

      <div className="flex flex-col justify-between items-start w-full gap-y-4">
        <h3 className="text-textsColor-texts thirdRes:text-[16px] secondRes:text-[14px] firstRes:text-[12px] font-bold">
          Balance:
        </h3>
        <div className="flex w-full flex-col thirdRes:flex-row thirdRes:justify-between justify-start items-start thirdRes:items-center gap-y-4">
          <div className="flex flex-row flex-wrap justify-start items-start gap-4 ">
            <BalanceButton
              price={"10,000"}
              discount={"0"}
              isSelected={selectedBalance === "10,000"}
              onClick={() => setSelectedBalance("10,000")}
            />
            <BalanceButton
              price={"25,000"}
              discount={"20"}
              isSelected={selectedBalance === "25,000"}
              onClick={() => setSelectedBalance("25,000")}
            />
            <BalanceButton
              price={"50,000"}
              discount={"10"}
              isSelected={selectedBalance === "50,000"}
              onClick={() => setSelectedBalance("50,000")}
            />
            <BalanceButton
              price={"100,000"}
              discount={"35"}
              isSelected={selectedBalance === "100,000"}
              onClick={() => setSelectedBalance("100,000")}
            />
            <BalanceButton
              price={"200,000"}
              discount={"10"}
              isSelected={selectedBalance === "200,000"}
              onClick={() => setSelectedBalance("200,000")}
            />
          </div>

          <div>
            <button
              onClick={() => setQuick(!quick)}
              className={`thirdRes:w-[180px] secondRes:w-[160px] firstRes:w-[140px] px-4 py-3 text-textsColor-texts text-nameRes secondRes:text-nameSize font-light thirdRes:font-medium border-[1px] thirdRes:border-[2px] border-solid ${
                quick
                  ? "bg-btnColors-Mailblue border-btnColors-Mailblue scale-95"
                  : "border-white"
              } hover:scale-95 hover:bg-btnColors-Mailblue hover:border-btnColors-Mailblue rounded-lg transition-all duration-500`}
            >
              Quick comparison
            </button>
          </div>
        </div>
      </div>

      <TradingSteps quick={quick} selectedBalance={selectedBalance} />

      <div className="flex justify-center items-center w-full">
        <button className=" text-textsColor-texts text-nameSize font-semibold secondRes:font-bold px-5 secondRes:px-8 py-4 bg-btnColors-Mailblue rounded-lg ">
          START FTMO CHALLENGE
        </button>
      </div>
    </div>
  );
}