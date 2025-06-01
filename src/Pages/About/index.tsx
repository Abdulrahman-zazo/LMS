import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import AboutusSection from "../../components/Ui/AboutusSection";
import HeroWorldMap from "../../components/Ui/Map";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import InstructorCallSection from "../../components/Ui/InstructorCallSection";

const AboutPage = () => {
  const { t, ready } = useTranslation("translation");

  return (
    <div dir="rtl" lang="ar">
      <HeroHeader
        ready={ready}
        title={t("about-header.title1")}
        description={t("about-header.title2")}
        buttonText={t("about-header.title3")}
      />
      <AboutusSection />
      <HeroWorldMap />
      <WhyDifferentSection />
      <InstructorCallSection />
    </div>
  );
};

export default AboutPage;
