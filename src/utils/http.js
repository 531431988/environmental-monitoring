import { message } from 'ant-design-vue';
import Loading from '@/components/Loading'
import { fetch, ResponseType, Body } from '@tauri-apps/api/http'
let requestNum = 0;
const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum == 1) {
    Loading.show('加载中...')
  }
};
const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--;
  if (requestNum === 0) Loading.hide();
};

function jsonToQueryParams(json) {
  const params = new URLSearchParams();
  for (let key in json) {
    params.append(key, json[key]);
  }
  return params.toString();
}

// https://tauri.app/zh-cn/v1/api/js/http#fetch
export default (opts = {}) => {
  return new Promise((resolve, reject) => {
    const { url, method, params, data, headers, loading = true } = opts
    if (loading) addLoading();
    fetch(import.meta.env.VITE_GLOB_API_URL + url, {
      method: method || 'GET',
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
      responseType: ResponseType.JSON,
      timeout: 60000,
      query: method === 'GET' ? jsonToQueryParams(params) : undefined,
      body: method !== 'GET' ? (data ? Body.json(data) : undefined) : undefined,
    })
      .then(({ data }) => {
        cancelLoading();
        if (data.code === 200) {
          resolve(data)
        } else {
          message.error(data.msg);
        }

      })
      .catch((e) => {
        cancelLoading();
        reject(e)
      })
  })
}
