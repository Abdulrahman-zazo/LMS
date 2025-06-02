import { useState } from "react";
import { useTranslation } from "react-i18next";

const FormComplaints = () => {
  const { t } = useTranslation("translation");

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
    e.preventDefault();

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
          {t("complaints_system.title")}
        </h2>
        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-paragraph sm:text-xs">
          {t("complaints_system.description")}
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center "
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-xs font-medium text-paragraph"
            >
              {t("complaints_system.label1")}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border border-neutral-200 text-paragraph text-xs rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-xs font-medium text-paragraph"
            >
              {t("complaints_system.label2")}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-neutral-200 text-paragraph text-xs rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-paragraph"
            >
              {t("complaints_system.label3")}
            </label>
            <input
              type="text"
              id="number"
              value={formData.number}
              onChange={handleChange}
              className="bg-white border border-neutral-200 text-paragraph text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="sm:col-span-2 w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-paragraph"
            >
              {t("complaints_system.label4")}
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="bg-white border border-neutral-200 text-paragraph text-sm rounded-lg block w-full p-2.5"
              required
            ></textarea>
          </div>

          <button
            title="complaints_system"
            type="submit"
            className="bg-primary w-full sm:w-1/2 mt-4 py-4 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium text-center text-white rounded-lg hover:bg-primary/80 cursor-pointer"
          >
            {t("complaints_system.label5")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormComplaints;
