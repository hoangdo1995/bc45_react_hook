import { configureStore } from "@reduxjs/toolkit";
import FilmsReducer from "./FilmsReducer";


export const store = configureStore({
    reducer:{
        FilmsReducer:FilmsReducer
    }
})
