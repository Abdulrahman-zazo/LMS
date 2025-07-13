import { Navigate, Outlet, useLocation } from "react-router-dom";
import { cookieService } from "../Cookies/CookiesServices";

export const ProtectedRoute = () => {
  const token = cookieService.get("auth_token");
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};
