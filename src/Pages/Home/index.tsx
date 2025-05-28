import { useTranslation } from "react-i18next";
import Header from "../../components/Ui/Header";

import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import CoursesComponent from "../../components/Ui/Courses";
import HowItWorksSection from "../../components/Ui/HowItWorks";
import FaqSection from "../../components/Ui/FAQ";
import GetStarted from "../../components/Ui/GetStarted";
import Footer from "../../components/Ui/Footer";
import AboutusSection from "../../components/Ui/AboutusSection";
import HeroWorldMap from "../../components/Ui/Map";
import ComplaintsSections from "../../components/Ui/Complaints";
import { HeroHeader } from "../../components/HeroHeader";
import HeroHome from "../../components/Ui/HeroHome";
import FormComplaints from "../../components/FormComplaints";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div lang="ar" dir="rtl">
      <Header />
      <HeroHome />
      <WhyDifferentSection />
      <CoursesComponent />
      <HowItWorksSection />
      <FaqSection />
      <GetStarted />
      <AboutusSection />
      <HeroWorldMap />
      <ComplaintsSections />
      <HeroHeader
        buttonText="استعرض الدورات واكتشف ما يناسب طموحاتك"
        title="دوراتنا التدريبية"
        description="H-Platform ليست مجرد منصة تعليمية، بل تجربة ذكية وملهمة تجمع بين التكنولوجيا المتقدمة وخبرة نخبة من المدرّسين لتقدّم لك تعلماً حقيقياً بقيمة عالية."
      />
      <HeroHeader
        buttonText=" انضم إلينا اليوم وكن جزءًا من مستقبل التعلم"
        title="المناهج التعليمية في منصة H-Platform"
        description="توفر منصة H-Platform مناهج تعليمية متكاملة في مواد أساسية  كاللغة العربية، الإنجليزية، الرياضيات، والحساب الذهني، مصممة لتلائم جميع المستويات.
اختر المنهج الذي يناسبك، ودعنا نأخذ بيدك نحو التميز الأكاديمي والتفوق الحقيقي."
      />
      <HeroHeader
        buttonText=" انضم إلينا اليوم وكن جزءًا من مستقبل التعلم"
        title=" مع منصة H-Platform
حيث يبدأ التعلّم، ولا يتوقف أبدًا"
        description="H-Platform مجتمع يقودك نحو التميز، ويمنحك الأدوات والمعرفة لتتقدّم بثقة في عالم سريع التغيّر
نصنع تجربة تعلم رقمية متكاملة ترتقي بطموحك من الفكرة إلى الإنجاز."
      />
      <FormComplaints />
      <Footer />
    </div>
  );
};

export default HomePage;
