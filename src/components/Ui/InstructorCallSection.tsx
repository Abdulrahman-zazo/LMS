import { Button } from "antd";
import ScrollToHash from "../ScrollToHash";

export default function InstructorCallSection() {
  return (
    <div>
      <ScrollToHash />
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
    </div>
  );
}
