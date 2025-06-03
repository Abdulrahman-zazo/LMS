import { useTranslation } from "react-i18next";
import { cookieService } from "../../Cookies/CookiesServices";
import React, { Suspense } from "react";
import { HeroHeader } from "../../components/HeroHeader";
import { Loaders } from "../../components/Loader";

const WhyDifferentSection = React.lazy(
  () => import("../../components/Ui/WhyDifferent")
);

const Offers = React.lazy(() => import("../../components/Offers"));

const GetStarted = React.lazy(() => import("../../components/Ui/GetStarted"));

const ComplaintsSections = React.lazy(
  () => import("../../components/Ui/Complaints")
);

const OfferPage = () => {
  const { t, ready } = useTranslation("translation");

  const token = cookieService.get("auth_token");
  return (
    <div dir="rtl">
      <Suspense fallback={<Loaders />}>
        <HeroHeader
          ready={ready}
          buttonText={t("offer-header.title3")}
          title={t("offer-header.title1")}
          description={t("offer-header.title2")}
        />
        <Offers />
        <WhyDifferentSection />
        {!token ? <GetStarted /> : <ComplaintsSections />}
      </Suspense>
    </div>
  );
};

export default OfferPage;
