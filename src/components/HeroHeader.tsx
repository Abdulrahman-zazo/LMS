import { motion } from "framer-motion";
interface HeroHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void; // Optional: if you want to handle button click
}

// Example Icon Components (replace with your actual SVGs or images)
const IconBook: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2ZM19 20H5V4H7V12L9.5 10.5L12 12V4H19V20Z" />
    <path d="M14 8H17V10H14V8Z" />
    <path d="M14 12H17V14H14V12Z" />
    <path d="M14 16H17V18H14V16Z" />
  </svg>
);

const IconComputer: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20 18H4V6H20M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM8 12H6V14H8V12ZM12 12H10V14H12V12ZM16 12H14V14H16V12Z" />
    <path d="M12 16H8V18H12V16Z" />
    <text
      x="16"
      y="10"
      fontSize="4"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      A+
    </text>
  </svg>
);

const IconBeaker: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.2 6.3C18.9 4.7 17.5 3.5 16 3.5H8C6.5 3.5 5.1 4.7 4.8 6.3L3 18V20H21V18L19.2 6.3ZM8.9 5.5H15.1L16.5 13.5H7.5L8.9 5.5ZM6.7 18L6 14.5H18L17.3 18H6.7Z" />
    <path d="M12 8C11.4477 8 11 8.44772 11 9V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V9C13 8.44772 12.5523 8 12 8Z" />
    <path d="M10 10C9.44772 10 9 10.4477 9 11V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11C11 10.4477 10.5523 10 10 10Z" />
    <path d="M14 10C13.4477 10 13 10.4477 13 11V12C13 12.5523 13.4477 13 14 13C14.5523 13 15 12.5523 15 12V11C15 10.4477 14.5523 10 14 10Z" />
  </svg>
);

const IconMonitorChart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M3 3H21V17H3V3ZM5 5V15H19V5H5Z" />
    <path d="M1 19H23V21H1V19Z" />
    <path d="M7 7H9V13H7V7Z" />
    <path d="M11 9H13V13H11V9Z" />
    <path d="M15 6H17V13H15V6Z" />
  </svg>
);

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden max-w-4xl mx-auto my-10">
      {/* Background Icons - will add animation later */}
      <motion.div
        className="absolute -left-8 -bottom-8 opacity-20"
        // Animation props for IconBook
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <IconBook className="w-32 h-32 md:w-40 md:h-40 text-bg-icon transform -rotate-12" />
      </motion.div>

      <motion.div
        className="absolute -right-5 -top-5 opacity-20"
        // Animation props for IconComputer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <IconComputer className="w-28 h-28 md:w-36 md:h-36 text-bg-icon transform rotate-6" />
      </motion.div>

      <motion.div
        className="absolute -right-10 bottom-0 opacity-20"
        // Animation props for IconBeaker
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      >
        <IconBeaker className="w-24 h-24 md:w-32 md:h-32 text-bg-icon transform rotate-12" />
      </motion.div>

      <motion.div
        className="absolute left-1/4 -top-10 opacity-15"
        // Animation props for IconMonitorChart (example)
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
      >
        <IconMonitorChart className="w-20 h-20 text-purple-300" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center" dir="rtl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {description}
        </motion.p>
        <motion.button
          className="bg-white text-primary font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-lg"
          onClick={onButtonClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }} // backOut gives a nice little pop
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};
