import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const { t, ready } = useTranslation("translation");
  const Navigate = useNavigate();

  return (
    <>
      {ready ? (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-16">
          {/* Title */}
          <div className="w-[90%] mx-auto flex flex-col items-center">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold  text-center mb-4 sm:mb-6">
              {t("Get_started.title1")}
            </h2>
            <p className="text-sm sm:text-base text-paragraph text-center max-w-[90%] ">
              {t("Get_started.title2")}
            </p>

            <button
              title="Get_started btn"
              onClick={() => {
                Navigate("/auth/login");
              }}
              className="bg-primary  text-white text-sm sm:text-base px-8 py-4 my-4 rounded hover:bg-primary/80 transition"
            >
              {t("Get_started.title3")}🚀!
            </button>
          </div>
        </section>
      ) : (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <div className="w-[90%] mx-auto flex flex-col items-center animate-pulse">
            <div className="h-6 sm:h-8 w-1/2 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 sm:h-6 w-2/3 bg-neutral-200 rounded mb-6"></div>
            <div className="h-10 w-32 bg-neutral-200 rounded"></div>
          </div>
        </section>
      )}
    </>
  );
};

export default GetStarted;
