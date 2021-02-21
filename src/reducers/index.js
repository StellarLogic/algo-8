import { combineReducers } from "redux";
import authReducer from "./auth";
import chartReducer from "./chart";

const rootReducer = combineReducers({ auth: authReducer, chart: chartReducer });

export default rootReducer;
