const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'rest-auth/login/'
const LOGOUT = API_URL + 'rest-auth/logout/'
// const SIGNUP_URL = API_URL + 'users/'

export default {

  user: {
    authenticated: false
  },

  login (context, creds) {
    context.$http.post(LOGIN_URL, {
      username: 'test',
      password: 'test1234'
    })
        .then(function (response) {
          console.log(response.data)
          window.localStorage.setItem('id_token', response.data.token)
          this.user.authenticated = true
        })
        .catch(function (error) {
          console.log(error)
        })
  },

  // signup (context, creds, redirect) {
  //   this.http.post(SIGNUP_URL, creds, (data) => {
  //     window.localStorage.setItem('id_token', data.id_token)

  //     this.user.authenticated = true
  //   }).error((err) => {
  //     this.error = err
  //   })
  // },

  logout (context) {
    context.$http.post(LOGOUT)
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    window.localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = window.localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + window.localStorage.getItem('id_token')
    }
  }
}
