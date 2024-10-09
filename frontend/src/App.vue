<template>
    <div id="app">
      <!-- 仅当不是登录页面时才显示导航栏 -->
      <Components v-if="!isLoginPage" />
      <router-view />
    </div>
  </template>
  
  <script>
  import Components from '@/components/Index';

  export default {
    name: 'App',
    components: {
        Components
    },
    computed: {
      // 检查当前路由是否为登录页面
      isLoginPage() {
        // 返回 true 如果当前路径是 /login
        return this.$route.path === '/login';
      }
    },
  };
  </script>
  
  <style>
  #app {
    background-color: #f5f5f5;
  }
  </style>
  