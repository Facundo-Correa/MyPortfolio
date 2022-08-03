import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import BodyC from './components/BodyC.vue'
// import SobreMi from './components/SobreMi.vue'
// import Educac from './components/Educac.vue'
// import Experiencia from './components/Experiencia.vue'
// import Trabajos from './components/Trabajos.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

// var router = new VueRouter({
//   routes:[
//     {
//       path: '/',
//       name: 'home',
//       components: BodyC
//     },
//     {
//       path: '/SobreMi',
//       name: 'SobreMi',
//       components: SobreMi
//     },
//     {
//       path: '/Educacion',
//       name: 'educacion',
//       components: Educac
//     },
//     {
//       path: '/Experiencia',
//       name: 'experiencia',
//       components: Experiencia
//     },
//     {
//       path: '/Trabajos',
//       name: 'trabajos',
//       components: Trabajos
//     }
//   ]
// })

new Vue({
  render: h => h(App),
  // router,
}).$mount('#app')
