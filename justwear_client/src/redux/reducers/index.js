import { combineReducers } from "@reduxjs/toolkit";
import { ProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: ProductReducer,
})

export default reducers;    