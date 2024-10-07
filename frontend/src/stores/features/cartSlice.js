import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

     if (indexProductId >= 0) {
       if (quantity > 0) {
         state.items[indexProductId].quantity = quantity;
       } else {
         state.items.splice(indexProductId, 1); // Remove the item if quantity is zero
       }
     }
      // Debugging
      console.log("Updated cart items:", state.items);
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
