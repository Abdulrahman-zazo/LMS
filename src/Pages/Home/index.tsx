import { useTranslation } from "react-i18next";
import Header from "../../components/Ui/Header";
import { Calendar } from "antd";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import CoursesComponent from "../../components/Ui/Courses";
import HowItWorksSection from "../../components/Ui/HowItWorks";
import FaqSection from "../../components/Ui/FAQ";
import GetStarted from "../../components/Ui/GetStarted";
import Footer from "../../components/Ui/Footer";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div lang="ar" dir="rtl">
      <Header />
      <Calendar />
      <WhyDifferentSection />
      <CoursesComponent />
      <HowItWorksSection />
      <FaqSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;
