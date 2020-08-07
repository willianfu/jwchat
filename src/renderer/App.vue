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
  ::-webkit-scrollbar{
    width:7px;
    height:7px;
    /**/
  }
  /*div::-webkit-scrollbar-track{display: none;}*/
  div::-webkit-scrollbar-thumb{
    width: 10px;
    height: 15px;
    border-radius: 5px;
    background-color: rgba(210, 210, 210, 0);
  }
  div::-webkit-scrollbar-thumb:hover{
    background-color: rgb(186, 186, 186);
  }
  li{
    list-style-type: none;
  }
</style>
