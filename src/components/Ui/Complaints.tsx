import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ComplaintsSections = () => {
  const Navigate = useNavigate();
  return (
    <section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-16  "
      dir="rtl"
    >
      {/* Title */}
      <div className="w-[90%]mx-auto flex flex-col items-center rounded-2xl">
        <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
          الشكاوى والمقترحات
        </h2>
        <p className="text-sm sm:text-md text-paragraph text-center max-w-[90%] ">
          يسعدنا دائمًا سماعك! سواء كان لديك استفسار حول دوراتنا، تحتاج إلى دعم
          فني سريع، أو ترغب في مناقشة فرص شراكة، فريقنا جاهز لمساعدتك بكل
          احترافية وسرعة.
        </p>

        <Button
          onClick={() => {
            Navigate("/protected/complaints");
          }}
          type="primary"
          size="large"
          className="bg-primary  text-white text-sm px-5 py-4 my-4 rounded hover:bg-primary-500 transition"
        >
          أرسل ملاحظاتك أو اقتراحاتك الآن 💻!
        </Button>
      </div>
    </section>
  );
};

export default ComplaintsSections;
