import { Button } from "antd";

const GetStarted = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16" dir="rtl">
      {/* Title */}
      <div className="w-1/2 mx-auto flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6">
          محتوى تعليمي يصلك أينما كنت!
        </h2>
        <p className="text-paragraph text-center max-w-2xl ">
          انضم الآن ولا تفوت الفرصة لتصلك أحدث الدورات، المناهج، والعروض الخاصة
          المصممة خصيصًا لك.
        </p>

        <Button
          type="primary"
          size="large"
          className="bg-primary  text-white text-sm px-5 py-4 my-4 rounded hover:bg-primary-500 transition"
        >
          تعلم بذكاء، وابدأ رحلتك الآن 🚀!
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
