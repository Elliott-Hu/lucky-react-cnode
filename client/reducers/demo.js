import createReducer from "@utils/create-reducer";
import * as constants from "@constants";

let initialState = {
  description: "你好，欢迎进入首页"
}

let actionHandlers = {
  [constants.demo.CONSTANT_DEMO]: (state, action) => {
    state.description = action.description;
    return state;
  }
}

export default createReducer(initialState, actionHandlers);