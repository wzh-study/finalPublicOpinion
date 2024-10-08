// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭 ESLint 检查报错
  publicPath: '/', // 基本路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'static', // 放置生成的静态资源 (js, css, img, fonts) 的目录
  devServer: {
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API || 'https://api.example.com', // 代理目标地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 重写路径
        },
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`, // 全局引入 SCSS
      },
    },
  },
});
