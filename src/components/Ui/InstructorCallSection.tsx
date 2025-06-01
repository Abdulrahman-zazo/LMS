import { Button } from "antd";
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
            <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
              هل أنت مدرّس أو مدرّب؟ 🎓
            </h2>
            <p className="text-sm sm:text-md text-paragraph text-center my-2 sm:max-w-[40%] ">
              شارك معرفتك مع آلاف المتعلمين! إذا كنت ترغب بتقديم دورات أو محتوى
              تدريبي على منصتنا، يسعدنا التعاون معك.
            </p>

            <Button
              type="primary"
              size="large"
              className="bg-primary  text-white text-sm px-5 py-4 my-4 rounded hover:bg-primary-500 transition"
            >
              تواصل معنا
            </Button>
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
