import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import Offers from "../../components/Offers";
import { cookieService } from "../../Cookies/CookiesServices";
import ComplaintsSections from "../../components/Ui/Complaints";

const OfferPage = () => {
  const { t, ready } = useTranslation("translation");

  const token = cookieService.get("auth_token");
  return (
    <div dir="rtl">
      <HeroHeader
        ready={ready}
        buttonText={t("offer-header.title3")}
        title={t("offer-header.title1")}
        description={t("offer-header.title2")}
      />
      <Offers />
      <WhyDifferentSection />
      {!token ? <GetStarted /> : <ComplaintsSections />}
    </div>
  );
};

export default OfferPage;
