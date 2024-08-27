import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import burgerMenuReducer from "./features/burgerMenuSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    burgerMenu: burgerMenuReducer,
    cart: cartReducer,
  },
});
