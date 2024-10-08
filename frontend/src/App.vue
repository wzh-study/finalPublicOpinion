<template>
    <div id="app">
      <NavBar />
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import NavBar from './components/NavBar.vue';
  
  export default {
    name: 'App',
    components: {
      NavBar,
    },
  };
  </script>
  
  <style>
  #app {
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  </style>
  