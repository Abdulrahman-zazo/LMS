import { motion } from "framer-motion";
import { IconBeaker, IconBook, IconComputer, IconMonitorChart } from "./Icons";

interface HeroHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  ready: boolean;
  onButtonClick?: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  title,
  ready = false,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-primary p-8 md:p-16 rounded-3xl shadow-xl text-white relative overflow-hidden max-w-[90%] mx-auto mt-20 sm:mt-24">
      {/* Background Icons */}
      <motion.div
        className="absolute -left-8 bottom-8 opacity-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <IconBook className="w-14 h-14 md:w-28 md:h-28 text-bg-icon transform -rotate-4" />
      </motion.div>

      <motion.div
        className="absolute right-8 top-10 opacity-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <IconComputer className="w-12 h-12 md:w-20 md:h-20 text-bg-icon transform rotate-6" />
      </motion.div>

      <motion.div
        className="absolute -right-5 bottom-10 opacity-20"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <IconBeaker className="w-14 h-14 md:w-24 md:h-24 text-bg-icon transform -rotate-12" />
      </motion.div>

      <motion.div
        className="absolute left-8 top-10 opacity-15"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <IconMonitorChart className="w-12 h-12 md:w-20 md:h-20 text-purple-300" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center" dir="rtl">
        {ready ? (
          <>
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto font-medium md:font-semibold mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm md:text-md mb-8 max-w-xl mx-auto max-[500px]:hidden"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            <motion.button
              className="bg-white text-primary font-medium md:font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-[10px] sm:text-sm"
              onClick={onButtonClick}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText} 🚀!
            </motion.button>
          </>
        ) : (
          <div className="py-6">
            <div className="bg-gray-300/50 rounded w-[80%] h-6 sm:h-8 mb-4 mx-auto animate-pulse" />
            <div className="bg-gray-300/40 rounded w-[90%] h-4 sm:h-6 mb-4 mx-auto animate-pulse" />
            <div className="w-28 h-9 bg-gray-200 text-transparent rounded animate-pulse mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};
