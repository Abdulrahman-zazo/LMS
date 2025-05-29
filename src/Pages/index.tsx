import { Outlet } from "react-router-dom";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Landing = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;
