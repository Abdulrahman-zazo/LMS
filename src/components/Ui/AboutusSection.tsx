import { useTranslation } from "react-i18next";
import Image1 from "../../assets/aboutus.webp";
import Image2 from "../../assets/Icon/Message.png";
import Image3 from "../../assets/Icon/Mission.png";
import Image4 from "../../assets/Icon/Vision.png";

const AboutusSection = () => {
  const { t } = useTranslation("translation");

  return (
    <section dir="rtl">
      <div className="max-w-[1440px] px-2 sm:px-6 py-8 sm:py-16 mx-auto">
        <div className="mx-auto w-[90%] sm:w-[80%]">
          <div className="flex  flex-col md:flex-row justify-around mx-auto  gap-14 items-center ">
            <div className="w-2/3 sm:w-1/2 mx-6">
              <div className="flex flex-col items-center mb-4   md:items-start text-center md:text-right ">
                <img src={Image2} alt="Mission" className="h-12 w-12 my-2" />
                <h3 className="font-semibold w-[100%] text-md md:text-lg my-2">
                  {t("about.title1")}
                </h3>
                <p className="text-sm text-paragraph md:text-md ">
                  {t("about.description1")}
                </p>
              </div>
              <div className="flex flex-col items-center mb-4 md:items-start text-center md:text-right ">
                <img src={Image3} alt="Mission" className="h-12 w-12 my-2" />
                <h3 className="font-semibold text-md md:text-lg my-2">
                  {t("about.title2")}
                </h3>
                <p className="text-sm text-paragraph md:text-md ">
                  {t("about.description2")}
                </p>
              </div>
              <div className="flex flex-col items-center mb-4 md:items-start text-center md:text-right ">
                <img src={Image4} alt="Mission" className="h-12 w-12 my-2" />
                <h3 className="font-semibold text-md md:text-lg my-2">
                  {t("about.title3")}
                </h3>
                <p className="text-sm w-full text-paragraph md:text-md ">
                  {t("about.description3")}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto">
              <img
                src={Image1}
                alt="About us"
                className="w-[350px] object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection;
