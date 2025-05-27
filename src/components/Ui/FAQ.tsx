import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const faqs = [
  {
    question: "ما هي منصة H-Platform؟",
    answer:
      "هي منصة تعليمية إلكترونية تساعدك على تعلّم وتدريب المهارات الرقمية بطريقة مبسطة.",
  },
  {
    question: "هل الدورات مجانية أم مدفوعة؟",
    answer:
      "تتوفر لدينا دورات مجانية وأخرى مدفوعة، ويمكنك اختيار ما يناسبك من بينها.",
  },
  {
    question: "هل أحصل على شهادة بعد إنهاء الدورة؟",
    answer: "نعم، يتم إصدار شهادة إلكترونية عند اجتياز الدورة بنجاح.",
  },
  {
    question: "كيف أتواصل مع المدرب؟",
    answer:
      "يوجد قسم مخصص للتواصل داخل كل دورة، ويمكنك طرح أسئلتك هناك مباشرة.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? 0 : index);
  };

  return (
    <section className="bg-bg-purple " dir="rtl">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          الأسئلة <span className="text-primary">الشائعة</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-right px-4 py-4 flex items-center justify-between text-sm sm:text-base font-medium text-text hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl text-primary">
                  {openIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-paragraph leading-relaxed animate-fade">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
