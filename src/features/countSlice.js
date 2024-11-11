import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  wishList: [],
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
    insertToWishList: (state, action) => {
      state.wishList.push({ id: action.payload });
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  counterCartPlus,
  counterCartMinus,
  counterCartDelete,
  insertToWishList,
  removeFromWishList,
} = countSlice.actions;

export default countSlice.reducer;
