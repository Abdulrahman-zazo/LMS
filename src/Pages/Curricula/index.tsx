import Curricula from "../../components/Curricula";
import { HeroHeader } from "../../components/HeroHeader";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";

const CurriculaPage = () => {
  return (
    <div className=" min-h-screen py-10 " dir="rtl">
      <HeroHeader
        buttonText=" انضم إلينا اليوم وكن جزءًا من مستقبل التعلم"
        title="المناهج التعليمية في منصة H-Platform"
        description="توفر منصة H-Platform مناهج تعليمية متكاملة في مواد أساسية  كاللغة العربية، الإنجليزية، الرياضيات، والحساب الذهني، مصممة لتلائم جميع المستويات.
      اختر المنهج الذي يناسبك، ودعنا نأخذ بيدك نحو التميز الأكاديمي والتفوق الحقيقي."
      />
      <Curricula />
      <WhyDifferentSection />
      <GetStarted />
    </div>
  );
};

export default CurriculaPage;
