import { Navigate, Outlet } from "react-router-dom";
import { cookieService } from "../Cookies/CookiesServices";
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";
import ScrollToTop from "./ScrollToTop";
export const AuthRoute = () => {
  const token = cookieService.get("auth_token");

  return !token ? (
    <Navigate to="/auth/login" replace />
  ) : (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
