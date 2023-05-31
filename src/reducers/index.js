import { combineReducers } from "redux";
import languageChange from "./languageChange";

const reducer = combineReducers({
  language: languageChange,
});

export default reducer;
