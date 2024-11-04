import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    toggleBurgerMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleBurgerMenu, close } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;

export const getIsOpen = (state) => state.burgerMenu.isOpen;
