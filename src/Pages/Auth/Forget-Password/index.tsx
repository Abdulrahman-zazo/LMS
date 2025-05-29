// import { Link } from "react-router-dom";

// import { Button, Form, Input } from "antd";

// import Logo from "../../../components/Ui/Logo";

// interface IProps {
//   email: string;
// }

// const ForgetPassword = () => {
//   const date = new Date();
//   const initialValues: IProps = {
//     email: "",
//   };

//   const onFinish = (values: IProps) => {
//     console.log("Received values of form: ", values);
//   };
//   return (
//     <div className="flex justify-between items-center  max-[800px]:justify-center m-auto h-[100vh]">
//       <div className="w-1/2 flex flex-col  justify-center  my-4 h-full bg-background max-[800px]:hidden animate-fade-down inset-shadow-sm">
//         <div className="  mx-8 my-4 ">
//           <img src={forgetpage} alt="Login" className="w-[90%] 2xl:w-[100%]" />

//           <p className="  text-gray-500 text-[14px] my-2 w-[70%]  ">
//             Enter the email address associated with your account and we'll send
//             you a secure link to reset your password.
//           </p>
//           <span className="text-neutral-400 font-light text-[12px]">
//             © {date.getFullYear()} Signature Company. All Rights Reserved.
//           </span>
//         </div>
//       </div>

//       {/* form side */}
//       <div className="w-2/3  max-[800px]:w-full flex flex-col justify-center items-center  ">
//         <div className="w-2/3  ">
//           <div className="max-[800px]:text-center  ">
//             <div className="mb-8  max-[800px]:hidden ">
//               <Logo type="h" width={150} />
//             </div>
//             <div className=" flex justify-center  min-[800px]:hidden ">
//               <Logo type="v" width={150} />
//             </div>
//             <h1 className="text-text font-bold text-lg md:text-xl xl:text-3xl mb-2 ">
//               Reset Password
//             </h1>
//             <p className=" text-gray-600 text-sm md:text-base xl:text-lg mb-4 ">
//               Enter your email account to rest your password
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
//               <Input
//                 // prefix={<Mail />}
//                 placeholder="Enter your email address "
//               />
//             </Form.Item>

//             <Form.Item>
//               <Button block type="primary" htmlType="submit">
//                 Send
//               </Button>
//             </Form.Item>
//           </Form>
//           <div className="text-gray-600">
//             Already remember your password?
//             <Link
//               to="/auth/login"
//               className="text-primary hover:text-primary-500 mx-2"
//             >
//               Login Here
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    if (step === 1 && email) {
      // send email to backend (e.g., send verification code)
      setStep(2);
    } else if (step === 2 && code) {
      // verify the code
      setStep(3);
    } else if (step === 3 && password && password === confirmPassword) {
      // send new password to backend
      alert("تم تغيير كلمة السر بنجاح! 🎉");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
          <p className="text-sm text-gray-500 mt-2">
            {step === 1 && "Enter your email to reset password."}
            {step === 2 && "Enter the code sent to your email."}
            {step === 3 && "Enter your new password below."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="email@domain.com"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Verification Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter the 6-digit code"
              />
            </div>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="********"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="********"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            onClick={handleNext}
            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition"
          >
            {step === 3 ? "Confirm Reset" : "Next"}
          </button>
        </form>

        {step < 3 && (
          <p className="text-sm text-center text-gray-600">
            Remembered your password?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-semibold hover:underline"
            >
              Login here.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
