import { motion } from "framer-motion";
const Imagepin1 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899635/pin01_tyi7pr.png";
const Imagepin2 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899636/pin02_nfhujq.png";
const Imagepin3 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899637/pin03_cc5v1n.png";
const Imagepin4 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899639/pin04_ro4sw0.png";
const Imagepin5 =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749899640/pin05_ko7maa.png";
const ImageMap =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749898319/map_xsfk1d.webp";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const HeroWorldMap = () => {
  const { t, ready } = useTranslation("translation");

  return (
    <>
      {ready ? (
        <div className="bg-white max-[800px]:hidden  max-w-[1440px] mx-auto">
          <div className="flex items-center pt-4 flex-col max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-lg sm:text-2xl lg:text-3xl font-semibold  text-center text-text mb-4 " // ألوان وخطوط Tailwind
            >
              {t("map.title1")}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-2xl lg:text-3xl font-semibold  text-center mb-4 z-10"
            >
              <span className="text-text">{t("map.with")}</span>{" "}
              <span className="text-primary">H-Platform</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-600 text-center max-w-2xl mb-12 z-10"
            >
              {t("map.title2")}
            </motion.p>
          </div>
          <div className="relative flex flex-col items-center justify-center p-20 mb-12 overflow-hidden">
            <img
              src={ImageMap}
              alt="World Map"
              className="absolute  w-full  h-full  object-cover opacity-40 z-0"
            />

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              className="relative top-10 rounded-xl shadow-2xl z-30 "
            >
              <Logo type="icon" className="w-40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: "circOut" }}
              className="absolute top-[60%] left-[15%] md:top-[55%] md:left-[15%] z-20 flex items-center"
            >
              <img src={Imagepin4} alt="a" width={100} className="h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "circOut" }}
              className="absolute top-[40%] left-[25%] md:top-[35%] md:left-[30%] z-20 flex items-center"
            >
              <img src={Imagepin5} alt="a" width={100} className="h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: "circOut" }}
              className="absolute top-[10%] left-[48%] md:top-[10%] md:left-[45%] transform -translate-x-1/2 z-20 flex items-center"
            >
              <img src={Imagepin1} alt="a" width={120} className="h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: "circOut" }}
              className="absolute top-[40%] right-[25%] md:top-[35%] md:right-[30%] z-20 flex items-center"
            >
              <img src={Imagepin3} alt="a" width={100} className="h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease: "circOut" }}
              className="absolute top-[60%] right-[15%] md:top-[55%] md:right-[20%] z-20 flex items-center  "
            >
              <img src={Imagepin2} alt="a" width={100} className="h-full" />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="bg-white max-[800px]:hidden max-w-[800px] mx-auto">
          <div className="flex flex-col items-center pt-4 animate-pulse">
            <div className="h-6 md:h-8 w-1/2 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 md:h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 md:h-6 w-2/3 bg-gray-200 rounded mb-8"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroWorldMap;
