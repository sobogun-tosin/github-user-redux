import { combineReducers } from "redux";
import githubReducer from "./githubReducer";

export const RootReducer = combineReducers({ github: githubReducer });
