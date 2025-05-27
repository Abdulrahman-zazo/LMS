import Image1 from "../../assets/login.png";
import Image2 from "../../assets/search.png";
import Image3 from "../../assets/connections.png";
import { Button } from "antd";

const steps = [
  {
    id: 1,
    title: "أنشئ ملفك الشخصي",
    description:
      "سجل بسهولة باستخدام Google أو Facebook وابدأ ببناء ملفك ومتابعة تقدمك في التدريب.",
    image: Image1,
    button: "ابدأ الآن",
  },
  {
    id: 2,
    title: "استعرض الدورات التدريبية",
    description:
      "استعرض الدورات المتاحة واختر الأنسب، وابدأ بالتعلم والتطوير فورًا بسهولة ومرونة.",
    image: Image2,
    button: "ابحث عن الدورة المناسبة لك",
  },
  {
    id: 3,
    title: "احجز مقعدك الآن",
    description:
      "تواصل مباشر مع المدربين لحجز مقعدك والانضمام إلى الدورة التي اخترتها.",
    image: Image3,
    button: "كوّن اتصالك",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16" dir="rtl">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-12">
        كيف تعمل منصة <span className="text-primary">H-Platform؟</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="border rounded-xl p-6 text-center  hover:shadow-sm transition"
          >
            <img
              src={step.image}
              alt={step.title}
              className="h-56 mx-auto mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
            <p className="text-paragraph text-sm mb-4">{step.description}</p>
            <Button
              type="primary"
              size="large"
              className="bg-primary w-full text-white text-sm px-5 py-4 my-4 rounded hover:bg-primary-500 transition"
            >
              {step.button}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
