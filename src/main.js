// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

///agregado como configuracion del routin
import vueRouter from 'vue-router'
import router from './router'
Vue.use(vueRouter)
///hasta aqui

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  ///agregado como configuracion del routin
  router,
  ///hasta aqui
  el: '#app',
  components: { App },
  template: '<App/>'
})
