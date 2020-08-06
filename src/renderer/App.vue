<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'jwchat'
  }
</script>

<style>
  body, html{
    margin:0 0;
    height:100%;
  }
  #app{
    height: 100%;
    width: 100%;
  }
</style>
