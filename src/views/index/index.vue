<template>
  <div id="Index">
    <div>当前登录:{{current_user.username}}</div>
    <div v-on:click="MenuY_hidden">Index</div>
    <menu-y></menu-y>
    <router-view/>
  </div>
</template>

<script>
import MenuY from '../../components/MenuY'
export default {
  name: 'Index',
  data () {
    return {
      current_user: this.$store.state.user
    }
  },
  components: {MenuY},
  methods: {
    MenuY_hidden () {
      let MenuY = document.getElementById('MenuY')
      switch (MenuY.style.display) {
        case '' :
          MenuY.style.display = 'none'
          break
        case 'none' :
          MenuY.style.display = ''
          break
      }
    }
  }
}
</script>

<style>
#Index{
  width: 100%;
  height: 100%;
}
</style>
