<template>
  <div id="login">
  <h1>Login</h1>

      <label for="username">Usename</label>
      <input type="text" id="username" placeholder="Enter Username" v-model="credentials.username">

      <label for="password">Password</label>
      <input type="password"  id="password" placeholder="Enter Password" v-model="credentials.password">
    <button class="btn btn-primary" @click="login()">Login</button>
    {{token}}
    <button class="btn btn-primary" @click="logout()">Logout</button>

  </div>
</template>

<script>
import auth from '../auth'

export default {
  name: 'login',
  data () {
    return {
      token: window.localStorage.getItem('id_token'),
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials)
    },
    logout: function () {
      auth.logout(this)
    }
  }
}
</script>

<style scoped>
#login {
}
</style>
