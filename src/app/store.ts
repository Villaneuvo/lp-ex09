import { configureStore } from "@reduxjs/toolkit";
import { handleDataForm } from "../features/home/home-slice";

export const store = configureStore({
  reducer: {
    users: handleDataForm,
  },
});
