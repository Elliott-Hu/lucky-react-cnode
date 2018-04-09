import * as constants from "@constants";

export const getTopics = (tab = "all", page = 1, limit = 20, mdrender = false) => ({
  type: constants.main.GET_TOPICS,
  tab, page, limit, mdrender
})

export const clearTopics = () => ({
  type: constants.main.CLEAR_TOPICS
})