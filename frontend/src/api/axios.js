// src/api/axios.js
import axios from 'axios';
import { Message } from 'element-ui';

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 根据需要替换为实际的 API 基础 URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
apiClient.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加认证 Token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error('请求错误:', error);
    Message.error('请求发送失败');
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    const res = response.data;
    if (res.code !== 200) { // 假设后端返回的 code 为 200 表示成功
      Message.error(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    // 对响应错误做些什么
    console.error('响应错误:', error);
    Message.error(error.message || 'Error');
    return Promise.reject(error);
  }
);

export default apiClient;
