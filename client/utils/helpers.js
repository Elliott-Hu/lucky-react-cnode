export function queryString(str) {
  if (str.indexOf("?") < 0) return {};

  return str
    .replace(/^.*\?/, "")
    .split("&")
    .map(item => item.split("="))
    .reduce((result, curr) => {
      result[curr[0]] = curr[1];
      return result;
    }, {})
}