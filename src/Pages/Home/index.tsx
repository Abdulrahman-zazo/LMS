import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import CoursesComponent from "../../components/Ui/Courses";
import HowItWorksSection from "../../components/Ui/HowItWorks";
import FaqSection from "../../components/Ui/FAQ";
import GetStarted from "../../components/Ui/GetStarted";
import HeroHome from "../../components/Ui/HeroHome";
import { encryptToken } from "../../Cookies/CryptoServices/crypto";

const HomePage = () => {
  encryptToken("fake token");
  return (
    <div lang="ar" dir="rtl">
      <HeroHome />
      <WhyDifferentSection />
      <CoursesComponent />
      <HowItWorksSection />
      <FaqSection />
      <GetStarted />
    </div>
  );
};

export default HomePage;
