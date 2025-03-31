import React, { useState } from "react";
import OrderBoxes from "./users-order/order-boxes";
import { motion, AnimatePresence } from "framer-motion";

export default function Order() {
  const [visibleCount, setVisibleCount] = useState(6); 

  // دیتای تست (بعداً از سرور میاد)
  const orders = [
    { values: [{ text: "20568362" }, { text: "IKdhGd" , color: "#1EC7B4" }, { text: "$10,000", color: "#1EC7B4" }, { text: "Robo forex" }, { text: "MT4" }, { text: "2/550/000", color: "#1EC7B4" , link: "https://example.com" }], date: "2/21/2025 11:12" },
    { values: [{ text: "20568363" }, { text: "ABcdEf" , color: "#1EC7B4" }, { text: "$20,000", color: "#1EC7B4" }, { text: "Broker 2" }, { text: "MT5" }, { text: "3/600/000", color: "#1EC7B4" }], date: "2/22/2025 14:30" },
    { values: [{ text: "20568364" }, { text: "XyZ12" ,color: "#1EC7B4" }, { text: "$15,000", color: "#1EC7B4" }, { text: "Broker 3" }, { text: "MT4" }, { text: "1/200/000", color: "#1EC7B4" }], date: "2/23/2025 09:15" },
    { values: [{ text: "20568365" }, { text: "PQrsT" ,color: "#1EC7B4" }, { text: "$25,000", color: "#1EC7B4" }, { text: "Broker 4" }, { text: "MT5" }, { text: "4/800/000", color: "#1EC7B4" }], date: "2/24/2025 16:45" },
    { values: [{ text: "20568366" }, { text: "LMnoP" ,color: "#1EC7B4" }, { text: "$30,000", color: "#1EC7B4" }, { text: "Broker 5" }, { text: "MT4" }, { text: "5/900/000", color: "#1EC7B4" }], date: "2/25/2025 12:00" },
    { values: [{ text: "20568367" }, { text: "JKlMn" ,color: "#1EC7B4"}, { text: "$12,000", color: "#1EC7B4" }, { text: "Broker 6" }, { text: "MT5" }, { text: "2/300/000", color: "#1EC7B4" }], date: "2/26/2025 10:30" },
    { values: [{ text: "20568368" }, { text: "UVwxY" ,color: "#1EC7B4"}, { text: "$18,000", color: "#1EC7B4" }, { text: "Broker 7" }, { text: "MT4" }, { text: "3/400/000", color: "#1EC7B4" }], date: "2/27/2025 13:20" },
    { values: [{ text: "20568362" }, { text: "IKdhGd" , color: "#1EC7B4" }, { text: "$10,000", color: "#1EC7B4" }, { text: "Robo forex" }, { text: "MT4" }, { text: "2/550/000", color: "#1EC7B4" , link: "https://example.com" }], date: "2/21/2025 11:12" },
    { values: [{ text: "20568363" }, { text: "ABcdEf" , color: "#1EC7B4" }, { text: "$20,000", color: "#1EC7B4" }, { text: "Broker 2" }, { text: "MT5" }, { text: "3/600/000", color: "#1EC7B4" }], date: "2/22/2025 14:30" },
    { values: [{ text: "20568364" }, { text: "XyZ12" ,color: "#1EC7B4" }, { text: "$15,000", color: "#1EC7B4" }, { text: "Broker 3" }, { text: "MT4" }, { text: "1/200/000", color: "#1EC7B4" }], date: "2/23/2025 09:15" },
    { values: [{ text: "20568365" }, { text: "PQrsT" ,color: "#1EC7B4" }, { text: "$25,000", color: "#1EC7B4" }, { text: "Broker 4" }, { text: "MT5" }, { text: "4/800/000", color: "#1EC7B4" }], date: "2/24/2025 16:45" },
    { values: [{ text: "20568366" }, { text: "LMnoP" ,color: "#1EC7B4" }, { text: "$30,000", color: "#1EC7B4" }, { text: "Broker 5" }, { text: "MT4" }, { text: "5/900/000", color: "#1EC7B4" }], date: "2/25/2025 12:00" },
    { values: [{ text: "20568367" }, { text: "JKlMn" ,color: "#1EC7B4"}, { text: "$12,000", color: "#1EC7B4" }, { text: "Broker 6" }, { text: "MT5" }, { text: "2/300/000", color: "#1EC7B4" }], date: "2/26/2025 10:30" },
    { values: [{ text: "20568368" }, { text: "UVwxY" ,color: "#1EC7B4"}, { text: "$18,000", color: "#1EC7B4" }, { text: "Broker 7" }, { text: "MT4" }, { text: "3/400/000", color: "#1EC7B4" }], date: "2/27/2025 13:20" },
    { values: [{ text: "20568362" }, { text: "IKdhGd" , color: "#1EC7B4" }, { text: "$10,000", color: "#1EC7B4" }, { text: "Robo forex" }, { text: "MT4" }, { text: "2/550/000", color: "#1EC7B4" , link: "https://example.com" }], date: "2/21/2025 11:12" },
    { values: [{ text: "20568363" }, { text: "ABcdEf" , color: "#1EC7B4" }, { text: "$20,000", color: "#1EC7B4" }, { text: "Broker 2" }, { text: "MT5" }, { text: "3/600/000", color: "#1EC7B4" }], date: "2/22/2025 14:30" },
    { values: [{ text: "20568364" }, { text: "XyZ12" ,color: "#1EC7B4" }, { text: "$15,000", color: "#1EC7B4" }, { text: "Broker 3" }, { text: "MT4" }, { text: "1/200/000", color: "#1EC7B4" }], date: "2/23/2025 09:15" },
    { values: [{ text: "20568365" }, { text: "PQrsT" ,color: "#1EC7B4" }, { text: "$25,000", color: "#1EC7B4" }, { text: "Broker 4" }, { text: "MT5" }, { text: "4/800/000", color: "#1EC7B4" }], date: "2/24/2025 16:45" },
    { values: [{ text: "20568366" }, { text: "LMnoP" ,color: "#1EC7B4" }, { text: "$30,000", color: "#1EC7B4" }, { text: "Broker 5" }, { text: "MT4" }, { text: "5/900/000", color: "#1EC7B4" }], date: "2/25/2025 12:00" },
    { values: [{ text: "20568367" }, { text: "JKlMn" ,color: "#1EC7B4"}, { text: "$12,000", color: "#1EC7B4" }, { text: "Broker 6" }, { text: "MT5" }, { text: "2/300/000", color: "#1EC7B4" }], date: "2/26/2025 10:30" },
    { values: [{ text: "20568368" }, { text: "UVwxY" ,color: "#1EC7B4"}, { text: "$18,000", color: "#1EC7B4" }, { text: "Broker 7" }, { text: "MT4" }, { text: "3/400/000", color: "#1EC7B4" }], date: "2/27/2025 13:20" },
    { values: [{ text: "20568362" }, { text: "IKdhGd" , color: "#1EC7B4" }, { text: "$10,000", color: "#1EC7B4" }, { text: "Robo forex" }, { text: "MT4" }, { text: "2/550/000", color: "#1EC7B4" , link: "https://example.com" }], date: "2/21/2025 11:12" },
    { values: [{ text: "20568363" }, { text: "ABcdEf" , color: "#1EC7B4" }, { text: "$20,000", color: "#1EC7B4" }, { text: "Broker 2" }, { text: "MT5" }, { text: "3/600/000", color: "#1EC7B4" }], date: "2/22/2025 14:30" },
    { values: [{ text: "20568364" }, { text: "XyZ12" ,color: "#1EC7B4" }, { text: "$15,000", color: "#1EC7B4" }, { text: "Broker 3" }, { text: "MT4" }, { text: "1/200/000", color: "#1EC7B4" }], date: "2/23/2025 09:15" },
    { values: [{ text: "20568365" }, { text: "PQrsT" ,color: "#1EC7B4" }, { text: "$25,000", color: "#1EC7B4" }, { text: "Broker 4" }, { text: "MT5" }, { text: "4/800/000", color: "#1EC7B4" }], date: "2/24/2025 16:45" },
    { values: [{ text: "20568366" }, { text: "LMnoP" ,color: "#1EC7B4" }, { text: "$30,000", color: "#1EC7B4" }, { text: "Broker 5" }, { text: "MT4" }, { text: "5/900/000", color: "#1EC7B4" }], date: "2/25/2025 12:00" },
    { values: [{ text: "20568367" }, { text: "JKlMn" ,color: "#1EC7B4"}, { text: "$12,000", color: "#1EC7B4" }, { text: "Broker 6" }, { text: "MT5" }, { text: "2/300/000", color: "#1EC7B4" }], date: "2/26/2025 10:30" },
    { values: [{ text: "20568368" }, { text: "UVwxY" ,color: "#1EC7B4"}, { text: "$18,000", color: "#1EC7B4" }, { text: "Broker 7" }, { text: "MT4" }, { text: "3/400/000", color: "#1EC7B4" }], date: "2/27/2025 13:20" },

  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6); 
  };

  const visibleOrders = orders.slice(0, visibleCount); 
  const hasMore = visibleCount < orders.length; 

  return (
    <div className="flex flex-col justify-start items-start mt-topSpace w-[70%] ml-[345px] gap-y-[50px]">
      <div className="w-full bg-componentBg-mainBg px-6 py-8 rounded-[16px] flex flex-col items-center gap-y-4">
        <AnimatePresence>
          <motion.div
            className="flex flex-row flex-wrap justify-center items-start gap-x-6 gap-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {visibleOrders.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <OrderBoxes values={order.values} date={order.date} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          {hasMore && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4 px-6 py-2 bg-btnColors-Mailblue text-textsColor-texts text-nameSize font-medium rounded-[8px] hover:bg-opacity-80"
              onClick={handleShowMore}
            >
              More
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}