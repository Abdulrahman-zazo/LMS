import { useTranslation } from "react-i18next";
import { HeroHeader } from "../../components/HeroHeader";
import GetStarted from "../../components/Ui/GetStarted";
import WhyDifferentSection from "../../components/Ui/WhyDifferent";
import Offers from "../../components/Offers";

const OfferPage = () => {
  const { t } = useTranslation("translation");

  return (
    <div dir="rtl">
      <HeroHeader
        buttonText={t("offer-header.title3")}
        title={t("offer-header.title1")}
        description={t("offer-header.title2")}
      />
      <Offers />
      <WhyDifferentSection />
      <GetStarted />
    </div>
  );
};

export default OfferPage;
