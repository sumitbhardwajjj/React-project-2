import cartslice from "./Cartslice";
import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./Productslice";

const store = configureStore({
    reducer:{
        Cart:cartslice,
        product:Productslice
    }
})

export default store