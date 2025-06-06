import { useTranslation } from "react-i18next";

import { HeroHeader } from "../../components/HeroHeader";

import { cookieService } from "../../Cookies/CookiesServices";
import React, { Suspense } from "react";
import { Loaders } from "../../components/Loader";

const WhyDifferentSection = React.lazy(
  () => import("../../components/Ui/WhyDifferent")
);
const Curricula = React.lazy(() => import("../../components/Curricula"));

const GetStarted = React.lazy(() => import("../../components/Ui/GetStarted"));
const ComplaintsSections = React.lazy(
  () => import("../../components/Ui/Complaints")
);

const CurriculaPage = () => {
  const { t, ready } = useTranslation("translation");
  const token = cookieService.get("auth_token");
  return (
    <>
      <title>
        {t("pages.Curriculum", { defaultValue: "H-Platform - المناهج" })}
      </title>
      <meta
        name="description"
        content={t("pages.Curriculum_description", {
          defaultValue:
            "في عالم يتغير بسرعة، لم يعد التعلم وحده كافيًا بل يجب أن تتميّز. منصة H-Platform ليست مجرد أداة تعليمية؛ إنها الجسر الذي يربط بين أحلامك والواقع.",
        })}
      />
      <div className=" min-h-screen ">
        <Suspense fallback={<Loaders />}>
          <HeroHeader
            ready={ready}
            buttonText={t("curricula-header.title3")}
            title={t("curricula-header.title1")}
            description={t("curricula-header.title2")}
          />
          <Curricula />
          <WhyDifferentSection />
          {!token ? <GetStarted /> : <ComplaintsSections />}
        </Suspense>
      </div>
    </>
  );
};

export default CurriculaPage;
