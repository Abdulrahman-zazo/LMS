import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ComplaintsSections = () => {
  const Navigate = useNavigate();
  const { t, ready } = useTranslation("translation");
  return (
    <>
      {ready ? (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-16  ">
          {/* Title */}
          <div className="w-[90%]mx-auto flex flex-col items-center rounded-2xl">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center mb-4 sm:mb-6">
              {t("complaints.title1")}
            </h2>
            <p className="text-sm lg:text-base text-paragraph text-center sm:max-w-[60%] ">
              {t("complaints.title2")}
            </p>

            <button
              title=" complaints title3 "
              onClick={() => {
                Navigate("/protected/complaints");
              }}
              className="bg-primary text-sm sm:text-base text-white px-5 py-4 my-4 rounded hover:bg-primary/80 transition"
            >
              {t("complaints.title3")}💻!
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

export default ComplaintsSections;
