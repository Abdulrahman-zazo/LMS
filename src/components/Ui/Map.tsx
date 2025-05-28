import { motion } from "framer-motion";

import Imagepin1 from "../../assets/Icon/pin01.png";
import Imagepin2 from "../../assets/Icon/pin02.png";
import Imagepin3 from "../../assets/Icon/pin03.png";
import Imagepin4 from "../../assets/Icon/pin04.png";
import Imagepin5 from "../../assets/Icon/pin05.png";
import ImageMap from "../../assets/map.webp";
import Logo from "./Logo";

const HeroWorldMap = () => {
  return (
    <div className="bg-white max-[800px]:hidden  max-w-[1440px] mx-auto">
      {/* النص العلوي */}
      <div className="flex items-center pt-4 flex-col max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-3xl font-bold text-center text-text mb-4 " // ألوان وخطوط Tailwind
          dir="rtl" // لضمان اتجاه النص الصحيح للعربية
        >
          ابدأ رحلتك التعليمية اليوم
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl font-extrabold text-center mb-4 z-10"
          dir="rtl"
        >
          <span className="text-text">مع</span>{" "}
          <span className="text-primary">H-Platform</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-12 z-10"
          dir="rtl"
        >
          المستقبل بين يديك، تعلّم، تطوّر، وحقق أحلامك.
        </motion.p>
      </div>
      <div className="relative flex flex-col items-center justify-center p-20 mb-12 overflow-hidden">
        {/* الخلفية - خريطة العالم */}

        <img
          src={ImageMap} // استبدل بالمسار الصحيح لصورة الخريطة
          alt="World Map"
          className="absolute  w-full  object-cover opacity-40 z-0" // تعديل الشفافية حسب الحاجة
        />

        {/* شعار H-Platform المركزي */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          className="relative top-10 rounded-xl shadow-2xl z-30" // تصميم البطاقة
        >
          {/* هنا يمكنك وضع شعار H كصورة أو SVG */}
          <Logo type="icon" width={150} />
        </motion.div>

        {/* مؤشرات الدول المتحركة */}
        {/* USA */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: "circOut" }}
          className="absolute top-[60%] left-[15%] md:top-[55%] md:left-[15%] z-20 flex items-center"
        >
          {/* <img src={USFlag} alt="USA Flag" className="w-6 h-4 mr-2" /> */}
          <img src={Imagepin4} alt="a" width={100} />
        </motion.div>

        {/* British */}
        <motion.div
          initial={{ opacity: 0, x: -80, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "circOut" }}
          className="absolute top-[40%] left-[25%] md:top-[35%] md:left-[30%] z-20 flex items-center"
        >
          {/* أيقونة علم بريطانيا */}
          <img src={Imagepin5} alt="a" width={100} />
        </motion.div>

        {/* Germany */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: "circOut" }}
          className="absolute top-[10%] left-[48%] md:top-[10%] md:left-[45%] transform -translate-x-1/2 z-20 flex items-center"
        >
          {/* أيقونة علم ألمانيا */}
          <img src={Imagepin1} alt="a" width={120} />
        </motion.div>

        {/* KSA */}
        <motion.div
          initial={{ opacity: 0, x: 80, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: "circOut" }}
          className="absolute top-[40%] right-[25%] md:top-[35%] md:right-[30%] z-20 flex items-center"
        >
          {/* أيقونة علم السعودية */}
          <img src={Imagepin3} alt="a" width={100} />
        </motion.div>

        {/* UEA (UAE) */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: "circOut" }}
          className="absolute top-[60%] right-[15%] md:top-[55%] md:right-[20%] z-20 flex items-center  "
        >
          {/* أيقونة علم الإمارات */}
          <img src={Imagepin2} alt="a" width={100} />
        </motion.div>

        {/* يمكنك إضافة تأثيرات حركة إضافية لمؤشرات الدول مثل حركة طفيفة مستمرة */}
        {/* مثال: animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} */}
      </div>
    </div>
  );
};

export default HeroWorldMap;
