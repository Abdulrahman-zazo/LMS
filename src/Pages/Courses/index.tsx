import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import CoursesComponent from "../../components/Ui/Courses";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";

const CoursessPage = () => {
  const { t, ready } = useTranslation("translation");

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
      <GetStarted />
    </div>
  );
};

export default CoursessPage;
