import { createBrowserRouter, Navigate } from "react-router-dom";

import { ProtectedRoute } from "../components/ProtectedRoute";
import HomePage from "../Pages/Home";
import Dashboard from "../Pages";
import { LoginPage } from "../Pages/Auth/Login";
import { AuthRoute } from "../components/AuthRoute";
import ForgetPassword from "../Pages/Auth/Forget-Password";
import ComplaintsPage from "../Pages/Complaints";
import TermsPage from "../Pages/Terms";
import CoursessPage from "../Pages/Courses";
import AboutPage from "../Pages/About";
import PrivacyPolicyPage from "../Pages/PrivacyPolicy";
import CurriculaPage from "../Pages/Curricula";
import CourseDetailsPage from "../Pages/Courses/CourseDetails";
import Registration from "../Pages/Auth/Registration";

export const router = createBrowserRouter([
  // 1- user can veiw this page
  {
    element: <AuthRoute />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "/h-platform-term", element: <TermsPage /> },
      { path: "/h-platform-privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/courses", element: <CoursessPage /> },
      { path: "/curricula", element: <CurriculaPage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/auth/login", element: <LoginPage /> },
      { path: "/auth/forget-password", element: <ForgetPassword /> },
      { path: "/auth/get-started", element: <Registration /> },
    ],
  },

  // 2- user need token from login our rigester page to view this page ()
  {
    element: <ProtectedRoute />,
    path: "/protected",
    children: [
      {
        element: <Dashboard />,
        children: [
          { path: "courses/:id", element: <CourseDetailsPage /> },
          { path: "complaints", element: <ComplaintsPage /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
