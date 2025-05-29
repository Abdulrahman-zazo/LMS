import { HeroHeader } from "../../components/HeroHeader";
import AboutusSection from "../../components/Ui/AboutusSection";
import GetStarted from "../../components/Ui/GetStarted";
import HeroWorldMap from "../../components/Ui/Map";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";

const AboutPage = () => {
  return (
    <div dir="rtl" lang="ar">
      <HeroHeader
        buttonText=" انضم إلينا اليوم وكن جزءًا من مستقبل التعلم"
        title=" مع منصة H-Platform
حيث يبدأ التعلّم، ولا يتوقف أبدًا"
        description="H-Platform مجتمع يقودك نحو التميز، ويمنحك الأدوات والمعرفة لتتقدّم بثقة في عالم سريع التغيّر
نصنع تجربة تعلم رقمية متكاملة ترتقي بطموحك من الفكرة إلى الإنجاز."
      />
      <AboutusSection />
      <HeroWorldMap />
      <WhyDifferentSection />
      <GetStarted />
    </div>
  );
};

export default AboutPage;
