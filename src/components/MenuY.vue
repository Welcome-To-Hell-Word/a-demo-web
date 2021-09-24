<template>
  <div id="MenuY">
    <ul id="MenuY_ul" v-on:click="OpenOrHidden">
      <li>
        <div>Menu-1</div>
        <ul>
          <li>
            <div>Menu-1-1</div>
          </li>
          <li>
            <div>Menu-1-2</div>
          </li>
          <li>
            <div>Menu-1-3</div>
          </li>
        </ul>
      </li>
      <li>
        <div>Menu-2</div>
      </li>
      <li>
        <div>Menu-3</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuY',
  methods: {
    OpenOrHidden (e) {
      console.log(e)
      console.log(e.target)
      console.log(e.currentTarget)
    }
  }
}
</script>

<style>
#MenuY_ul>li>div{
  background: #FF6600;
}
li{
  display: none;
}
</style>
