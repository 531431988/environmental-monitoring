import axios from "axios";
import { message } from 'ant-design-vue';
import Loading from '@/components/Loading'
const [messageApi] = message.useMessage();
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

const http = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  timeout: 45000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  }
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { loading = true } = config;
  if (loading) addLoading();
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { loading = true } = response.config;
  if (loading) cancelLoading();
  const { code, data, msg } = response.data;
  if (code === 200) return response.data;
  else if (code == 401) {
    sessionStorage.clear()
  } else {
    message.destroy()
    messageApi.error(msg);
    return Promise.reject(response);
  }
}, function (error) {
  // 对响应错误做点什么
  const { loading = true } = error.config;
  if (loading) cancelLoading();
  if (error.response) {
    if (error.response.status === 401) {
      sessionStorage.clear()
    }
  }
  message.destroy()
  messageApi.error(error?.response?.data?.message || "服务端异常");
  return Promise.reject(error);
});


export default http;

