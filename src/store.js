import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import burgerMenuReducer from "./features/burgerMenuSlice";
import cartReducer from "./features/cartSlice";
import addressReducer from "./features/addressSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    burgerMenu: burgerMenuReducer,
    cart: cartReducer,
    address: addressReducer,
    auth: authReducer,
  },
});
