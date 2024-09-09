import { GrConfigureStore } from "@reduxjs/toolkit";
import cartReducer  from './Cart' 

export const store = GrConfigureStore({
    reducer: {
        cart: cartReducer
        
    }
})