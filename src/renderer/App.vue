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

<style lang="less">
  body, html{
    margin:0 0;
    height:100%;
  }
  #app{
    height: 100%;
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
     background-color: rgb(203, 200, 198);
    &:hover{
     background-color: rgb(180, 178, 176);
   }
  }

  button:focus{
    outline: none;
  }
  
  li{
    list-style-type: none;
  }
  .el-badge__content{
    background-color: rgb(250, 81, 81) !important;
    border-color: rgb(250, 81, 81) !important;
  }
  .is-dot{
    height: 8px !important;
    width: 8px;
  }
</style>
