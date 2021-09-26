<template>
  <div id="SignIn">
    <div id="SignIn_Form">
      <div>username:<input v-model="SignInForm.username" type="text" placeholder="username"></div>
      <div>password:<input v-model="SignInForm.password" type="password" placeholder="password"></div>
      <div><button v-on:click="sign_in">Sign in</button></div>
    </div>
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
      this.$axios.post('/user/sign-in', {
        username: this.SignInForm.username,
        password: this.SignInForm.password
      }).then(successResponse => {
        if (successResponse.data.code === '200') {
          _this.$store.commit('sign_in', _this.SignInForm)
          let path = this.$route.query.redirect
          this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
        }
      }).catch(failureResponse => {
        window.console.error(failureResponse)
      })
    }
  }
}
</script>

<style>
#SignIn{
  width: 100vw;
  height: 100vh;
  position: relative;
}
#SignIn_Form{
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  border: 1px black solid;
}
</style>
