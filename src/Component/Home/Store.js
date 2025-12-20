
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload }); // safe mutation
    },
    removeFromCart: (state, action) => state.filter(item => item.id !== action.payload),
  },
});

// Wishlist Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push({ ...action.payload }); // safe mutation
    },
    removeFromWishlist: (state, action) =>
      state.filter(item => item._id !== action.payload), // return new array
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;