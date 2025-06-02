import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Registration() {
  const { t } = useTranslation("translation");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white px-4"
      dir="rtl"
    >
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {t("auth.create_account.Create_title")}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {t("auth.create_account.create_text")}
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {t("auth.create_account.Name")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {t("auth.create_account.Password")}
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="email@domain.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {t("auth.create_account.phone")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+963"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {t("auth.create_account.Password")}
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="********"
            />
          </div>

          <button
            title="Register btn"
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition"
          >
            {t("auth.create_account.Register")}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          {t("auth.create_account.Already")}
          <Link
            to="/auth/login"
            className="text-primary mx-1 font-semibold hover:underline"
          >
            {t("auth.create_account.Login")}
          </Link>
        </p>
      </div>
    </div>
  );
}
