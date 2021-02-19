import { createStore } from "redux";
import combinedReducers from "./reducer";

export const store = createStore(combinedReducers)