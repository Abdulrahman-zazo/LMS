import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import CoursesComponent from "../../components/Ui/Courses";
import HowItWorksSection from "../../components/Ui/HowItWorks";
import FaqSection from "../../components/Ui/FAQ";
import GetStarted from "../../components/Ui/GetStarted";
import HeroHome from "../../components/Ui/HeroHome";
import { encryptToken } from "../../Cookies/CryptoServices/crypto";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  encryptToken("fake token");
  const Navigate = useNavigate();
  const { t } = useTranslation("translation");
  return (
    <div lang="ar" dir="rtl">
      <HeroHome />
      <WhyDifferentSection />
      <div className="bg-bg-purple flex flex-col items-center">
        <CoursesComponent max={6} />
        <Button
          onClick={() => Navigate(`/courses`)}
          type="default"
          className="text-primary text-sm mb-12  "
          size="large"
        >
          <ArrowRightCircle />
          {t("Courses.more")}
        </Button>
      </div>
      <HowItWorksSection />
      <FaqSection />
      <GetStarted />
    </div>
  );
};

export default HomePage;
