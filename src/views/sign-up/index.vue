<template>
  <div id="SignUp">
    <div id="SignUp_Form">
      <div>username:<input v-model="SignUpForm.username" type="text" placeholder="username"></div>
      <div>password:<input v-model="SignUpForm.password" type="password" placeholder="password"></div>
      <div><button v-on:click="sign_up">Sign up</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      SignUpForm: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    sign_up () {
      let _this = this
      this.$axios.post('/user/sign-up', {
        username: this.SignUpForm.username,
        password: this.SignUpForm.password
      }).then(successResponse => {
        if (successResponse.data.code === '200') {
          _this.$store.commit('current_user', _this.SignInForm)
          this.$router.replace({path: '/'})
        }
      }).catch(failureResponse => {
        window.console.error(failureResponse)
      })
    }
  }
}
</script>

<style>

</style>
