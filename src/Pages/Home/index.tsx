import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import CoursesComponent from "../../components/Ui/Courses";
import HowItWorksSection from "../../components/Ui/HowItWorks";
import FaqSection from "../../components/Ui/FAQ";
import GetStarted from "../../components/Ui/GetStarted";
import HeroHome from "../../components/Ui/HeroHome";
import { encryptToken } from "../../Cookies/CryptoServices/crypto";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "react-feather";

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const Navigate = useNavigate();
  const { t } = useTranslation("translation");

  encryptToken("fake");
  return (
    <div lang="ar" dir="rtl">
      <HeroHome />
      <WhyDifferentSection />
      <div className="bg-bg-purple py-2 ">
        <CoursesComponent max={6} />
        <div className="flex flex-col items-center">
          <button
            title="more"
            onClick={() => Navigate(`/courses`)}
            className="text-primary text-sm mb-12 p-4  "
          >
            <ArrowRightCircle />
            {t("Courses.more")}
          </button>
        </div>
      </div>
      <HowItWorksSection />
      <FaqSection />
      <GetStarted />
    </div>
  );
};

export default HomePage;
