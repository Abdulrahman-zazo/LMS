import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { X, Menu, LogOut } from "react-feather";
import Logo from "./Logo";

import { useTranslation } from "react-i18next";
import UserMenu from "../userMenu";
import { cookieService } from "../../Cookies/CookiesServices";
import { useGetuserInformationQuery } from "../../app/features/User/userApi";
import { LogoutHandler } from "../LogoutHandler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });
  const { t, ready } = useTranslation("translation");
  const token = cookieService.get("auth_token");
  const shouldFetch = Boolean(token);

  const { data, isLoading } = useGetuserInformationQuery(token as string, {
    skip: !shouldFetch,
  });

  const Navigate = useNavigate();
  return (
    <>
      <div ref={ref} className="h-[1px]" />
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out  px-4 sm:px-8 py-4
        ${!inView ? "bg-white shadow-sm  rounded-b-xl" : "bg-white  "}
        `}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-0 sm:px-8">
          {/* Logo */}
          <Link to="/" className={"mx-4"}>
            <Logo type="h" className="w-28 lg:w-32 h-full" />
          </Link>

          {/* Desktop Nav */}
          {ready ? (
            <nav
              className={`hidden mx-2 md:hidden lg:flex items-center gap-2 lg:gap-6 font-medium text-paragraph md:text-xs  lg:text-sm `}
            >
              <NavLink
                to="/"
                className="hover:text-primary  active:text-primary"
              >
                {t("Header.Home")}
              </NavLink>
              <NavLink
                to="/about-us"
                className="hover:text-primary  active:text-primary"
              >
                {t("Header.About")}
              </NavLink>
              <NavLink
                to="/courses"
                className="hover:text-primary  active:text-primary"
              >
                {t("Header.Courses")}
              </NavLink>
              <NavLink
                to="/curricula"
                className="hover:text-primary  active:text-primary"
              >
                {t("Header.Curricula")}
              </NavLink>
              <NavLink
                to="/offers"
                className="hover:text-primary  active:text-primary"
              >
                {t("Header.offer")}
              </NavLink>
              <NavLink
                to="/#faq"
                className="hover:text-primary  active:text-primary"
              >
                {t("Header.FAQ")}
              </NavLink>
            </nav>
          ) : (
            <nav
              className={`hidden mx-6 md:hidden lg:flex items-center gap-6 font-medium text-paragraph text-sm `}
            >
              <div className="h-4 w-12 rounded-md bg-neutral-200 animate-pulse" />

              <div className="h-4 w-12 rounded-md bg-neutral-200 animate-pulse" />

              <div className="h-4 w-12 rounded-md bg-neutral-200 animate-pulse" />

              <div className="h-4 w-12 rounded-md bg-neutral-200 animate-pulse" />

              <div className="h-4 w-12 rounded-md bg-neutral-200 animate-pulse" />

              <div className="h-4 w-12 rounded-md bg-neutral-200 animate-pulse" />
            </nav>
          )}

          {/* Auth buttons */}
          {!token ? (
            <div className="hidden md:hidden lg:flex gap-3">
              <button
                title="Login"
                className="text-xs lg:text-sm text-primary hover:text-primary/80 cursor-pointer "
                onClick={() => Navigate("/auth/login")}
              >
                {t("Header.login")}
              </button>
              <button
                title="Register"
                className="bg-primary text-white px-4 py-1.5 rounded text-xs lg:text-sm  hover:bg-primary/80  cursor-pointer"
                onClick={() => Navigate("/auth/get-started")}
              >
                {t("Header.Register")}
              </button>
            </div>
          ) : isLoading ? (
            <div className="hidden lg:inline">
              <div className="flex items-center gap-4 ">
                <div className="space-y-1 flex flex-col items-end">
                  <div className="h-3 w-20  bg-neutral-200 animate-pulse" />
                  <div className="h-2 w-30 bg-neutral-200 animate-pulse" />
                </div>
                <div className="h-8 w-8 rounded-full  bg-neutral-200 animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="hidden lg:inline">
              <UserMenu
                name={data?.user.name}
                email={data?.user.email}
                avatar={data?.user.image}
              />
            </div>
          )}

          {/* Mobile Hamburger button */}
          <div className="lg:hidden text-2xl text-gray-700 flex items-center gap-2 ">
            {isLoading ? (
              <div className="">
                <div className="flex items-center gap-4 ">
                  <div className="space-y-1 flex flex-col items-end">
                    <div className="h-3 w-20  bg-neutral-200 animate-pulse" />
                    <div className="h-2 w-30 bg-neutral-200 animate-pulse" />
                  </div>
                  <div className="h-8 w-8 rounded-full  bg-neutral-200 animate-pulse" />
                </div>
              </div>
            ) : (
              <div>
                {token && (
                  <div className="flex justify-center items-center">
                    <UserMenu
                      name={data?.user.name}
                      email={data?.user.email}
                      avatar={data?.user.image}
                    />
                  </div>
                )}
              </div>
            )}
            {menuOpen ? (
              <button
                title="open header menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2  cursor-pointer"
              >
                <X size={20} />
              </button>
            ) : (
              <button
                title="close header menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 cursor-pointer"
              >
                <Menu size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-md shadow px-4 py-3 space-y-2">
            {ready ? (
              <nav className="flex flex-col text-xs font-medium text-gray-700 space-y-2 ">
                <NavLink
                  to="/"
                  className="hover:text-primary  active:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Header.Home")}
                </NavLink>
                <NavLink
                  to="/about-us"
                  className="hover:text-primary  active:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Header.About")}
                </NavLink>
                <NavLink
                  to="/courses"
                  className="hover:text-primary  active:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Header.Courses")}
                </NavLink>
                <NavLink
                  to="/curricula"
                  className="hover:text-primary  active:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Header.Curricula")}
                </NavLink>
                <NavLink
                  to="/offers"
                  className="hover:text-primary  active:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Header.offer")}
                </NavLink>
                <NavLink
                  to="/#faq"
                  className="hover:text-primary  active:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Header.FAQ")}
                </NavLink>
                <div className="flex justify-center items-center rounded-lg  my-2 py-2 bg-red-100/40 w-full">
                  <button
                    onClick={() => LogoutHandler()}
                    className="px-4 w-full py-2 flex items-center justify-center mx-auto  text-xs  sm:text-sm  cursor-pointer text-red-600"
                  >
                    <span>
                      <LogOut size={16} className="mx-2" />
                    </span>
                    <span> {t("userMenu.logout")}</span>
                  </button>
                </div>
              </nav>
            ) : (
              <nav className="flex flex-col text-sm font-medium text-gray-700 space-y-2 ">
                <div className="h-4 bg-neutral-200 animate-pulse" />

                <div className="h-4 bg-neutral-200 animate-pulse" />

                <div className="h-4 bg-neutral-200 animate-pulse" />

                <div className="h-4 bg-neutral-200 animate-pulse" />

                <div className="h-4 bg-neutral-200 animate-pulse" />

                <div className="h-4 bg-neutral-200 animate-pulse" />
              </nav>
            )}
            {!token && (
              <div className="flex flex-col gap-2 pt-4 ">
                <button
                  title="Login Button"
                  className="text-xs text-primary  hover:text-primary/80  cursor-pointer "
                  onClick={() => {
                    Navigate("/auth/login");
                    setMenuOpen(!menuOpen);
                  }}
                >
                  {t("Header.login")}
                </button>
                <button
                  title="Register Button"
                  onClick={() => {
                    Navigate("/auth/get-started");
                    setMenuOpen(!menuOpen);
                  }}
                  className="bg-primary text-white px-4 py-1.5 rounded text-xs  hover:bg-primary/80  cursor-pointer"
                >
                  {t("Header.Register")}
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
