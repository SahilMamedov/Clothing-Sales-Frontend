
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Basket, IBasketItem } from "types";

interface initialStateTypes{
    basket: Basket;
  }
  const initialState: initialStateTypes = {
    basket: {
      basketItems: [],
      total: 0,
    },
  };

  export const basketSlice =createSlice({
    name:"basketSlice",
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<IBasketItem[]>)=>{
        state.basket.basketItems=action.payload;      
        },

        removeItem:(state,action:PayloadAction<number>)=>{
            state.basket.basketItems = state.basket.basketItems.filter(
                (b) => b.productId!== action.payload
            )
        }
    }
  })
  export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;