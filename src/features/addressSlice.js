import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  address: null,
};

console.log(initialState);

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.address = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.address = null;
    },
  },
});

export const { openModal, closeModal } = addressSlice.actions;
export default addressSlice.reducer;

export const selectIsModalOpen = (state) => state.address.isModalOpen;
export const selectAddress = (state) => state.address.address;
