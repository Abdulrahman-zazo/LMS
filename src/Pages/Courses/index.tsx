import { HeroHeader } from "../../components/HeroHeader";
import CoursesComponent from "../../components/Ui/Courses";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";

const CoursessPage = () => {
  return (
    <div>
      <HeroHeader
        buttonText="استعرض الدورات واكتشف ما يناسب طموحاتك"
        title="دوراتنا التدريبية"
        description="H-Platform ليست مجرد منصة تعليمية، بل تجربة ذكية وملهمة تجمع بين التكنولوجيا المتقدمة وخبرة نخبة من المدرّسين لتقدّم لك تعلماً حقيقياً بقيمة عالية."
      />
      <CoursesComponent />
      <WhyDifferentSection />
      <GetStarted />
    </div>
  );
};

export default CoursessPage;
