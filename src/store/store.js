import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice";

const reducer = {
    search: searchReducer,
}

export const store = configureStore({
    reducer,
});

