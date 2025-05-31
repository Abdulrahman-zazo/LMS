import { useTranslation } from "react-i18next";
import Image1 from "../../assets/Icon/Online Support.png";
import Image2 from "../../assets/Icon/Popular Man.png";
import Image3 from "../../assets/Icon/Puzzle.png";

const WhyDifferentSection = () => {
  const { t } = useTranslation("translation");
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mx-auto w-[90%]">
          <div className=" text-right ">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {t("why.why_we")}{" "}
              <span className="text-primary">{t("why.Differenet")}</span>
            </h2>
            <p className="text-paragraph">{t("why.subtitle")}</p>
          </div>

          <div className="bg-bg-purple-light px-4 py-8 flex flex-col items-start rounded-xl text-right  hover:shadow-sm transition">
            <div>
              <img
                className="mb-2"
                src={Image3}
                alt="دعم فوري بلا انتظار"
                width={50}
              />
            </div>
            <h3 className="font-semibold text-[14px] lg:text-lg  mb-2">
              {t("why.key3")}
            </h3>
            <p className="text-[8px] md:text-sm text-paragraph">
              {t("why.value3")}
            </p>
          </div>

          <div className="bg-bg-green-light px-4 py-8   flex flex-col items-start  rounded-xl text-right  hover:shadow-sm transition">
            <div>
              <img
                className="mb-2"
                src={Image2}
                alt="مدربون خبراء"
                width={50}
              />
            </div>
            <h3 className="font-semibold text-[14px] lg:text-lg mb-2">
              {t("why.key2")}
            </h3>
            <p className="text-[8px] md:text-sm text-paragraph">
              {t("why.value2")}
            </p>
          </div>

          <div className="bg-bg-beby-light px-4 py-8   flex flex-col items-start rounded-xl text-right  hover:shadow-sm transition">
            <div>
              <img
                className="mb-2"
                src={Image1}
                alt="تعلّم مهارات جديدة"
                width={50}
              />
            </div>

            <h3 className="font-semibold text-[14px] lg:text-lg mb-2">
              {t("why.key1")}
            </h3>
            <p className="text-[8px] md:text-sm text-paragraph">
              {t("why.value3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
