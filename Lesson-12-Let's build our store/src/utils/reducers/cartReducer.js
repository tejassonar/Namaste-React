import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      const newItems = state.items.filter(
        (item) => item?.id !== action?.payload?.id
      );
      return { items: newItems };
    },

    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
