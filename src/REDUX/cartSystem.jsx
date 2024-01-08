import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0,
    total: 0,
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
                state.total += action.payload.mrp


            }
        },
        removeCart: (state, action) => {
            state.total -= state.cart[action.payload].quantity * state.cart[action.payload].mrp
            state.cart.splice(action.payload, 1);
            state.quantity -= 1;


        },
        incquantity: (state, action) => {
            const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload);
            const existingItem = state.cart[existingCartItemIndex]
            if (existingItem) {
                const item = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,

                }
                state.cart[existingCartItemIndex] = item
                state.total += existingItem.mrp

            }

        },
        decquantity: (state, action) => {
            const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload);
            const existingItem = state.cart[existingCartItemIndex]
            if (existingItem) {
                const item = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1,

                }
                state.cart[existingCartItemIndex] = item
                state.total -= existingItem.mrp
            }
        }

    }
})

export const { AddCart, removeCart, incquantity, decquantity } = cartSystem.actions;
export default cartSystem.reducer;