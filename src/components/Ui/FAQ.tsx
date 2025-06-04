import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToHash from "../ScrollToHash";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "react-feather";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { t, ready } = useTranslation("translation");

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const faqs = ready
    ? [
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
      ]
    : Array(5).fill({ question: "", answer: "" });

  return (
    <div className="bg-bg-purple">
      <ScrollToHash />

      <section id="faq">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-xl sm:text-3xl lg:text-3xl font-semibold text-center mb-10">
            {ready ? (
              t("FAQ.title")
            ) : (
              <div className="w-1/2 h-8 bg-neutral-200 mx-auto rounded animate-pulse" />
            )}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  title="fqa btn-details"
                  onClick={() => ready && toggle(index)}
                  disabled={!ready}
                  className="w-full px-4 py-4 flex items-center justify-between text-sm sm:text-base font-medium cursor-pointer text-text hover:bg-bg-purple transition"
                >
                  {ready ? (
                    <>
                      <span>{faq.question}</span>
                      <span className="text-xl text-primary">
                        {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                      </span>
                    </>
                  ) : (
                    <div className="w-full flex justify-between items-center animate-pulse">
                      <div className="h-4 bg-neutral-300 w-3/4 rounded"></div>
                      <div className="h-5 w-5 bg-neutral-200 rounded-full" />
                    </div>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {ready && openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-sm sm:text-base text-paragraph leading-relaxed">
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
