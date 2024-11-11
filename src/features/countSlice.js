import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  wishListCount: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    counterCartPlus: (state, action) => {
      state.cartCount += action.payload;
    },
    counterCartMinus: (state, action) => {
      state.cartCount -= action.payload;
    },
    counterCartDelete: (state, action) => {
      state.cartCount -= action.payload;
    },
    counterWishListMinus: (state, action) => {
      state.wishListCount -= action.payload;
    },
    counterWishListPlus: (state, action) => {
      state.wishListCount += action.payload;
    },
  },
});

export const {
  counterCartPlus,
  counterCartMinus,
  counterWishListMinus,
  counterWishListPlus,
  counterCartDelete,
} = countSlice.actions;

export default countSlice.reducer;
