import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQBox = ({ title = 'بدون عنوان', questions = [], searchTerm = '' }) => {
  const [showMore, setShowMore] = useState(false);
  const minHeight = 556;
  const maxHeight = 720;
  const maxVisibleItems = 10;

  // مطمئن می‌شیم questions یه آرایه باشه
  const safeQuestions = Array.isArray(questions) ? questions : [];
  const initialQuestions = safeQuestions.slice(0, maxVisibleItems);
  const extraQuestions = safeQuestions.slice(maxVisibleItems);
  const matchesSearch = (question) =>
    searchTerm && question.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div
      className="w-[416px] bg-componentBg-inputBg rounded-[8px] flex flex-col justify-start items-stretch z-10"
      style={{ minHeight: `${minHeight}px` }}
    >
      {/* عنوان */}
      <h2 className="py-4 text-textsColor-texts bg-componentBg-mainBg rounded-t-[8px] text-logoSize font-bold flex flex-row justify-center items-center">
        {title}
      </h2>

      {/* محتوای سوال‌ها */}
      {safeQuestions.length === 0 ? (
        <div className="flex flex-col justify-start items-stretch p-4 text-textsColor-texts text-nameSize font-semibold">
          سوالی برای نمایش وجود ندارد.
        </div>
      ) : (
        <>
          {/* سوال‌های اولیه */}
          <div className="flex flex-col justify-start items-stretch">
            {initialQuestions.map((q, index) => (
              <Link
                key={index}
                to={q.link || '#'} // لینک پیش‌فرض در صورت نبود
                className={`flex flex-row justify-start items-start gap-x-2 bg-componentBg-inputBg relative before:content-[''] before:absolute before:rounded-[5px] before:bottom-0 before:left-6 before:right-6 before:h-[0.5px] before:bg-[#525252] ${
                  index + 1 === initialQuestions.length && !showMore ? 'rounded-b-[8px]' : 'rounded-none'
                } w-full p-4 text-textsColor-texts text-nameSize font-semibold ${
                  matchesSearch(q.question)
                    ? 'bg-gradient-to-r from-btnColors-Mailblue/45 via-componentBg-inputBg to-componentBg-inputBg before:h-0'
                    : ''
                }`}
              >
                <span className="w-[8px] h-[8px] rounded-full translate-y-2 relative bg-btnColors-Mailblue"></span>
                {q.question || 'سوال نامشخص'}
              </Link>
            ))}
          </div>

          {/* سوال‌های اضافی با انیمیشن */}
          <AnimatePresence>
            {showMore && extraQuestions.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-y-auto flex flex-col justify-start items-stretch"
                style={{ maxHeight: `${maxHeight - 100}px` }}
              >
                {extraQuestions.map((q, index) => (
                  <Link
                    key={index}
                    to={q.link || '#'}
                    className={`flex flex-row justify-start items-start gap-x-2 bg-componentBg-inputBg relative before:content-[''] before:absolute before:rounded-[5px] before:bottom-0 before:left-6 before:right-6 before:h-[0.5px] before:bg-[#525252] ${
                      index + 1 === extraQuestions.length ? 'rounded-b-[8px]' : 'rounded-none'
                    } w-full p-4 text-textsColor-texts text-nameSize font-semibold ${
                      matchesSearch(q.question)
                        ? 'bg-gradient-to-r from-btnColors-Mailblue/45 via-componentBg-inputBg to-componentBg-inputBg before:h-0'
                        : ''
                    }`}
                  >
                    <span className="w-[8px] h-[8px] rounded-full translate-y-2 relative bg-btnColors-Mailblue"></span>
                    {q.question || 'سوال نامشخص'}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* دکمه‌های Show More و Show Less */}
          {safeQuestions.length > maxVisibleItems && (
            <div className="">
              {!showMore ? (
                <button
                  className="w-full flex flex-row justify-center p-4 rounded-b-[8px] text-textsColor-texts/55 font-semibold text-[14px] hover:text-btnColors-Mailblue transition-all duration-300"
                  onClick={() => setShowMore(true)}
                >
                  Show More ({extraQuestions.length})
                </button>
              ) : (
                <button
                  className="w-full flex flex-row justify-center p-4 rounded-b-[8px] text-textsColor-texts/55 font-semibold text-[14px] hover:text-btnColors-Mailblue transition-all duration-300"
                  onClick={() => setShowMore(false)}
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FAQBox;