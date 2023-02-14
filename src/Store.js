import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import UserReducer from "./reducers/UserReducer";
import ModalReducer from "./reducers/ModalReducer";
import PropertyReducer from "./reducers/PropertyReducer";
import FilterReducer from "./reducers/FilterReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import MobileReducer from "./reducers/MobileReducer";
const persistConfig = {
  key: "storage",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  userReducer: UserReducer,
  modalReducer: ModalReducer,
  propertyReducer: PropertyReducer,
  filterReducer: FilterReducer,
  loadingReducer: LoadingReducer,
  mobileReducer: MobileReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),

  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
