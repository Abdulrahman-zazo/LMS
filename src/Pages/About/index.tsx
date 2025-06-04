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
    <div>
      <title>{t("pages.About", { defaultValue: "H-Platform - من نحن" })}</title>
      <meta
        name="description"
        content={t("pages.About_description", {
          defaultValue:
            "H-Platform مجتمع يقودك نحو التميز، ويمنحك الأدوات والمعرفة لتتقدّم بثقة في عالم سريع التغيّر نصنع تجربة تعلم رقمية متكاملة ترتقي بطموحك من الفكرة إلى الإنجاز.",
        })}
      />
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
