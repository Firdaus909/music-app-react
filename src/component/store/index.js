import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token-slice";

const store = configureStore({
    reducer:{
        token:tokenSlice.reducer
    }
})

export default store