import { ConfigureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";

export const store = ConfigureStore({
  reducer: {
    cart: cartReducer,
  },
});
