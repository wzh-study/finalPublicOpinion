// src/plugins/echarts.js
import Vue from 'vue';
import * as ECharts from 'echarts';

// 挂载 ECharts 到 Vue 原型链上，便于全局使用
Vue.prototype.$echarts = ECharts;