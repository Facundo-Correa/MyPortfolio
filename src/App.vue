<template>
  <div id="app">
    <div id="nav">
      <NavBar/>
    </div>
    <div id="body" class="container-fluid">
      <BodyC/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
  </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BodyC from './components/BodyC.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    BodyC,
    Footer
}
}
</script>

<style>
#nav{
  width: 100%;
  position: fixed;
}
</style>