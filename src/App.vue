<template>
  <div id="app">
    <Header/>
    <transition name="router-animated" leave-active-class="animated fadeOut">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>


<script>
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
@import url('./assets/css/animate.css');
@import url('./assets/css/scrollanimation.css');

</style>
