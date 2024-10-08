<template>
    <el-header class="navbar">
      <div class="logo">舆情态势感知平台</div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/overview">舆情总览</el-menu-item>
        <el-menu-item index="/user-profile">用户画像</el-menu-item>
        <el-menu-item index="/event-spread">事件传播</el-menu-item>
        <el-menu-item index="/report">舆情报告</el-menu-item>
        <el-menu-item index="/info-search">信息检索</el-menu-item>
      </el-menu>
      <div class="user-info">
        <el-icon><i class="el-icon-user"></i></el-icon>
        <span>{{ username }}</span>
      </div>
    </el-header>

    
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        username: '181****9251', // 您可以动态替换为登录的用户名
      };
    },
    methods: {
      handleSelect(key) {
        // 检查当前路径是否与目标路径相同
        if (this.$route.path !== key) {
          this.$router.push(key); // 只有当目标路由与当前路由不同时才进行跳转
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 20px;
    color: #1f3e91;
    font-weight: bold;
  }
  
  .el-menu-demo {
    flex-grow: 1;
    margin-left: 20px;
  }
  
  .el-menu-item.is-active {
    color: #1f3e91 !important;
    border-bottom: 2px solid #1f3e91;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  .user-info span {
    margin-left: 8px;
  }
  </style>
  