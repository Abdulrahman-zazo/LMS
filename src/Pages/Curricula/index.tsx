import { useTranslation } from "react-i18next";
import Curricula from "../../components/Curricula";
import { HeroHeader } from "../../components/HeroHeader";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import { cookieService } from "../../Cookies/CookiesServices";
import ComplaintsSections from "../../components/Ui/Complaints";

const CurriculaPage = () => {
  const { t, ready } = useTranslation("translation");
  const token = cookieService.get("auth_token");
  return (
    <div className=" min-h-screen " dir="rtl">
      <HeroHeader
        ready={ready}
        buttonText={t("curricula-header.title3")}
        title={t("curricula-header.title1")}
        description={t("curricula-header.title2")}
      />
      <Curricula />
      <WhyDifferentSection />
      {!token ? <GetStarted /> : <ComplaintsSections />}
    </div>
  );
};

export default CurriculaPage;
