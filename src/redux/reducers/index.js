import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import postReducer from "./postReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  loginReducer,
  listReducer,
  postReducer,
});
export default rootReducer;
