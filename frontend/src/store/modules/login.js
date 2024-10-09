const state = {
    username: localStorage.getItem('username') || '', // 初始化时从 localStorage 中读取
  };
  
  const mutations = {
    setUsername(state, username) {
      state.username = username;
      localStorage.setItem('username', username); // 同步更新 localStorage
    },
    clearUsername(state) {
      state.username = '';
      localStorage.removeItem('username');
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
  };
  