import { useState } from "react";
import Image1 from "../../assets/login.png";
import Image2 from "../../assets/search.png";
import Image3 from "../../assets/connections.png";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HowItWorksSection = () => {
  const { t, ready } = useTranslation("translation");
  const Navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
  });
  interface Isteps {
    id: number;
    title: string;
    description: string;
    button: string;
    image: string;
  }
  const steps: Isteps[] = ready
    ? [
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
      ]
    : Array(3).fill({});

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
      {/* Title */}
      <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold text-center mb-12">
        {ready ? (
          <>
            {t("how-work.title")}
            <span className="text-primary">H-Platform؟</span>
          </>
        ) : (
          <div className="w-1/2 h-8 mx-auto rounded bg-neutral-300 animate-pulse"></div>
        )}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
        {steps.map((step: Isteps) => {
          const { id, button, description, image, title } = step;
          return (
            <div
              key={id}
              className="border border-neutral-400 rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              {ready ? (
                imageLoaded[id] ? (
                  <img
                    loading="lazy"
                    src={image}
                    alt={title}
                    className="h-56 w-auto mx-auto mb-6 object-contain"
                  />
                ) : (
                  <>
                    <div className="h-56 w-auto bg-neutral-200 rounded mb-6 animate-pulse" />
                    <img
                      src={image}
                      alt={title}
                      onLoad={() =>
                        setImageLoaded((prev) => ({ ...prev, [id]: true }))
                      }
                      className="hidden"
                    />
                  </>
                )
              ) : (
                <div className="h-56 bg-neutral-200 rounded mb-6 animate-pulse" />
              )}

              {/* Title */}
              {ready ? (
                <h3 className=" text-lg sm:text-xl font-semibold mb-4">
                  {title}
                </h3>
              ) : (
                <div className="h-4 w-2/3 mx-auto bg-neutral-300 mb-4 rounded animate-pulse" />
              )}

              {/* Description */}
              {ready ? (
                <p className="text-paragraph text-sm sm:text-base mb-4">
                  {description}
                </p>
              ) : (
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-neutral-200 rounded animate-pulse" />
                  <div className="h-3 w-5/6 bg-neutral-200 rounded animate-pulse" />
                </div>
              )}

              {/* Button */}
              {ready ? (
                <button
                  onClick={() => Navigate("/auth/login")}
                  title={`HeroHome ${button}`}
                  className="bg-primary w-full text-white text-sm sm:text-base px-5 py-4 my-4 rounded hover:bg-primary/80 transition"
                >
                  {button}
                </button>
              ) : (
                <div className="h-10 w-full bg-neutral-300 rounded animate-pulse my-4"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
