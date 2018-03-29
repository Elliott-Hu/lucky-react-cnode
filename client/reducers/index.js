import { combineReducers } from "redux";
import demo from "./demo";
import main from "./main";

const reducers = { demo, main };

export default combineReducers(reducers);