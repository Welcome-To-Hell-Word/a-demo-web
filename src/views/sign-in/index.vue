<template>
  <div id="SignIn">
    <div>username:<input v-model="SignInForm.username" type="text" placeholder="username"></div>
    <div>password:<input v-model="SignInForm.password" type="password" placeholder="password"></div>
    <div><button v-on:click="sign_in">Sign in</button></div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      SignInForm: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    sign_in () {
      let _this = this
      this.$axios.post('/sign-in', {
        username: this.SignInForm.username,
        password: this.SignInForm.password
      }).then(successResponse => {
        window.console.log(successResponse)
        _this.$store.commit('sign_in', _this.SignInForm)
        let path = this.$route.query.redirect
        this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
      }).catch(failureResponse => {
        window.console.error(failureResponse)
      })
    }
  }
}
</script>

<style></style>
