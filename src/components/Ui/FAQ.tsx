import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import ScrollToHash from "../ScrollToHash";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? 0 : index);
  };
  const { t } = useTranslation("translation");
  const faqs = [
    {
      question: t("FAQ.questions1"),
      answer: t("FAQ.content1"),
    },
    {
      question: t("FAQ.questions2"),
      answer: t("FAQ.content2"),
    },
    {
      question: t("FAQ.questions3"),
      answer: t("FAQ.content3"),
    },
    {
      question: t("FAQ.questions4"),
      answer: t("FAQ.content4"),
    },
    {
      question: t("FAQ.questions5"),
      answer: t("FAQ.content5"),
    },
  ];
  return (
    <div className="bg-bg-purple " dir="rtl">
      <ScrollToHash />

      <section id="faq">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            {t("FAQ.title")}!
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-right px-4 py-4 flex items-center justify-between text-sm sm:text-base font-medium cursor-pointer text-text hover:bg-bg-purple transition"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-primary">
                    {openIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-sm text-paragraph leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
