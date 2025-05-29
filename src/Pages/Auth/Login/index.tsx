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
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500 mt-2">
            Enter your credential to access your account.
          </p>
        </div>

        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email address
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
                Password
              </label>
              <Link
                to="/auth/forget-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
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
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/auth/get-started"
            className="text-primary font-semibold hover:underline"
          >
            Register here.
          </Link>
        </p>
      </div>
    </div>
  );
}
