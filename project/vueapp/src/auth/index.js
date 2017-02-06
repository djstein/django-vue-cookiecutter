const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'rest-auth/login/'
const LOGOUT_URL = API_URL + 'rest-auth/logout/'
// const REGISTRATION_URL = API_URL + 'registration/'

export default {
  user: {
    authenticated: false
  },

  login (context, data) {
    console.log(this.user)
    context.$http.post(LOGIN_URL, data)
        .then(response => {
          console.log(response.data)
          window.localStorage.setItem('id_token', response.data.token)
          this.user.authenticated = true
        })
        .catch(function (error) {
          console.log(error)
        })
  },

  logout (context) {
    context.$http.post(LOGOUT_URL)
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
