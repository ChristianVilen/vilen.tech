import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  mounted() {
    AOS.init({
      mirror: true,
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
