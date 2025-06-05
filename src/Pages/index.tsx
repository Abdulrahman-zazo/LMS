import { Outlet } from "react-router-dom";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SettingsModal from "../components/settings";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/store";
import { closeModal } from "../app/features/settings/settingsModalSlice";

const Landing = () => {
  const { isOpen, image } = useAppSelector((state) => state.settingsModal);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <SettingsModal
        isOpen={isOpen}
        ImageUser={image}
        onClose={() => dispatch(closeModal())}
      />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;
