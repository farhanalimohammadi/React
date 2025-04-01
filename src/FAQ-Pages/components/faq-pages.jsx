import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import FAQBox from './faq-boxes';

const FrequentlysPages = () => {
  const { name } = useParams();
  const { searchTerm = '' } = useOutletContext() || {};

  const faqData = {
    "New with FTMO": [
      { question: "How to start?", link: "/faq/answer1" },
      { question: "Is FTMO a trustworthy company?", link: "/faq/answer2" },
      { question: "What is FTMO?", link: "/faq/answer3" },
      { question: "Where is your office? How do I contact you?", link: "/faq/answer4" },
      { question: "Who can join FTMO?", link: "/faq/answer5" },
      { question: "Why should I join FTMO?", link: "/faq/answer6" }
    ],
    "Evaluation Process": [
      { question: "How do I become an FTMO Trader?", link: "/faq/answer1" },
      { question: "How long does it take to become an FTMO Trader?", link: "/faq/answer1" },
      { question: "I have successfully passed my FTMO Challenge, now what?", link: "/faq/answer1" },
      { question: "What will be the size of my FTMO Account?", link: "/faq/answer1" }
    ],
    "Rules": [
      { question: "Step 1 - FTMO Challenge", link: "/faq/answer1" },
      { question: "Step 2 - Verification", link: "/faq/answer1" },
      { question: "Step 3 - FTMO Account", link: "/faq/answer1" },
      { question: "Can I trade news?", link: "/faq/answer1" },
      { question: "Do I have to close my positions overnight?", link: "/faq/answer1" },
      { question: "Which instruments can I trade and what strategies am I allowed to use?", link: "/faq/answer1" },
      { question: "What is 'Trading according to a real market?", link: "/faq/answer1" }
    ],
    "FTMO Account": [
      { question: "What is the legal relationship between an FTMO Trader and FTMO after signing the FTMO Account Agreement?", link: "/faq/answer1" },
      { question: "What account size will I work with?", link: "/faq/answer1" },
      { question: "How does an FTMO Account work from the technical side?", link: "/faq/answer1" },
      { question: "How do I withdraw my reward?", link: "/faq/answer1" },
      { question: "Do I have to tax my income?", link: "/faq/answer1" }
    ],
    "Platforms": [
      { question: "Can I change my platform during the Evaluation Process?", link: "/faq/answer1" },
      { question: "What are the account specifications?", link: "/faq/answer1" },
      { question: "Which platforms can I use for trading?", link: "/faq/answer1" },
      { question: "How does the FTMO technical infrastructure work?", link: "/faq/answer1" },
      { question: "Can I modify my current account?", link: "/faq/answer1" }
    ],
    "Orders & Billing": [
      { question: "How do I apply for an FTMO Challenge?", link: "/faq/answer1" },
      { question: "What payment methods are available?", link: "/faq/answer1" },
      { question: "Do we charge any other fees? Are the fees recurrent?", link: "/faq/answer1" },
      { question: "I paid for my FTMO Challenge, when will I get the account?", link: "/faq/answer1" },
      { question: "Why is there a fee?", link: "/faq/answer1" },
      { question: "How many accounts can I have?", link: "/faq/answer1" }
    ],
    "Applications & other Services": [
      { question: "Besides an FTMO Account, do you provide any other value for traders?", link: "/faq/answer1" },
      { question: "How about a Free Trial?", link: "/faq/answer1" },
      { question: "How about trading psychology? Any help here?", link: "/faq/answer1" },
      { question: "FTMO Swing account type", link: "/faq/answer1" },
      { question: "What are FTMO Points and how can I use them?", link: "/faq/answer1" }
    ],
    "Premium Programme": [
      { question: "How do I qualify for the Prime Status?", link: "/faq/answer1" },
      { question: "Is the Premium Programme compatible with the Scaling Plan?", link: "/faq/answer1" },
      { question: "Can I merge four $100k FTMO Accounts into a single $400k FTMO Account to apply for the Supreme Status?", link: "/faq/answer1" },
      { question: "Are there any specific account sizes required in order to apply for Prime Status?", link: "/faq/answer1" },
      { question: "What are the Benefits of the Supreme Status?", link: "/faq/answer1" },
      { question: "How do I qualify for the Supreme Status?", link: "/faq/answer1" },
      { question: "What are the benefits of Prime Status?", link: "/faq/answer1" }
    ]
  };

  // Ensure faqData is valid
  if (!faqData || typeof faqData !== 'object') {
    return (
      <div className="w-full flex justify-center items-center p-4">
        <span className="text-textsColor-texts text-nameSize font-semibold">No FAQ data available.</span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row justify-between items-stretch px-20">
      <div className="w-[31.31%] flex flex-col justify-start items-end gap-y-3">
        {Object.entries(faqData).map(([title, questions]) => (
          <FAQBox
            key={title}
            title={title}
            questions={Array.isArray(questions) ? questions : []}
            searchTerm={searchTerm}
          />
        ))}
      </div>
      <div className="w-[68.69%] flex justify-center items-start">
        <div className="w-[90%] bg-componentBg-mainBg h-[600px] rounded-[12px] flex flex-row justify-center items-start gap-y-4">
          <span className="text-btnColors-Mailblue text-logoSize font-bold">
            This is the explain of <span className="text-[#FC3548] underline underline-offset-[4px]">{name || "FAQ"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrequentlysPages;