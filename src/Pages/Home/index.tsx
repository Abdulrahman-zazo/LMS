import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "react-feather";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { cookieService } from "../../Cookies/CookiesServices";
import { Loaders } from "../../components/Loader";

const WhyDifferentSection = React.lazy(
  () => import("../../components/Ui/WhyDifferent")
);
const CoursesComponent = React.lazy(
  () => import("../../components/Ui/Courses")
);
const HowItWorksSection = React.lazy(
  () => import("../../components/Ui/HowItWorks")
);
const FaqSection = React.lazy(() => import("../../components/Ui/FAQ"));
const GetStarted = React.lazy(() => import("../../components/Ui/GetStarted"));
const HeroHome = React.lazy(() => import("../../components/Ui/HeroHome"));
const ComplaintsSections = React.lazy(
  () => import("../../components/Ui/Complaints")
);

const HomePage = () => {
  const Navigate = useNavigate();
  const { t } = useTranslation("translation");
  const token = cookieService.get("auth_token");

  return (
    <div lang="ar" dir="rtl">
      <Suspense fallback={<Loaders />}>
        <HeroHome />
        <WhyDifferentSection />
        <div className="bg-bg-purple py-2 ">
          <CoursesComponent max={6} />
          <div className="flex flex-col items-center">
            <button
              title="more"
              onClick={() => Navigate(`/courses`)}
              className="text-primary text-sm sm:text-base mb-12 p-4 flex items-center gap-4 cursor-pointer hover:text-primary/80 "
            >
              <span>
                <ArrowRightCircle />
              </span>
              <span>{t("Courses.more")}</span>
            </button>
          </div>
        </div>
        {!token && <HowItWorksSection />}
        <FaqSection />
        {!token ? <GetStarted /> : <ComplaintsSections />}
      </Suspense>
    </div>
  );
};

export default HomePage;
