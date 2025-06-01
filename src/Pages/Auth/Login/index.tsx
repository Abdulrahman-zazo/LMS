// import { Link, useNavigate } from "react-router-dom";

// import loginImage from "../../../assets/icon-site.png";
// import { Button, Form, Input, message, Spin } from "antd";

// import Logo from "../../../components/Ui/Logo";
// // import { useLoginMutation } from "../../../app/features/User/userApi";
// // import { encryptToken } from "../../../Cookies/CryptoServices/crypto";
// // import { showMessage } from "../../../components/Message/Message";
// import { LoadingOutlined } from "@ant-design/icons";
// interface Iuser {
//   email: string;
//   password: string;
// }

// export const LoginPage = () => {
//   const [messageApi, contextHolder] = message.useMessage();
//   const date = new Date();

//   const initialValues: Iuser = {
//     email: "",
//     password: "",
//   };

//   const navigate = useNavigate();
//   // const [login, { data, isLoading }] = useLoginMutation();

//   const onFinish = async (values: Iuser) => {
//     navigate("/courses");

//     // try {
//     //   setTimeout(
//     //     () =>
//     //       showMessage({
//     //         messageApi,
//     //         type: "loading",
//     //         content: "جاري تسجيل الدخول...",
//     //         duration: 4,
//     //       }),
//     //     1000
//     //   );

//     //   const result = await login(values);
//     //   if (result.data.status === true) {
//     //     showMessage({
//     //       messageApi,
//     //       type: "success",
//     //       content: "تم التسجيل بنجاح!",
//     //     });
//     //     encryptToken(data.user.token);

//     //     setTimeout(() => navigate("/dashboard"), 1000);
//     //   } else {
//     //     showMessage({
//     //       messageApi,
//     //       type: "error",
//     //       content: result.data?.msg,
//     //     });
//     //   }
//     // } catch (err) {
//     //   const error = err as { data?: { msg?: string } };
//     //   showMessage({
//     //     messageApi,
//     //     type: "error",
//     //     content: error.data?.msg || "حدث خطأ أثناء التسجيل",
//     //   });
//     // }
//   };

//   return (
//     <div className="flex justify-between items-center  max-[800px]:justify-center m-auto h-[100vh]">
//       {contextHolder}
//       <div className="w-1/2 flex flex-col  justify-center   my-4 h-full bg-background max-[800px]:hidden animate-fade-down inset-shadow-sm">
//         <div className="  mx-8 my-4 ">
//           <img src={loginImage} alt="Login" className="w-[90%] 2xl:w-[100%]" />
//           <div>
//             <h1 className="  my-2 text-text font-bold text-lg md:text-xl xl:text-3xl">
//               Find your sweet home
//             </h1>
//             <p className="  text-gray-600 text-sm md:text-base xl:text-lg">
//               Schedule visit in just a few clicks visits in just a few clicks
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* form side */}
//       <div className="  w-2/3 h-full  max-[800px]:w-full flex flex-col justify-center items-center   ">
//         <div className="w-2/3  ">
//           <div className="max-[800px]:text-center  ">
//             <div className="mb-8  max-[800px]:hidden ">
//               <Logo type="h" width={150} />
//             </div>
//             <div className=" flex justify-center  min-[800px]:hidden ">
//               <Logo type="v" width={150} />
//             </div>
//             <h1 className="text-text font-bold text-lg md:text-xl xl:text-3xl mb-2 ">
//               Welcome Back!
//             </h1>
//             <p className="text-gray-600 text-sm md:text-base xl:text-lg mb-4 ">
//               Login using your account
//             </p>
//           </div>
//           <Form
//             size="middle"
//             layout="vertical"
//             name="login"
//             className="w-full"
//             initialValues={initialValues}
//             onFinish={onFinish}
//           >
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 { required: true, message: "Please input your Username!" },
//               ]}
//             >
//               <Input placeholder="Enter your email address " />
//             </Form.Item>
//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your Password!" },
//               ]}
//             >
//               <Input.Password
//                 type="password"
//                 placeholder="Enter your password"
//               />
//             </Form.Item>
//             <Form.Item>
//               <Link to="/auth/forget-password">Forgot password</Link>
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 block
//                 type="primary"
//                 htmlType="submit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <Spin size="default" indicator={<LoadingOutlined spin />} />
//                 ) : (
//                   "Login"
//                 )}
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//         <span className="text-neutral-400 font-light text-[12px]">
//           © {date.getFullYear()} Signature Company. All Rights Reserved.
//         </span>
//       </div>
//     </div>
//   );
// };

// src/pages/Login.tsx
import { GoogleLogin } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export default function Login() {
  const { t } = useTranslation("translation");

  const location = useLocation();
  console.log(location);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white px-4"
      dir="rtl"
    >
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {t("auth.Login_account.Login_title")}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {t("auth.Login_account.create_text")}
          </p>
        </div>

        <div className="w-full flex items-center justify-center rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              console.log(jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
              console.log("login falid");
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {t("auth.Login_account.email")}
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="email@domain.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                {t("auth.Login_account.Password")}
              </label>
              <Link
                to="/auth/forget-password"
                className="text-sm text-primary hover:underline"
              >
                {t("auth.Login_account.forget")}
              </Link>
            </div>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition"
          >
            {t("auth.Login_account.Login")}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          {t("auth.Login_account.noAccount")}
          <Link
            to="/auth/get-started"
            className="text-primary mx-1 font-semibold hover:underline"
          >
            {t("auth.Login_account.Register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
