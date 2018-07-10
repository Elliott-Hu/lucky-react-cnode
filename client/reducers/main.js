import createReducer from "@utils/create-reducer";
import * as constants from "@constants";

const initialState = {
  topics: [],
  page: 0,
  tab: "",
}

const actionHandlers = {
  [constants.main.GET_TOPICS_SUCCESS]: (state, action) => {
    state.topics = state.topics.concat(action.topics);
    state.page = action.page;
    state.tab = action.tab;
    return state;
  },
  [constants.main.CLEAR_TOPICS]: (state) => {
    state.topics = [];
    state.page = 0;
    state.tab = "";
  }
}

export default createReducer(initialState, actionHandlers);