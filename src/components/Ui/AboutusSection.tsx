import { useTranslation } from "react-i18next";
import Image1 from "../../assets/aboutus.webp";
import Image2 from "../../assets/Icon/Message.png";
import Image3 from "../../assets/Icon/Mission.png";
import Image4 from "../../assets/Icon/Vision.png";
import { useState } from "react";

const AboutusSection = () => {
  const { t, ready } = useTranslation("translation");
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section dir="rtl">
      <div className="max-w-[1440px] px-2 sm:px-6 py-8 sm:py-16 mx-auto">
        <div className="mx-auto w-[90%] sm:w-[80%]">
          <div className="flex flex-col md:flex-row justify-around mx-auto gap-14 items-center">
            {ready ? (
              <div className="w-2/3 h-auto sm:w-1/2 mx-6">
                {[1, 2, 3].map((item) => {
                  const icon =
                    item === 1 ? Image2 : item === 2 ? Image3 : Image4;
                  const title = t(`about.title${item}`);
                  const description = t(`about.description${item}`);
                  return (
                    <div
                      key={item}
                      className="flex flex-col items-center mb-4 md:items-start text-center md:text-right"
                    >
                      <img src={icon} alt="Icon" className="h-12 w-12 my-2" />
                      <h3 className="font-semibold text-md md:text-lg my-2 w-full">
                        {title}
                      </h3>
                      <p className="text-sm text-paragraph md:text-md w-full">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-2/3 sm:w-1/2 mx-6 space-y-6 animate-pulse">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center md:items-start text-center md:text-right space-y-2"
                  >
                    <div className="bg-neutral-300 h-12 w-12 rounded-full"></div>
                    <div className="h-4 bg-neutral-300 w-2/3 rounded"></div>
                    <div className="h-3 bg-neutral-200 w-full rounded"></div>
                    <div className="h-3 bg-neutral-200 w-5/6 rounded"></div>
                  </div>
                ))}
              </div>
            )}

            <div className="relative flex items-center justify-center mx-auto w-[350px] h-[400px]">
              {!imageLoaded && (
                <div className="absolute w-full h-full bg-neutral-200 rounded animate-pulse" />
              )}
              <img
                src={Image1}
                alt="About us"
                onLoad={() => setImageLoaded(true)}
                className={`w-[350px] h-auto object-cover overflow-hidden transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection;
