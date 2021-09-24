<template>
  <div id="Index">
    <div v-on:click="MenuY_hidden">Index</div>
    <menu-y></menu-y>
  </div>
</template>

<script>
import MenuY from '../../components/MenuY'
export default {
  name: 'Index',
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

</style>
