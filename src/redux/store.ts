import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducer";

export const store = createStore(combinedReducers, applyMiddleware(thunk))