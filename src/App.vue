<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
      <!-- <router-link to="/home">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
</template>

<script type="text/javascript" src="./assets/js/prueba.js"></script>

<script>
  /*--------------  Importamos archivos js  --------------*/
  // import jquery from './assets/js/jquery-3.5.1.min.js';
  // import bundle from './assets/js/bootstrap.bundle.min.js';
  // import bootstrap from './assets/js/bootstrap.min.js';
  // import owlCarousel from './assets/js/owl.carousel.min.js';
  // import wow from './assets/js/wow.js';
  // import main from './assets/js/main.js';
  // import * as pruebas from './assets/js/prueba.js';


/*--------------  Importamos Componentes claves  --------------*/
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
  components:{
    Header,
    Footer
    }
  }

</script>

<style>
/*--------------  Importamos todas los archivos CSS  --------------*/
@import url('./assets/css/style.css');
@import url('./assets/css/bootstrap-grid.min.css');
@import url('./assets/css/bootstrap-reboot.min.css');
@import url('./assets/css/bootstrap.min.css');
@import url('./assets/css/owl.carousel.min.css');
@import url('./assets/css/owl.theme.default.min.css');
@import url('./assets/css/animate.fadeInUp.css');
</style>
