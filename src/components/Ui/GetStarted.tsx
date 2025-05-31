import { Button } from "antd";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation("translation");

  return (
    <section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-16"
      dir="rtl"
    >
      {/* Title */}
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
          {t("Get_started.title1")}
        </h2>
        <p className="text-sm sm:text-md text-paragraph text-center max-w-[90%] ">
          {t("Get_started.title2")}
        </p>

        <Button
          type="primary"
          size="large"
          className="bg-primary  text-white text-sm px-5 py-4 my-4 rounded hover:bg-primary-500 transition"
        >
          {t("Get_started.title3")}🚀!
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
