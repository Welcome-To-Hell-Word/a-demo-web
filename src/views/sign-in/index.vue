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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    sign_in () {
      this.$axios.post('sign-in', {
        username: this.SignInForm.username,
        password: this.SignInForm.password
      }).then(successResponse => {
        if (successResponse.data.code === 200) {
          console.log(successResponse)
          this.$router.replace({path: '/index'})
        }
      }).catch(failureResponse => {
        console.error(failureResponse)
      })
    }
  }
}
</script>

<style></style>
