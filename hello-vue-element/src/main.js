// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import Vuex from 'vuex'

import store from './store'

/* 原型链 */
Vue.prototype.axios = axios;


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Vuex);

router.beforeEach((to, form, next) => {
  //console.log("beforeEach->触发路由");
  let isLogin = sessionStorage.getItem("isLogin");

  if (to.path == '/logout') {
    sessionStorage.clear();
    next({path: "/login"});
  }
  else if (to.path == '/login') {
    if (isLogin == 'true') {
      next({path: "/main"});
    }
  }
  else if (isLogin == null) {
    next({path: "/login"});
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
})
