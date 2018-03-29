import * as constants from "@constants";

export const getTopics = (tab = "", page = 1, limit = 20, mdrender = false) => ({
  type: constants.main.GET_TOPICS,
  tab, page, limit, mdrender
})