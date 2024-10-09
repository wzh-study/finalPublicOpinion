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
            <!-- 使用el-dropdown实现点击用户名弹出下拉菜单 -->
            <el-dropdown>
            <span class="el-dropdown-link">
                <el-icon><i class="el-icon-user"></i></el-icon>
                {{ username }} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <!-- 项目地址超链接 -->
                <el-dropdown-item>
                <a href="https://github.com/wzh-study/finalPublicOpinion/tree/main" target="_blank">项目地址</a>
                </el-dropdown-item>
                <!-- 退出登录 -->
                <el-dropdown-item divided @click.native="handleLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
  </template>
  
  <script>

  export default {
    name: 'NavBar',
    computed: {
        username() {
            return this.$store.state.login.username || "游客";
        },
  },
    methods: {
      handleSelect(key) {
        // 检查当前路径是否与目标路径相同
        if (this.$route.path !== key) {
          this.$router.push(key); // 只有当目标路由与当前路由不同时才进行跳转
        }
      },
      handleLogout() {
        this.$store.commit('login/clearUsername'); // 清除 Vuex 中的用户名  删除localstorage中的token
        // 跳转到登录页面
        this.$router.push('/login');
        this.$message.success('已退出登录');
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 28px;
    color: white;
    padding: 10px;
    background-color: #2e57bb;
    font-weight: bold;
    margin-left: -20px;
  }
  
  .el-menu-demo {
    flex-grow: 1;
    display: flex;
    gap: 50px; /* 使用 gap 增加菜单项之间的间距 */
    margin-left: 50px;
  }
  
   .el-menu-item {
    font-size: 22px;
    min-width: 120px; /* 控制每个菜单项的最小宽度 */
    text-align: center; /* 让菜单项的文字居中 */
    color: black;
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
    cursor: pointer;
    font-size: 20px;
  }
  </style>
  