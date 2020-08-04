import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './directives/scrollanimation.js'

Vue.directive('scrollanimation', ScrollAnimation)

/* ----------- Importamos El modulo del carousel --------- */ 
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

/* ----------- Importamos El modulo Bootstrap con los archivos js y css --------- */ 
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
