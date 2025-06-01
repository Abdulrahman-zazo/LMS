import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { configDesign } from "./Antd/Config";
import { ConfigProvider } from "antd";
import ar_EG from "antd/locale/ar_EG";
import en_US from "antd/locale/en_US";
import { useAppSelector } from "./app/store";
import OfflineAlert from "./components/Ui/Offline";

function App() {
  // const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language);

  return (
    <div dir="rtl">
      <ConfigProvider
        theme={configDesign}
        locale={language === "ar" ? ar_EG : en_US}
      >
        <OfflineAlert />
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
