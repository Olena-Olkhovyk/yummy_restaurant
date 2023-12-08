import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../redux/slices/itemSlice";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
