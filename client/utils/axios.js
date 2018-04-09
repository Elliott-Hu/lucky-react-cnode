import axios from "axios";

// 请求通用逻辑编写处
export default async function(url, options, method) {
  const response = await axios({
    ...options,
    url,
    method
  })
  switch (response.status) {
    case 200:
    case 304:
      if (!response.data.success) return Promise.reject(response.data);
      return Promise.resolve(response.data);
    default:
      return Promise.reject(response.data);
  }
}