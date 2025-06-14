import { useTranslation } from "react-i18next";
import { useState } from "react";
const Image1 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899212/child-learning-new-information-from-digital-tablet_hzecdn.webp";
const Image2 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899631/Message_k74jze.png";
const Image3 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899632/Mission_kcfnql.png";
const Image4 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899641/Vision_siyeuf.png";

const AboutusSection = () => {
  const { t, ready } = useTranslation("translation");
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section>
      <link rel="preload" as="image" href={Image1} />

      <div className="max-w-[1440px] px-2 sm:px-6 py-8 sm:py-16 mx-auto">
        <div className="mx-auto w-[100%] sm:w-[80%]">
          <div className="flex flex-col md:flex-row justify-around mx-auto sm:gap-14  items-center">
            {ready ? (
              <div className="w-[80%] h-auto sm:w-1/2 mx-6">
                {[1, 2, 3].map((item) => {
                  const icon =
                    item === 1 ? Image2 : item === 2 ? Image3 : Image4;
                  const title = t(`about.title${item}`);
                  const description = t(`about.description${item}`);
                  return (
                    <div
                      key={item}
                      className="flex flex-col items-center mb-2  sm:text-start sm:items-start   text-center  "
                    >
                      <img
                        src={icon}
                        alt="Icon"
                        className="h-10 w-10 my-1"
                        loading="lazy"
                      />
                      <h3 className="font-semibold text-lg md:text-lg my-1 w-full">
                        {title}
                      </h3>
                      <p className="text-sm text-paragraph md:text-base w-full">
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
                    className="flex flex-col items-center  text-center sm:text-start md:items-start   space-y-2"
                  >
                    <div className="bg-neutral-300 h-12 w-12 rounded-full"></div>
                    <div className="h-4 bg-neutral-300 w-2/3 rounded"></div>
                    <div className="h-3 bg-neutral-200 w-full rounded"></div>
                    <div className="h-3 bg-neutral-200 w-5/6 rounded"></div>
                  </div>
                ))}
              </div>
            )}

            <div className="relative hidden sm:flex items-center justify-center mx-auto w-[250px] sm:w-[400px] h-[400px]">
              {!imageLoaded && (
                <div className="absolute w-full h-full bg-neutral-200 rounded animate-pulse" />
              )}
              <img
                rel="preload"
                src={Image1}
                alt="About us"
                onLoad={() => setImageLoaded(true)}
                className={`w-[350px] h-auto object-cover rounded-2xl overflow-hidden transition-opacity duration-500 ${
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
