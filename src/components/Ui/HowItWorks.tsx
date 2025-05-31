import Image1 from "../../assets/login.png";
import Image2 from "../../assets/search.png";
import Image3 from "../../assets/connections.png";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation("translation");

  const steps = [
    {
      id: 1,
      title: t("how-work.feature2"),
      description: t("how-work.content2"),
      button: t("how-work.button2"),
      image: Image1,
    },
    {
      id: 2,
      title: t("how-work.feature1"),
      description: t("how-work.content1"),
      button: t("how-work.button1"),
      image: Image2,
    },
    {
      id: 3,
      title: t("how-work.feature3"),
      description: t("how-work.content3"),
      button: t("how-work.button3"),
      image: Image3,
    },
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16" dir="rtl">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-12">
        {t("how-work.title")} <span className="text-primary">H-Platform؟</span>
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
