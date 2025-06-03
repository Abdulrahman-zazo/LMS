import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import CoursesComponent from "../../components/Ui/Courses";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import { cookieService } from "../../Cookies/CookiesServices";
import ComplaintsSections from "../../components/Ui/Complaints";

const CoursessPage = () => {
  const { t, ready } = useTranslation("translation");

  const token = cookieService.get("auth_token");
  return (
    <div>
      <HeroHeader
        ready={ready}
        title={t("course-header.title1")}
        description={t("course-header.title2")}
        buttonText={t("course-header.title3")}
      />
      <CoursesComponent />
      <WhyDifferentSection />
      {!token ? <GetStarted /> : <ComplaintsSections />}
    </div>
  );
};

export default CoursessPage;
