import { GoogleLogin } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  useLoginMutation,
  useRegisterByGoogleMutation,
} from "../../../app/features/User/userApi";
import { encryptToken } from "../../../Cookies/CryptoServices/crypto";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "react-feather";

export default function Login() {
  const { t } = useTranslation("translation");
  const [login, { isLoading }] = useLoginMutation();
  const [registerByGoogle] = useRegisterByGoogleMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const emailEntry = formData.get("email") as string;
    const passwordEntry = formData.get("password") as string;

    if (typeof emailEntry !== "string" || typeof passwordEntry !== "string") {
      toast.error(t("message.login_message.error"));
      return;
    }
    const email = emailEntry;
    const password = passwordEntry;
    const toastId = toast.loading(t("message.login_message.loading"));
    try {
      const result = await login({ email, password }).unwrap();

      if (result.authorization) {
        toast.success(t("message.login_message.success"), { id: toastId });
        encryptToken(result.authorization.token);
        setTimeout(() => {
          navigate(
            location.state?.from ? location.state.from.state.slug : "/",
            {
              state: { id: location.state?.from.state.id },
            }
          );
        }, 500);
      } else {
        toast.error(result.msg || t("message.login_message.error_register"), {
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
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Toaster
        toastOptions={{
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            fontSize: "14px",
          },
        }}
      />
      <title>
        {t("pages.login", { defaultValue: "H-Platform - تسجيل الدخول" })}
      </title>
      <meta property="og:title" content="H-Platform - تسجيل الدخول" />
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-xl  sm:text-2xl font-semibold text-text">
            {t("auth.Login_account.Login_title")}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-2">
            {t("auth.Login_account.create_text")}
          </p>
        </div>

        <div className="w-full flex items-center justify-center rounded-md py-2 text-sm sm:text-base font-medium text-neutral-700 transition">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              const credential = credentialResponse.credential;

              if (!credential) return;
              const toastId = toast.loading(t("message.login_message.loading"));
              const decoded = jwtDecode(credential) as {
                email: string;
                name: string;
                phone?: string;
                picture?: string;
                sub: string;
              };

              try {
                const result = await registerByGoogle({
                  email: decoded?.email,
                  name: decoded?.name,
                  sub: decoded?.sub,
                  image: decoded?.picture,
                });

                if (result.data.status === true) {
                  toast.success(t("message.login_message.success"), {
                    id: toastId,
                  });
                  encryptToken(result.data.authorization.token);
                  setTimeout(() => {
                    navigate(
                      location.state?.from
                        ? location.state.from.state.slug
                        : "/",
                      {
                        state: { id: location.state?.from.state.id },
                      }
                    );
                  }, 500);
                } else {
                  toast.error(t("message.login_message.error_register"), {
                    id: toastId,
                  });
                }
              } catch (err) {
                const error = err as { data?: { msg?: string } };
                toast.error(error.data?.msg || "حدث خطأ أثناء التسجيل", {
                  id: toastId,
                });
              }
            }}
            onError={() => {
              toast.error(t("message.login_message.error_register"));
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-neutral-300" />
          <span className="text-sm sm:text-base text-neutral-400">Or</span>
          <hr className="flex-grow border-neutral-300" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm sm:text-base font-medium text-neutral-700 block mb-2">
              {t("auth.Login_account.email")}
            </label>
            <input
              name="email"
              type="email"
              className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="email@domain.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm sm:text-base font-medium text-neutral-700">
                {t("auth.Login_account.Password")}
              </label>
              <Link
                to="/auth/forget-password"
                className="text-sm sm:text-base text-primary hover:underline"
              >
                {t("auth.Login_account.forget")}
              </Link>
            </div>
            <input
              name="password"
              type="password"
              className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Password"
            />
          </div>

          <button
            title="login btn"
            disabled={isLoading}
            type="submit"
            className={`w-full text-sm sm:text-base  text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition ${
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
              <>{t("auth.Login_account.Login")}</>
            )}
          </button>
        </form>

        <p className="text-sm sm:text-base text-center text-neutral-600">
          {t("auth.Login_account.noAccount")}
          <Link
            to="/auth/get-started"
            className="text-primary mx-1  hover:underline"
          >
            {t("auth.Login_account.Register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
