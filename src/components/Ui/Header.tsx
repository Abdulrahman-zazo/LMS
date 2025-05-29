import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PanelTopClose, PanelTopOpen } from "lucide-react";
import Logo from "./Logo";

import { Button } from "antd";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  const Navigate = useNavigate();
  return (
    <>
      <div ref={ref} className="h-[1px]" />
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out  px-4 sm:px-8 py-4
        ${!inView ? "bg-white shadow-sm  rounded-b-xl" : "bg-white  "}
        `}
        dir="rtl"
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-0 sm:px-8">
          {/* Logo */}
          <Link to="/" className={"mx-4"}>
            <Logo type="h" props={{ className: "w-32 h-auto" }} />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden mx-6 md:hidden lg:flex items-center gap-6 font-medium text-paragraph text-sm `}
          >
            <NavLink to="/" className="hover:text-primary  active:text-primary">
              الصفحة الرئيسية
            </NavLink>
            <NavLink
              to="/about-us"
              className="hover:text-primary  active:text-primary"
            >
              من نحن
            </NavLink>
            <NavLink
              to="/courses"
              className="hover:text-primary  active:text-primary"
            >
              الدورات
            </NavLink>
            <NavLink
              to="/curricula"
              className="hover:text-primary  active:text-primary"
            >
              المناهج
            </NavLink>
            <NavLink
              to="/#faq"
              className="hover:text-primary  active:text-primary"
            >
              الأسئلة الشائعة
            </NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:hidden lg:flex gap-3">
            <Button
              type="default"
              className={`text-sm text-primary `}
              onClick={() => Navigate("/auth/login")}
            >
              تسجيل الدخول
            </Button>
            <Button
              type="primary"
              className="bg-primary text-white px-4 py-1.5 rounded text-sm hover:bg-primary-dark"
              onClick={() => Navigate("/auth/get-started")}
            >
              إنشاء حساب
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden text-2xl text-gray-700">
            {menuOpen ? (
              <Button type="text" onClick={() => setMenuOpen(!menuOpen)}>
                <PanelTopClose size={16} />
              </Button>
            ) : (
              <Button type="text" onClick={() => setMenuOpen(!menuOpen)}>
                <PanelTopOpen size={16} />
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-md shadow px-4 py-3 space-y-2">
            <nav className="flex flex-col text-sm font-medium text-gray-700 space-y-2 ">
              <NavLink
                to="/"
                className="hover:text-primary  active:text-primary"
              >
                الصفحة الرئيسية
              </NavLink>
              <NavLink
                to="/about-us"
                className="hover:text-primary  active:text-primary"
              >
                من نحن
              </NavLink>
              <NavLink
                to="/courses"
                className="hover:text-primary  active:text-primary"
              >
                الدورات
              </NavLink>
              <NavLink
                to="/curricula"
                className="hover:text-primary  active:text-primary"
              >
                المناهج
              </NavLink>
              <NavLink
                to="/#faq"
                className="hover:text-primary  active:text-primary"
              >
                الأسئلة الشائعة
              </NavLink>
            </nav>
            <div className="flex flex-col gap-2 pt-4 ">
              <Button
                className="text-sm text-primary "
                type="default"
                onClick={() => Navigate("/auth/login")}
              >
                تسجيل الدخول
              </Button>
              <Button
                type="primary"
                onClick={() => Navigate("/auth/get-started")}
                className="bg-primary text-white px-4 py-1.5 rounded text-sm hover:bg-primary-dark"
              >
                إنشاء حساب
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
