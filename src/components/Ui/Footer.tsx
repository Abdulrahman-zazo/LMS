import { Facebook, Twitter, Youtube } from "react-feather";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { changeLangAction } from "../../app/features/Language/LanguageSlice";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    dispatch(changeLangAction(newLang));
  };
  return (
    <footer className="bg-primary text-white py-10 px-4 sm:px-16 text-sm">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* عمود: شعار ووصف */}
        <div>
          <h3 className="font-semibold text-lg  sm:text-2xl mb-2">
            H-PLATFORM
          </h3>
          <p className="text-sm sm:text-base opacity-90 mb-4">
            {t("footer.slogan")}
          </p>
          <div className="flex gap-4 text-white text-base">
            <a
              title="H-platform on Facebook"
              href="/facebook"
              className="bg-bg-icon p-2 rounded-full hover:text-primary"
            >
              <Facebook size={18} />
            </a>
            <a
              title="H-platform on twitter"
              href="/twitter"
              className="bg-bg-icon p-2 rounded-full hover:text-primary"
            >
              <Twitter size={18} />
            </a>

            <a
              title="H-platform on youtube"
              href="/youtube"
              className="bg-bg-icon p-2 rounded-full hover:text-primary"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* عمود: روابط أساسية */}
        <div className="flex flex-col gap-2  text-xs sm:text-sm">
          <Link to="/about-us" className="hover:text-bg-icon">
            {t("footer.aboutus")}
          </Link>
          <Link to="/about-us/#instructor" className="hover:text-bg-icon">
            {t("userMenu.join")}
          </Link>
          <Link to="/courses" className="hover:text-bg-icon">
            {t("footer.courses")}
          </Link>
          <Link to="/curricula" className="hover:text-bg-icon">
            {t("footer.curricula")}
          </Link>
        </div>

        {/* عمود: روابط قانونية ودعم */}
        <div className="flex flex-col gap-2  text-xs sm:text-sm">
          <Link to="/" className="hover:text-bg-icon">
            {t("footer.help_center")}
          </Link>
          <Link to="/h-platform-term" className="hover:text-bg-icon">
            {t("footer.term")}
          </Link>
          <Link to="/h-platform-privacy-policy" className="hover:text-bg-icon">
            {t("footer.privacy")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="hover:text-bg-icon underline mt-2 text-start"
          >
            {i18n.language === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>

      {/* خط فاصل + حقوق النشر */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center  text-xs sm:text-sm font-normal opacity-80">
        Designed by VegusCode, 2025, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
