<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {remote} from 'electron'
  //import {select, ready, save, update} from "./sql";
  //let n = new Notification('您有新消息',{title:'您有新消息',body:'xxx你好',silent:true})
  export default {
    name: 'jwchat',
    mounted() {
    }
  }
</script>

<style lang="less">
  
  @import './assets/style/theme';
  
  body, html{
    margin:0 0;
    height:100%;
  }
  ul{padding: 0; margin: 0;}
  #app{
    height: 100%;
    width: 100%;
    font-family: 微软雅黑,serif;
  }
  img{border-radius: 4px}
  .el-message{
    min-width: 100px !important;
    padding: 6px !important;
    box-shadow: 1px 1px 10px 1px #939393;
  }
  .el-dialog{
    .el-dialog__title{
      font-size: 15px !important;
      color: #999999 !important;
    }
    .el-dialog__header{
      font-size: 14px !important;
      padding-top: 6px !important;
      text-align: left !important;
      .el-dialog__headerbtn{
        top: 10px !important;
      }
    }
  }

  .el-input.is-active .el-input__inner, .el-input__inner:focus{
    border-color: rgb(192, 196, 204) !important;
  }
  
  .el-button--primary{
    background-color: @primary !important;
    border-color: @primary !important;
  }
  .el-button--default{
    background-color: #fff !important;
    border-color: rgb(231, 231, 231) !important;
    &:hover{
      color: black !important;
    }
  }
  
  .v-modal{z-index: 0 !important;}
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
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

  .el-input__inner:focus{ outline: rgb(192, 196, 204) }
</style>
