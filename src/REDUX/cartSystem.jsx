import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0,
    total:0,
}
console.log("inital", initialState)

const cartSystem = createSlice({

    name: "cart",
    initialState,
    reducers: {
        AddCart(state, action) {
            console.log("Before  else ", action.payload);

            const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            const existingItem = state.cart[existingCartItemIndex];
            if (existingItem) {
                const item = {
                    ...existingItem,
                    quantity: existingItem.quantity + action.payload.quantity
                }
                state.cart[existingCartItemIndex] = item;
            }


            else {
                console.log("Inside Else", action.payload);
                state.cart.push(action.payload);
                state.quantity += 1;
                state.total+=action.payload.mrp
            }
        },
    }
})

export const { AddCart } = cartSystem.actions;
export default cartSystem.reducer;