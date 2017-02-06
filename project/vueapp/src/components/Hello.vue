<template>
  <div id="hello">
    <h1>Hello From Vue.js inside Django</h1>
    <h2>Sign up or Login to test REST API</h2>
    <login></login>
  </div>
</template>

<script>
import Login from './Login'

export default {
  name: 'hello',
  components: {
    Login
  }
}
</script>

<style scoped>
#hello {
text-align: center;
padding-top: 30px;
}
</style>
