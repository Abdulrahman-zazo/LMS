import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import React, { Suspense } from "react";
import { Loaders } from "../../components/Loader";

const WhyDifferentSection = React.lazy(
  () => import("../../components/Ui/WhyDifferent")
);
const HeroWorldMap = React.lazy(() => import("../../components/Ui/Map"));
const AboutusSection = React.lazy(
  () => import("../../components/Ui/AboutusSection")
);
const InstructorCallSection = React.lazy(
  () => import("../../components/Ui/InstructorCallSection")
);

const AboutPage = () => {
  const { t, ready } = useTranslation("translation");

  return (
    <div dir="rtl" lang="ar">
      <Suspense fallback={<Loaders />}>
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
      </Suspense>
    </div>
  );
};

export default AboutPage;
