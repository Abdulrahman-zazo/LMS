import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReduser from "./features/User/userSlice";
import langReducer from "./features/Language/LanguageSlice";
import settingsModalReducer from "./features/settings/settingsModalSlice";
import { useDispatch, useSelector } from "react-redux";

// استيراد الـ RTK Query APIs (كل واحدة فيها endpoints)
import { userApi } from "./features/User/userApi";
import { CoursesApi } from "./features/Courses/CoursesApi";
import { CurriculumsApi } from "./features/Curriculum/CurriculumApi";
import { CommentsApi } from "./features/Comments/CommentsApi";
import { OfferApi } from "./features/Offer/OfferApi";
import { ComplaintsApi } from "./features/Complaints/ComplaintsApi";

// استيراد أداة التخزين - هنا بنستخدم localStorage افتراضيًا
import storage from "redux-persist/lib/storage";

// استيراد الأدوات اللازمة للتخزين الدائم
import { persistReducer, persistStore } from "redux-persist";

// إعداد config لـ redux-persist
const persistConfig = {
  key: "root-h-platform",
  storage, // طريقة التخزين (localStorage)
  whitelist: [],
};

// دمج كل الـ reducers العادية مع RTK Query reducers
const rootReducer = combineReducers({
  user: userReduser,
  language: langReducer,
  settingsModal: settingsModalReducer,
  [userApi.reducerPath]: userApi.reducer,
  [CoursesApi.reducerPath]: CoursesApi.reducer,
  [CurriculumsApi.reducerPath]: CurriculumsApi.reducer,
  [CommentsApi.reducerPath]: CommentsApi.reducer,
  [OfferApi.reducerPath]: OfferApi.reducer,
  [ComplaintsApi.reducerPath]: ComplaintsApi.reducer,
});

// تغليف الـ rootReducer بـ persistReducer لنفعّل التخزين الدائم
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // استخدمنا الـ persistedReducer بدل العادي
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // نوقف فحص الـ serializability لأنه في بعض الداتا مش قابلة للتسلسل
    }).concat(
      userApi.middleware,
      CoursesApi.middleware,
      CurriculumsApi.middleware,
      CommentsApi.middleware,
      OfferApi.middleware,
      ComplaintsApi.middleware
    ),
});

// إنشاء persistor يلي مسؤول عن تحميل/تخزين الحالة تلقائيًا
export const persistor = persistStore(store);

// أنواع مساعدات لاستخدام useSelector و useDispatch بشكل آمن مع TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
