import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  useForgetPasswordMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
} from "../../../app/features/User/userApi";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "react-feather";
import { useState } from "react";
import { encryptToken } from "../../../Cookies/CryptoServices/crypto";

export default function Registration() {
  const { t } = useTranslation("translation");
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading }] = useRegisterMutation();
  const [forgetPassword, { isLoading: isLoadingResend }] =
    useForgetPasswordMutation();
  const [VerifyEmail, { isLoading: isLoadingVerifyEmail }] =
    useVerifyEmailMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const emailEntry = formData.get("email") as string;
    const passwordEntry = formData.get("password") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    if (typeof emailEntry !== "string" || typeof passwordEntry !== "string") {
      toast.error("يرجى إدخال البريد وكلمة المرور بشكل صحيح");
      return;
    }

    const email = emailEntry;
    const password = passwordEntry;
    setEmail(email);
    setPassword(password);
    const toastId = toast.loading("جاري تسجيل الدخول...");

    try {
      const result = await register({ email, password, name, phone }).unwrap();

      if (!result.data && result.status === false) {
        return toast.error(`${result.msg}`, {
          id: toastId,
        });
      }
      toast.success(
        ` تم إرسال رمز التحقق لبريدك الإلكتروني يرجى إدخاله في الحقل أدناه `,
        { id: toastId }
      );
      setStep(2);
    } catch (err) {
      const error = err as { data?: { msg?: string } };

      toast.error(error.data?.msg || "حدث خطأ أثناء التسجيل", {
        id: toastId,
      });
    }
  };
  const handleVerifyEmail = async () => {
    const toastId = toast.loading("جاري التحقق من الرمز المدخل...");

    try {
      const result = await VerifyEmail({ email, password, code }).unwrap();
      if (result.authorization) {
        toast.success("تم التسجيل بنجاح!", { id: toastId });
        encryptToken(result.authorization.token);
        // setTimeout(() => {
        //   navigate(location.state?.from?.pathname || "/");
        // }, 2000);
      } else {
        toast.error(result.msg || "فشل تسجيل الدخول", {
          id: toastId,
        });
      }
    } catch (err) {
      const error = err as { msg?: string };
      toast.error(error?.msg || "حدث خطأ أثناء التسجيل", {
        id: toastId,
      });
    }
  };
  const handleResendCode = async () => {
    const toastId = toast.loading("جاري إرسال الرمز مرة أخرى...");

    try {
      const result = await forgetPassword(email);
      console.log(result);
      toast.success("تم إرسال الرمز مرة أخرى", { id: toastId });
    } catch (err) {
      const error = err as { data?: { msg?: string } };

      toast.error(error.data?.msg || "حدث خطأ أثناء التسجيل", {
        id: toastId,
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Toaster
        toastOptions={{
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            fontSize: 14,
          },
        }}
      />

      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {t("auth.create_account.Create_title")}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {t("auth.create_account.create_text")}
          </p>
        </div>

        {step === 1 && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                {t("auth.create_account.Name")}
              </label>
              <input
                name="name"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                {t("auth.create_account.email")}
              </label>
              <input
                name="email"
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="email@domain.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                {t("auth.create_account.phone")}
              </label>

              <div dir="ltr">
                <PhoneInput
                  country={"sy"} // Syria by default
                  inputClass="!w-full !text-sm"
                  containerClass="!w-full"
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                {t("auth.create_account.Password")}
              </label>
              <input
                name="password"
                type="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="********"
              />
            </div>
            <button
              title="login btn"
              disabled={isLoading}
              type="submit"
              className={`w-full text-sm  text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition ${
                isLoading
                  ? "bg-primary/50 cursor-not-allowed"
                  : "bg-primary cursor-pointer hover:bg-primary/80"
              }`}
            >
              {isLoading ? (
                <span className=" flex justify-center ">
                  <Loader
                    size={20}
                    className="animate-spin  animate-duration-[1500ms]"
                  />
                </span>
              ) : (
                <>{t("auth.Login_account.Register")}</>
              )}
            </button>
          </form>
        )}
        {step === 2 && (
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {t("auth.forget_password.Verification")}
            </label>

            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter the 6-digit code"
            />

            <button
              title="login btn"
              disabled={isLoadingVerifyEmail}
              type="submit"
              className={`w-full text-sm text-white py-2 mt-4 rounded-md font-semibold transition ${
                isLoadingVerifyEmail
                  ? "bg-primary/50 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/80 cursor-pointer"
              }`}
              onClick={handleVerifyEmail}
            >
              {isLoadingVerifyEmail ? (
                <span className="flex justify-center">
                  <Loader
                    size={20}
                    className="animate-spin animate-duration-[1500ms]"
                  />
                </span>
              ) : (
                <>{t("auth.Login_account.Register")}</>
              )}
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
              <button
                type="button"
                onClick={handleResendCode}
                className="text-primary hover:underline font-medium"
                disabled={isLoadingResend}
              >
                {isLoadingResend
                  ? t("auth.forget_password.resending")
                  : t("auth.forget_password.resend")}
              </button>
            </div>
          </div>
        )}
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
