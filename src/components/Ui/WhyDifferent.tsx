import Image1 from "../../assets/Icon/Online Support.png";
import Image2 from "../../assets/Icon/Popular Man.png";
import Image3 from "../../assets/Icon/Puzzle.png";

const WhyDifferentSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mx-auto w-[90%]">
          <div className=" text-right ">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              لماذا نحن <span className="text-primary">مختلفون؟</span>
            </h2>
            <p className="text-paragraph">
              نحن نعيد تعريف التعليم الإلكتروني بطريقة مبتكرة ومميزة
            </p>
          </div>

          <div className="bg-bg-purple-light px-4 py-8 flex flex-col items-start rounded-xl text-right  hover:shadow-sm transition">
            <div>
              <img
                className="mb-2"
                src={Image3}
                alt="دعم فوري بلا انتظار"
                width={50}
              />
            </div>
            <h3 className="font-semibold text-[14px] lg:text-lg  mb-2">
              تعلّم مهارات جديدة
            </h3>
            <p className="text-[8px] md:text-sm text-paragraph">
              مع نخبة من المدرسين المحترفين الذين يحوّلون المواضيع المعقدة إلى
              مفاهيم بسيطة وممتعة.
            </p>
          </div>

          <div className="bg-bg-green-light px-4 py-8   flex flex-col items-start  rounded-xl text-right  hover:shadow-sm transition">
            <div>
              <img
                className="mb-2"
                src={Image2}
                alt="مدربون خبراء"
                width={50}
              />
            </div>
            <h3 className="font-semibold text-[14px] lg:text-lg mb-2">
              مدربون خبراء
            </h3>
            <p className="text-[8px] md:text-sm text-paragraph">
              مدرّبونا هم شركاء نجاحك! يجمعون بين المعرفة العميقة والقدرة على
              إيصال المعلومة بأسلوب محفّز وتفاعلي.
            </p>
          </div>

          <div className="bg-bg-beby-light px-4 py-8   flex flex-col items-start rounded-xl text-right  hover:shadow-sm transition">
            <div>
              <img
                className="mb-2"
                src={Image1}
                alt="تعلّم مهارات جديدة"
                width={50}
              />
            </div>

            <h3 className="font-semibold text-[14px] lg:text-lg mb-2">
              دعم فوري بلا انتظار
            </h3>
            <p className="text-[8px] md:text-sm text-paragraph">
              تواصل مباشر عبر واتساب مع المدرّبين، واحصل على الحلول في الوقت
              الحقيقي!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
