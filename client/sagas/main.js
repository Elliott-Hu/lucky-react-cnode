import * as constants from "@constants";
import axios from "@utils/axios";
import { take, fork, call, put } from "redux-saga/effects";


export function* getTopics() {
  while (true) {
    try {
      let { page, limit, tab, mdrender } = yield take(constants.main.GET_TOPICS);
      let response = yield call(axios, 'https://cnodejs.org/api/v1/topics', {
        params: { page, limit, tab, mdrender }
      }, "get");
      yield put({
        type: constants.main.GET_TOPICS_SUCCESS,
        topics: response.data,
      })
    } catch (error) {
      yield put({
        type: constants.main.GET_TOPICS_FAIL,
        error
      })
    }
  }
}

export default function main() {
  return [
    fork(getTopics)
  ]
}