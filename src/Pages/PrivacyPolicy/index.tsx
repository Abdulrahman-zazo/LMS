import React, { Suspense } from "react";
import { Loaders } from "../../components/Loader";
import { useTranslation } from "react-i18next";

const PrivacyComponent = React.lazy(
  () => import("../../components/Ui/privacyComponent")
);

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <title>
        {t("pages.privacy", { defaultValue: "H-Platform - سياسة الخصوصية" })}
      </title>
      <Suspense fallback={<Loaders />}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className=" max-[600px]:pb-4 sm:pt-40 sm:pb-2 md:pt-20">
            <div className="relative   max-[600px]:pt-16 overflow-hidden">
              <PrivacyComponent />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default PrivacyPolicyPage;
