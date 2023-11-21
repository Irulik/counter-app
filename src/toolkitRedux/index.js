import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const rootReducer = combineReducers({
    toolkitReducer
});

export const store = configureStore({
    reducer: rootReducer
});