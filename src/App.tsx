import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

// import { useAppSelector } from "./app/store";
import OfflineAlert from "./components/Ui/Offline";
import { useAppSelector } from "./app/store";

function App() {
  // const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.language);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <title>H-Platform</title>
      <OfflineAlert />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
