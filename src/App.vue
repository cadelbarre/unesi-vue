<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
</template>

<script>
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
</style>
