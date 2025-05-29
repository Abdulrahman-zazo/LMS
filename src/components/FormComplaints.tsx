import { Button } from "antd";
import { useState } from "react";

const FormComplaints = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    // ✅ هنا تقدر تضيف أي منطق معالجة مثل إرسال البيانات للسيرفر أو عرض رسالة
    console.log("Form submitted:", formData);
    alert("شكرًا لملاحظتك! تم إرسال النموذج بنجاح.");
  };
  return (
    <section
      className="bg-white sm:rounded-4xl sm:shadow-md py-12 px-6 sm:px-4 sm:py-0  "
      dir="rtl"
    >
      <div className="sm:py-6 lg:py-12 px-4 sm:mx-auto w-full">
        <h2 className="mb-4 text-xl tracking-tight font-extrabold text-center text-text">
          الشكاوى والمقترحات
        </h2>
        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-paragraph sm:text-xs">
          نحن نأخذ ملاحظاتكم على محمل الجد. فريقنا المتخصص في التعامل مع الشكاوى
          سيقوم بمراجعة طلبك والرد عليك خلال 48 ساعة.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-xs font-medium text-paragraph"
            >
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border border-gray-100 text-paragraph text-xs rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xs font-medium text-paragraph"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-gray-100 text-paragraph text-xs rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-paragraph"
            >
              رقم الهاتف
            </label>
            <input
              type="text"
              id="number"
              value={formData.number}
              onChange={handleChange}
              className="bg-white border border-gray-100 text-paragraph text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-paragraph"
            >
              الشكوى أو الاقتراح
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="bg-white border border-gray-100 text-paragraph text-sm rounded-lg block w-full p-2.5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary w-full mt-4 py-4 sm:py-6 px-2 sm:px-6 text-xs sm:text-sm font-medium text-center text-white rounded-lg hover:bg-primary/80 cursor-pointer"
          >
            أرسل ملاحظتك الآن وساهم في تحسين تجربتنا التعليمية
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormComplaints;
