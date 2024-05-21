import { configureStore } from "@reduxjs/toolkit";
import SiteDataReducer from "../actions";

export const store = configureStore({
  reducer: {
    SiteData: SiteDataReducer,
  },
});
