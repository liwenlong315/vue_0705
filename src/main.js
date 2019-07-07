import Vue from 'vue'

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import ajax from './api/ajax'
import store from './vuex/store'
import Star from './components/Star/Star.vue'

//Vue.prototype.$ajax = ajax

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)

/* eslint-disable no-new */


//第一种写法
/* new Vue({
  el:'#app'
  components:{
    App
  },
  template:'<App/>'
  router,
}) */


//第二种写法
new Vue({
  el: '#app',
  // render: createElement => createElement(App)  Es6语法// <App/>
  render: h => h(App), // <App/>
  router, // 配置路由器
  store,
})
