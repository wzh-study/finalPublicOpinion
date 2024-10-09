import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);


// 导入需要路由的组件
import Overview from '@/views/overview/index.vue'
import UserProfile from '@/views/userprofile/index.vue'
import EventSpread from '@/views/eventspread/index.vue'
import Report from '@/views/report/index.vue';
import InfoSearch from '@/views/infosearch/index.vue';
import Login from '@/views/login/index.vue';

// 定义路由规则
const routes = [
    { path: '/login', component: Login },
    { path: '/overview', component: Overview, meta: { requiresAuth: true } },
    { path: '/user-profile', component: UserProfile, meta: { requiresAuth: true } },
    { path: '/event-spread', component: EventSpread, meta: { requiresAuth: true } },
    { path: '/report', component: Report, meta: { requiresAuth: true } },
    { path: '/info-search', component: InfoSearch, meta: { requiresAuth: true } },
    { path: '/', redirect: '/overview' }, // 默认重定向到舆情总览
];
// 创建路由实例
const router = new Router({
  mode: 'history', // 使用 history 模式，去掉 URL 中的 #
  base: process.env.BASE_URL,
  routes // 注入路由规则
});


// 导航守卫，beforeEach 是一个全局前置守卫，它会在每次路由切换之前执行
router.beforeEach((to, from, next) => {
    // 从 localStorage 中获取存储的 token，username 用于判断用户是否已登录
    const token = localStorage.getItem('username');
    
    // 判断目标路由是否包含 `meta.requiresAuth`，如果是则表示该路由需要登录认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // 如果目标路由需要认证，但没有 token（即用户未登录）
      if (!token) {
        // 重定向到登录页面，并在 query 参数中保存用户想要访问的原始路径
        next({
          path: '/login',
          query: { redirect: to.fullPath } // 保存用户试图访问的页面，登录后重定向回去
        });
      } else {
        // 如果有 token（用户已登录），则允许访问目标页面
        next();
      }
    }
    // 如果用户访问的是登录页面，并且已经有 token（已登录）
    else if (to.path === '/login' && token) {
      // 重定向到首页，防止已登录用户再次访问登录页面
      next({ path: '/' });
    }
    // 如果访问的页面不需要认证，或者是登录页面且用户未登录，则直接允许访问
    else {
      // 放行，允许访问目标页面
      next();
    }
});
  

export default router;
