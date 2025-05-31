import { motion } from "framer-motion";
import { IconBeaker, IconBook, IconComputer, IconMonitorChart } from "./Icons";
import { useTranslation } from "react-i18next";
interface HeaderCousrseProps {
  title: string;
  description: string;
  material?: string | null;
  hours?: string;
  type: string;
}

export const HeaderCourse: React.FC<HeaderCousrseProps> = ({
  title,
  description,
  type,
  hours,
}) => {
  const { t } = useTranslation("translation");

  return (
    <div className="bg-primary p-8 md:p-16 rounded-3xl shadow-xl text-white relative overflow-hidden max-w-[100%] mx-auto mt-20 sm:mt-24">
      {/* Background Icons - will add animation later */}
      <motion.div
        className="hidden sm:block absolute left-25 bottom-16 opacity-100"
        // Animation props for IconBook
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <IconBook className="w-14 h-14 md:w-28 md:h-28 text-bg-icon transform -rotate-4" />
      </motion.div>

      <motion.div
        className="hidden sm:block absolute -left-5 bottom-15 opacity-20"
        // Animation props for IconBeaker
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      >
        <IconBeaker className="w-14 h-14 md:w-24 md:h-24 text-bg-icon transform -rotate-12" />
      </motion.div>

      <motion.div
        className=" hidden sm:block absolute left-10 top-10 opacity-15"
        // Animation props for IconMonitorChart (example)
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
      >
        <IconMonitorChart className="w-12 h-12 md:w-25 md:h-25 text-purple-300" />
      </motion.div>

      {/* mobile */}
      <motion.div
        className="absolute -left-8 bottom-8 opacity-20 sm:hidden"
        // Animation props for IconBook
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <IconBook className="w-14 h-14 md:w-28 md:h-28 text-bg-icon transform -rotate-4" />
      </motion.div>

      <motion.div
        className="absolute right-8 top-10 opacity-20 sm:hidden"
        // Animation props for IconComputer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <IconComputer className="w-12 h-12 md:w-20 md:h-20 text-bg-icon transform rotate-6" />
      </motion.div>

      <motion.div
        className="absolute -right-5 bottom-10 opacity-20 sm:hidden"
        // Animation props for IconBeaker
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      >
        <IconBeaker className="w-14 h-14 md:w-24 md:h-24 text-bg-icon transform -rotate-12" />
      </motion.div>

      <motion.div
        className="absolute left-8 top-10 opacity-20 sm:hidden"
        // Animation props for IconMonitorChart (example)
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
      >
        <IconMonitorChart className="w-12 h-12 md:w-20 md:h-20 text-purple-300" />
      </motion.div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col  items-center sm:items-start"
        dir="rtl"
      >
        <motion.h1
          className="text-xl text-center sm:text-right sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl  font-medium md:font-semibold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-xs leading-6  text-center sm:text-right sm:text-sm md:text-md mb-8 max-w-2xl "
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {description.slice(0, 115)}
        </motion.p>
        <motion.p
          className="text-xs sm:text-xs md:text-sm mb-8 max-w-xl  max-[500px]:hidden"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          - {hours && `${hours} ساعة ,`} {type}
        </motion.p>
        <motion.button
          className="bg-white text-primary font-medium md:font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-[10px]  sm:text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }} // backOut gives a nice little pop
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("buttons.eroll")}
        </motion.button>
      </div>
    </div>
  );
};
