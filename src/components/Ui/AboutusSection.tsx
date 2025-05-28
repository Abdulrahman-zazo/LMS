import Image1 from "../../assets/aboutus.webp";
import Image2 from "../../assets/Icon/Message.png";
import Image3 from "../../assets/Icon/Mission.png";
import Image4 from "../../assets/Icon/Vision.png";

const AboutusSection = () => {
  return (
    <section dir="rtl">
      <div className="max-w-[1440px] px-4 sm:px-6 py-16 mx-auto">
        <div className="mx-auto w-[80%]">
          <div className="flex  flex-col md:flex-row  gap-14 items-center ">
            <div className="w-2/3 sm:w-1/2">
              <div className="flex flex-col items-center mb-4   md:items-start text-center md:text-right ">
                <img src={Image2} alt="Mission" className="h-16 w-16 my-2" />
                <h3 className="font-semibold w-[100%] text-md md:text-lg my-2">
                  رسالتنا
                </h3>
                <p className="text-sm text-paragraph md:text-md ">
                  توفير تعليم ميسّر يناسب وقتك، ومحتوى جذّاب يُشعل فضولك،
                  ومسارات تعلم شخصية مصممة خصيصًا لك.
                </p>
              </div>
              <div className="flex flex-col items-center mb-4 md:items-start text-center md:text-right ">
                <img src={Image3} alt="Mission" className="h-16 w-16 my-2" />
                <h3 className="font-semibold text-md md:text-lg my-2">هدفنا</h3>
                <p className="text-sm text-paragraph md:text-md ">
                  في H-Platform، نعمل على جعل التعليم تجربة فريدة ومؤثرة من خلال
                  تقديم حلول تعليمية مبتكرة، ممتعة، ومتاحة للجميع — بغض النظر عن
                  العمر أو الخلفية أو الموقع الجغرافي.
                </p>
              </div>
              <div className="flex flex-col items-center mb-4 md:items-start text-center md:text-right ">
                <img src={Image4} alt="Mission" className="h-16 w-16 my-2" />
                <h3 className="font-semibold text-md md:text-lg my-2">
                  رؤيتنا
                </h3>
                <p className="text-sm w-full text-paragraph md:text-md ">
                  تنبني مجتمعًا عالميًا من المتعلمين المتصلين بالمعرفة والنمو،
                  حيث تتحول أحدث التقنيات إلى تجربة تعليمية تغيّر الحياة، وتفتح
                  الأبواب نحو المستقبل.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto">
              <img src={Image1} alt="About us" className="w-[400px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection;
