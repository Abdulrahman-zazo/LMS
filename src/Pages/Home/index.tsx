import { useTranslation } from "react-i18next";
import Header from "../../components/Ui/Header";
import { Calendar } from "antd";
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

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div lang="ar" dir="rtl">
      <Header />
      <Calendar />
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
      <Footer />
    </div>
  );
};

export default HomePage;
