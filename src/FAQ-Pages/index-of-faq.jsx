import React  from "react";
import FAQBox from ".//components/faq-boxes";

const faqData = {
    "New with FTMO": [{ question: "How to start?" , link: "answer1" },{ question: "Is FTMO a trustworthy company?" , link: "answer2" },{ question: "What is FTMO?" , link: "answer3" },{ question: "Where is your office? How do I contact you?" , link: "answer4" },{ question: "Who can join FTMO?" , link: "answer5" },{ question: "Why should I join FTMO?" , link: "answer6" },],

    "Evaluation Process": [{ question: "How do I become an FTMO Trader?" , link: "/answer1" },{ question: "How long does it take to become an FTMO Trader?" , link: "/answer1" },{ question: "I have successfully passed my FTMO Challenge, now what?" , link: "/answer1" },{ question: "What will be the size of my FTMO Account?" , link: "/answer1" },],

    "Rules": [{ question: "Step 1 - FTMO Challenge" , link: "/answer1" },{ question: "Step 2 - Verification" , link: "/answer1" },{ question: "Step 3 - FTMO Account" , link: "/answer1" },{ question: "Can I trade news?" , link: "/answer1" },{ question: "Do I have to close my positions overnight?" , link: "/answer1" },{ question: "Which instruments can I trade and what strategies am I allowed to use?" , link: "/answer1" },{ question: "What is 'Trading according to a real market?" , link: "/answer1" },],

    "FTMO Account": [{ question: "What is the legal relationship between an FTMO Trader and FTMO after signing the FTMO Account Agreement?" , link: "/answer1" },{ question: "What account size will I work with?" , link: "/answer1" },{ question: "How does an FTMO Account work from the technical side?" , link: "/answer1" },{ question: "How do I withdraw my reward?" , link: "/answer1" },{ question: "Do I have to tax my income?" , link: "/answer1" },],

    "Platforms": [{ question: "Can I change my platform during the Evaluation Process?" , link: "/answer1" },{ question: "What are the account specifications?" , link: "/answer1" },{ question: "Which platforms can I use for trading?" , link: "/answer1" },{ question: "How does the FTMO technical infrastructure work?" , link: "/answer1" },{ question: "Can I modify my current account?" , link: "/answer1" },],

    "Orders & Billing": [{ question: "How do I apply for an FTMO Challenge?" , link: "/answer1" },{ question: "What payment methods are available?" , link: "/answer1" },{ question: "Do we charge any other fees? Are the fees recurrent?" , link: "/answer1" },{ question: "I paid for my FTMO Challenge, when will I get the account?" , link: "/answer1" },{ question: "Why is there a fee?" , link: "/answer1" },{ question: "How many accounts can I have?" , link: "/answer1" },],

    "Applications & other Services": [{ question: "Besides an FTMO Account, do you provide any other value for traders?" , link: "/answer1" },{ question: "How about a Free Trial?" , link: "/answer1" },{ question: "How about trading psychology? Any help here?" , link: "/answer1" },{ question: "FTMO Swing account type" , link: "/answer1" },{ question: "What are FTMO Points and how can I use them?" , link: "/answer1" },],

    "Premium Programme": [{ question: "How do I qualify for the Prime Status?" , link: "/answer1" },{ question: "Is the Premium Programme compatible with the Scaling Plan?" , link: "/answer1" },{ question: "Can I merge four $100k FTMO Accounts into a single $400k FTMO Account to apply for the Supreme Status?" , link: "/answer1" },{ question: "Are there any specific account sizes required in order to apply for Prime Status?" , link: "/answer1" },{ question: "What are the Benefits of the Supreme Status?" , link: "/answer1" },{ question: "How do I qualify for the Supreme Status?" , link: "/answer1" },{ question: "What are the benefits of Prime Status?" , link: "/answer1" },{ question: "Can I merge four $100k FTMO Accounts into a single $400k FTMO Account to apply for the Supreme Status?" , link: "/answer1" },{ question: "Can I modify my current account?" , link: "/answer1" },{ question: "How long does it take to become an FTMO Trader?" , link: "/answer1" },{ question: "Where is your office? How do I contact you?" , link: "/answer1" },{ question: "Besides an FTMO Account, do you provide any other value for traders?" , link: "/answer1" },],
    
  };

export default function FAQ({searchTerm}){
    return(
        <div className="w-full flex flex-row justify-center items-center">
            <div className="w-[85.66%] flex flex-row flex-wrap justify-start items-stretch gap-x-8 gap-y-8   ">
                {Object.entries(faqData).map(([title, questions]) => (
                     <FAQBox
                        key={title}
                        title={title}
                        questions={questions}
                        searchTerm={searchTerm}
                    />
                ))}
            </div>
        </div>

    )
}