<template>
  <div id="app">
    <globalnav></globalnav>
    <login></login>
  </div>
</template>

<script>
import Globalnav from './components/Globalnav'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Globalnav,
    Login
  }
}
</script>

<style>

#app {
  /*font-family: 'Roboto', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #424242;
}
</style>
