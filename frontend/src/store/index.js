// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 全局状态
  },
  mutations: {
    // 同步修改状态的方法
  },
  actions: {
    // 异步操作
  },
  getters: {
    // 计算属性
  },
  modules: {
    // 模块化状态管理
    login,
  },
});
