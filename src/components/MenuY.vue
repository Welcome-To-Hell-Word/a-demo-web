<template>
  <div id="MenuY">
    <ul id="MenuY_ul">
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
  name: 'MenuY'
}
</script>

<style>
#MenuY_ul>li>div{
  background: #FF6600;
}
</style>
