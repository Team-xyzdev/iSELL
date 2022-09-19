import { createSlice } from "@reduxjs/toolkit";
import { BASKET_ACTION_TYPES } from "./basket-types";

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
    incrementQuantity: (state: any, action: any) => {
      const item = state.basket.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state: any, action: any) => {
      const item = state.basket.find((item: any) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state: any, action: any) => {
      const removeItem = state.basket.filter(
        (item: any) => item.id !== action.payload
      );
      state.basket = removeItem;
    },
  },
});

export const getTotalBasketPrice = (basket) => {
  let bask: Array<any> = [];
  basket.forEach((element) => {
    bask.push(element.price * element.quantity);
  });
  return bask?.reduce((amount, item) => item + amount, 0);
};
// dispatch
export const { addToCart, removeItem, decrementQuantity, incrementQuantity } =
  basketSlice.actions;
//reducer
export default basketSlice.reducer;
