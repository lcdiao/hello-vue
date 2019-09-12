const User = {
  state: sessionStorage.getItem("state") ? JSON.parse(sessionStorage.getItem("state")) : {
    user: {
      username: ""
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  //同步
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
  //异步
  actions: {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
};

export default User;
