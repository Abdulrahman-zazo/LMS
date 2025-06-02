import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

// import { useAppSelector } from "./app/store";
import OfflineAlert from "./components/Ui/Offline";

function App() {
  // const dispatch = useAppDispatch();
  // const language = useAppSelector((state) => state.language);

  return (
    <div dir="rtl">
      <OfflineAlert />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
