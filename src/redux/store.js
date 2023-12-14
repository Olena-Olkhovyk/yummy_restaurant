import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../redux/slices/itemSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
  },
});
