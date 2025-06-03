import ScrollToHash from "../ScrollToHash";
import { useTranslation } from "react-i18next";

export default function InstructorCallSection() {
  const { t, ready } = useTranslation();
  return (
    <div>
      <ScrollToHash />
      {ready ? (
        <section
          id="instructor"
          className="max-w-[1440px] bg-bg-purple mx-auto px-4 sm:px-8 py-8 sm:py-16"
          dir="rtl"
        >
          {/* Title */}
          <div className="w-[90%] mx-auto flex flex-col items-center">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold  text-center mb-4 sm:mb-6">
              {t("Instructor.title1")}
            </h2>
            <p className="text-sm sm:text-base text-paragraph text-center my-2 sm:max-w-[40%] ">
              {t("Instructor.title2")}
            </p>

            <button
              title="Instructor.title"
              className="bg-primary  text-white text-sm sm:text-base shadow-sm px-8 py-4 my-4 rounded-lg hover:bg-primary/80 transition"
            >
              {t("Instructor.title3")}
            </button>
          </div>
        </section>
      ) : (
        <section
          className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-16"
          dir="rtl"
        >
          <div className="w-[90%] mx-auto flex flex-col items-center animate-pulse">
            <div className="h-6 sm:h-8 w-1/2 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 sm:h-6 w-2/3 bg-neutral-200 rounded mb-6"></div>
            <div className="h-10 w-32 bg-neutral-200 rounded"></div>
          </div>
        </section>
      )}
    </div>
  );
}
