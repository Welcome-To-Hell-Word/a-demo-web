<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}
body{
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
