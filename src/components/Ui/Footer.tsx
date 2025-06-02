import { Facebook, Twitter, Youtube } from "react-feather";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("translation");
  return (
    <footer
      className="bg-primary text-white py-10 px-4 sm:px-16 text-sm"
      dir="rtl"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* عمود: شعار ووصف */}
        <div>
          <h3 className="font-bold text-2xl mb-2">H-PLATFORM</h3>
          <p className="text-sm opacity-90 mb-4">{t("footer.slogan")}</p>
          <div className="flex gap-4 text-white text-base">
            <a
              href="#"
              className="bg-bg-icon p-2 rounded-full hover:text-primary"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="bg-bg-icon p-2 rounded-full hover:text-primary"
            >
              <Twitter />
            </a>

            <a
              href="#"
              className="bg-bg-icon p-2 rounded-full hover:text-primary"
            >
              <Youtube />
            </a>
          </div>
        </div>

        {/* عمود: روابط أساسية */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/about-us" className="hover:text-bg-icon">
            {t("footer.aboutus")}
          </Link>
          <Link to="/about-us/#instructor" className="hover:text-bg-icon">
            انضم إلينا
          </Link>
          <Link to="/courses" className="hover:text-bg-icon">
            {t("footer.courses")}
          </Link>
          <Link to="/curricula" className="hover:text-bg-icon">
            {t("footer.curricula")}
          </Link>
        </div>

        {/* عمود: روابط قانونية ودعم */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="hover:text-bg-icon">
            {t("footer.help_center")}
          </Link>
          <Link to="/h-platform-term" className="hover:text-bg-icon">
            {t("footer.term")}
          </Link>
          <Link to="/h-platform-privacy-policy" className="hover:text-bg-icon">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>

      {/* خط فاصل + حقوق النشر */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm font-normal opacity-80">
        Designed by VegusCode, 2025, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
