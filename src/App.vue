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
  /*overflow-x: hidden;*/
  /*overflow-y: hidden;*/
}
body{
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  min-height: 1000px;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
