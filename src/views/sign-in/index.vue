<template>
  <div id="SignIn">
    <div>username:<input v-model="SignInForm.username" type="text" placeholder="username"></div>
    <div>password:<input v-model="SignInForm.password" type="password" placeholder="password"></div>
    <div><button v-on:click="sign_in">Sign in</button></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
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
        alert('Hell Hell')
      }
    }
  }
</script>

<style></style>
