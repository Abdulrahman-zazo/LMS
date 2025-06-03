import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import { cookieService } from "../../Cookies/CookiesServices";
import React, { Suspense } from "react";
import { Loaders } from "../../components/Loader";

const WhyDifferentSection = React.lazy(
  () => import("../../components/Ui/WhyDifferent")
);
const CoursesComponent = React.lazy(
  () => import("../../components/Ui/Courses")
);

const GetStarted = React.lazy(() => import("../../components/Ui/GetStarted"));

const ComplaintsSections = React.lazy(
  () => import("../../components/Ui/Complaints")
);

const CoursessPage = () => {
  const { t, ready } = useTranslation("translation");

  const token = cookieService.get("auth_token");
  return (
    <div>
      <Suspense fallback={<Loaders />}>
        <HeroHeader
          ready={ready}
          title={t("course-header.title1")}
          description={t("course-header.title2")}
          buttonText={t("course-header.title3")}
        />
        <CoursesComponent />
        <WhyDifferentSection />
        {!token ? <GetStarted /> : <ComplaintsSections />}
      </Suspense>
    </div>
  );
};

export default CoursessPage;
