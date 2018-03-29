import createReducer from "@utils/create-reducer";
import * as constants from "@constants";

const initialState = {
  topics: []
}

const actionHandlers = {
  [constants.main.GET_TOPICS_SUCCESS]: (state, action) => {
    state.topics = state.topics.concat(action.topics);
    return state;
  }
}

export default createReducer(initialState, actionHandlers);