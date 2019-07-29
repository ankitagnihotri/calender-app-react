import { combineReducers } from "redux";
import calendarReducer from "./Reducer";

const allReducers = combineReducers({
  calendar: calendarReducer
});

export default allReducers;
