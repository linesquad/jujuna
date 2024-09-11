import { createSlice } from "@reduxjs/toolkit";

const getStoredData = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const initialState = {
  cartItems: getStoredData("cartItems", []),
  totalPrice: getStoredData("totalPrice", 0),
};

const saveCartToLocalStorage = (cartItems, totalPrice) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;

      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== item.id
          );
        } else {
          item.quantity--;
        }
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
export const cartItems = (state) => state.cart.cartItems;
export const totalPrice = (state) => state.cart.totalPrice;
