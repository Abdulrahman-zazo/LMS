import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

import OfflineAlert from "./components/Ui/Offline";
import { useAppSelector } from "./app/store";
import { ContactContext } from "./components/ContactContext";
import FloatingButton from "./components/Ui/FloatingButton";
import { useGetContactQuery } from "./app/features/Contacts/contactApi";

function App() {
  const { lang } = useAppSelector((state) => state.language);
  const { data } = useGetContactQuery();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <ContactContext.Provider value={data?.Contact[0] || {}}>
        <OfflineAlert />
        <RouterProvider router={router} />
        <FloatingButton lang={lang} />
      </ContactContext.Provider>
    </div>
  );
}

export default App;
