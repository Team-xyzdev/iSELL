import { createSlice } from "@reduxjs/toolkit";
import { BASKET_ACTION_TYPES } from "../basket/basket-types";

// user types
interface currentBasketType {
  basket: Array<Object>;
}

// initial state
const initialState: currentBasketType = {
  basket: [],
};

// setting user actions
export const basketSlice = createSlice({
  name: BASKET_ACTION_TYPES.BASKET_TYPE,
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemInCart = state.basket.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.basket.filter(
        (item: any) => item.id !== action.payload
      );
      state.basket = removeItem;
    },
  },
});

// dispatch
export const { addToCart, removeItem } = basketSlice.actions;
//reducer
export default basketSlice.reducer;
