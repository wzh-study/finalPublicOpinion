// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';  // 引入 Element-UI
import './plugins/echart.js';  // 引入 ECharts
import axios from './api/axios'; // 引入 axios

// import '@/styles/global.scss';  // 全局 SCSS 样式文件  在vue.config中引入过  这里无需再引入

Vue.config.productionTip = false;

// 将 axios 挂载到 Vue 原型链上
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
