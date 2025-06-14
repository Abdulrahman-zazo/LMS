import { motion } from "framer-motion";
import {
  HomewithBack,
  Certifications,
  SendMonitor,
  IconBook,
  IconComputer,
  IconBeaker,
  IconMonitorChart,
} from "../Icons";
const ImageHome =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1749898317/home_as9ple.webp";
import { useTranslation } from "react-i18next";
import ImageWithSkeleton from "./ImageHome";

const HeroHome = () => {
  const { t, ready, i18n } = useTranslation("translation");
  const isRTL = i18n.language === "ar";
  return (
    <div>
      <div className="bg-primary py-12 px-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden w-[90%] max-w-[1240px] mx-auto mt-20 sm:mt-24 mb-2 sm:mb-8">
        <link rel="preload" as="image" href={ImageHome} />
        {/* Background Icons */}
        {!ready ? null : (
          <>
            <motion.div
              className={`absolute ${
                !isRTL ? "-left-8" : "-right-8"
              } bottom-8 opacity-20 min-[500px]:hidden`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <IconBook className="w-14 h-14 md:w-28 md:h-28 text-bg-icon transform -rotate-4" />
            </motion.div>
            <motion.div
              className={`absolute   ${
                isRTL ? "left-8" : "right-8"
              }  top-10 opacity-20 min-[500px]:hidden`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              <IconComputer className="w-12 h-12 md:w-20 md:h-20 text-bg-icon transform rotate-6" />
            </motion.div>
            <motion.div
              className="absolute -right-5 bottom-10 opacity-20 min-[500px]:hidden"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            >
              <IconBeaker className="w-14 h-14 md:w-24 md:h-24 text-bg-icon transform -rotate-12" />
            </motion.div>
            <motion.div
              className="absolute left-8 top-10 opacity-15 min-[500px]:hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              <IconMonitorChart className="w-12 h-12 md:w-20 md:h-20 text-purple-300" />
            </motion.div>
          </>
        )}

        {/* Main Content */}
        <div className="flex flex-col gap-6 md:gap-2 md:flex-row justify-around text-center sm:text-start items-center mx-auto">
          {/* Text Side */}
          <div className="relative z-10">
            {ready ? (
              <>
                <motion.h1
                  className="text-xl sm:text-3xl md:text-4xl lg:text-4xl max-w-xl mx-auto font-semibold mt-8 mb-2 sm:mb-6 leading-14 sm:leading-16"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {t("HeroHome.Home_title")}
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl  mb-4 md-8 max-w-xl mx-auto"
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {t("HeroHome.text1")}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base md:text-lg font-medium mb-8 max-w-lg md:max-w-xl mx-auto leading-7 max-[500px]:hidden"
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {t("HeroHome.text2")}
                </motion.p>
                <motion.button
                  title="HeroHome btn"
                  className="bg-white text-primary font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("HeroHome.text3")}!
                </motion.button>
              </>
            ) : (
              <>
                <div className="flex flex-col items-start space-y-2 px-8 ">
                  <div className="h-12 bg-white/20 rounded w-64 mb-6 animate-pulse " />
                  <div className="h-12 bg-white/20 rounded w-64 mb-6 animate-pulse " />
                  <div className="h-4 bg-white/20 rounded w-80 mb-4 animate-pulse " />
                  <div className="h-4 bg-white/20 rounded w-80 mb-4 animate-pulse " />
                  <div className="h-4 bg-white/20 rounded w-72 mb-8 animate-pulse  hidden max-[500px]:block" />
                  <div className="h-10 w-36 bg-white/20 rounded-lg  animate-pulse" />
                </div>
              </>
            )}
          </div>

          {/* Image + Floating Icons */}
          <div className="max-[600px]:hidden">
            {ready ? (
              <>
                <motion.div
                  className={`absolute ${
                    !isRTL ? "right-24" : "left-[35%]"
                  }  bottom-20`}
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  <HomewithBack className="w-12 h-12 md:w-20 md:h-20 text-purple-300" />
                </motion.div>
                <motion.div
                  className={`absolute  ${
                    !isRTL ? "right-16" : "left-[35%]"
                  }  top-5 z-10`}
                  initial={{ scale: 0.5, opacity: 0.5 }}
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, 10, 20, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                >
                  <Certifications className="w-12 h-12 md:w-32 md:h-32 text-purple-300" />
                </motion.div>
                {/* <motion.img
                  loading="eager"
                  src={ImageHome}
                  alt="h-platform home"
                  width={500}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mx-auto h-full"
                /> */}
                <ImageWithSkeleton src={ImageHome} alt="h-platform home" />
                <motion.div
                  className={`absolute  ${
                    !isRTL ? "right-[30%]" : "left-[12%]"
                  }  bottom-20`}
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  <SendMonitor className="w-12 h-12 md:w-20 md:h-20 text-purple-300" />
                </motion.div>
              </>
            ) : (
              <div className="w-[500px] h-[300px] bg-white/20 rounded-xl animate-pulse mx-auto" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
