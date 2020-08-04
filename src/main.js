import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* ----------- Importamos El modulo Bootstrap con los archivos js y css --------- */ 
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'jquery';
window.$ = window.jQuery = require('jquery');
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* ----------- Importamos El modulo Owl.Carousel con los archivos js y css --------- */ 
import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import 'owl.carousel/dist/assets/owl.theme.green.min.css';
import 'owl.carousel';

import 'wow.js';

// import './assets/js/main.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
