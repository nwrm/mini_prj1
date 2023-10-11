import { createStore } from "redux";
import { combineReducers } from "redux";
import students from "./modules/students";

const rootReducer = combineReducers({
  students,
});
const store = createStore(rootReducer);

export default store;
