<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">网 络 态 势 感 知 平 台</h2>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名/手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" class="login-button">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="register-link">
        <a href="#">注册新账号</a>
      </div>
    </el-card>
  
      <!-- 左下角版权信息 -->
      <div class="footer">
        <div>合肥综合性国家科学中心数据空间研究院</div>
        <div>© Copyright 2022 idata.ah.cn All Rights Reserved.</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: "", // 用户名
          password: "", // 密码
        },
        rules: {
          username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
          password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        },
      };
    },
    methods: {
      handleLogin() {
        // 验证表单
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            const { username, password } = this.loginForm;
  
            // 校验用户名和密码
            if (username === "admin" && password === "123456") {
              // 写入 token 到 localStorage并保存用户名到 Vuex
              this.$store.commit('login/setUsername', username); 
  
              // 跳转到目标页面或首页
              this.$message.success("登录成功");
              const redirect = this.$route.query.redirect || "/overview"; // 获取重定向路径
              this.$router.push(redirect);
            } else {
              // 如果用户名或密码不正确
              this.$message.error("用户名或密码错误");
            }
          } else {
            this.$message.error("请填写完整的表单");
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../../assets/login/background.jpg'); /* 自定义背景图片 */
  background-size: cover;
  background-position: center;
}

.login-card {
  margin-top: 0px;
  width: 380px;
  height: 400px;
  padding: 20px;
  background-color: rgba(185, 181, 181, 0.5); /* 半透明背景 */
  border-radius: 10px; /* 圆角边框 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.login-title {
  text-align: center;
  font-size: 32px;
  color: white;
  margin-bottom: 40px;
}

.el-input {
  border-radius: 5px;
  color: white;
  background-color: transparent; /* 设置背景为透明 */
  font-size: 22px;
  height: 50px;
  line-height: 50px;
  padding-left: 5px; /* 增加左侧内边距来拉开图标与 placeholder 的距离 */
  border: 1px solid rgba(255, 255, 255, 0.7); /* 设置边框为半透明的白色 */

}

::v-deep .el-input__inner {
  background-color: transparent;
  border: none;
  color: white;
}

.el-input__inner::placeholder {
  color: white;
  font-size: 22px;
}

.el-input__inner:focus {
    

    background-color: rgba(185, 181, 181, 0.5);
}

.el-input .el-input__icon {
  font-size: 24px; /* 调整图标大小 */
}


.el-button.login-button {
  width: 100%;
  background-color: #2196f3;
  color: white;
  font-size: 24px;
  border-radius: 5px;
  padding: 10px 0;
}

.el-button.login-button:hover {
  background-color: #1976d2; /* 鼠标悬停时按钮颜色 */
}

.register-link {
  text-align: center;
  margin-top: 30px;
}

.register-link a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.register-link a:hover {
  text-decoration: underline;
}
  .footer {
  position: absolute;
  width: 100%; /* 占满宽度以实现水平居中 */
  left: 0;
  bottom: 0;
  color: white; /* 左下角的版权文字为白色 */
  background-color: #2e57bb;
  font-size: 18px;
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 子元素在水平方向居中 */
  align-items: center; /* 子元素在垂直方向居中 */
  padding: 10px 0; /* 给上下添加一些间距 */
  gap: 100px; /* 给子元素之间添加一些间距 */
}

  </style>
  