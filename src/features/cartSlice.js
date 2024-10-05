import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  renderCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    render: (state, action) => {
      state.renderCart = action.payload;
    },
  },
});

export const { render } = cartSlice.actions;

export default cartSlice.reducer;
