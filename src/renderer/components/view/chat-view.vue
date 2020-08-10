<template>
  <div class="cp-chat-view" v-if="chat !== null" @click="showBrow = false" >
    <div class="msg" id="msg">
      <ul>
        <li v-for="c in chat.msgs">
          <div v-if="c.isMe" style="min-height: 37px">
            <div class="me" v-html="c.content"></div>
            <img class="me-img" src="../../assets/avatr.jpg" width="33" height="33">
          </div>
          <div v-else>
            <img :src="chat.img" width="33" height="33">
            <div class="other" v-html="c.content"></div>
          </div>
        </li>
      </ul>
    </div>
    <div id="drag" @mousedown="resize"
         style="width: calc(100% + 64px); cursor: n-resize; border: 2px solid #fff; position:absolute; bottom: 150px;"></div>
    <div class="send" id="send">
      <div class="brows" v-if="showBrow" @click.stop='showBrow = true'>
        <div class="brow">
          <ul>
            <li v-for="c in brows[activeBrow].brow" style="padding: 2px 2px" v-html="c" @click="addBrow(c)"></li>
          </ul>
        </div>
        <div class="select">
          <ul>
            <li v-for="(c, index) in brows" @click="activeBrow = index"
                :style="activeBrow === index ? 'background-color:#fff':''" v-html="c.icon"></li>
          </ul>
        </div>
      </div>
      <div class="tool-bar">
        <i class="el-icon-eleme" @click.stop="showBrow = !showBrow"></i>
        <i class="el-icon-folder-opened" @click="uploadFile">
          <el-upload
              style="display: none" :limit="1"
              ref="upload" :on-preview="handlePreview"
              :on-change="upChange" :auto-upload="false"
              class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList">
            <el-button size="small" type="primary" ref="upFile"></el-button>
          </el-upload>
        </i>
        <i class="el-icon-scissors"></i>
        <i class="el-icon-chat-dot-round"></i>
        <i class="el-icon-phone-outline"></i>
      </div>
      <div id="input" ref="ip" contenteditable='true' @click="db">
        <div v-if="fileList.length > 0" class="file" contenteditable='false' @click="openFile(fileList[0].raw)">
          <i class="el-icon-close" @click.stop="fileList = []"></i>
          <i class="el-icon-document"></i>
          <!--<div v-html="getFileImg(fileList[0].row)"></div>-->
          <div class="info">
            <p style="margin-bottom: 5px">{{fileList[0].name}}</p>
            <p>{{getSize(fileList[0].size)}}</p>
          </div>
        </div>
      </div>
      <button class="btn" @click="send">发送(S)</button>
    </div>
  </div>
</template>

<script>
  import {exec} from 'child_process'

  export default {
    name: "chat-view",
    props: ['chat'],
    data() {
      return {
        sendHeight: 50,
        input: '',
        fileList: [],
        showBrow: false,
        activeBrow: 0,
        brows: [
          {
            icon: '😀',
            brow: ['😀', '😁', '😂', '🤣', '😃', '😭', '😜', '😝', '☺', '😂', '😂', '😂', '😂', '😂', '😂', '😂', '😂', '😂', '😂', '😂', '😂', '😂']
          }, {
            icon: '😭',
            brow: ['😀', '😁', '😂', '🤣', '😃', '😭', '😜', '😝', '☺', '😂', '😂', '😂', '😂']
          }
        ]
      }
    },
    mounted() {
      document.onmouseup = function () {
        document.onmousedown = null;
        document.onmousemove = null;
      };
    },
    methods: {
      send() {
        if (this.$refs.ip.innerHTML.length > 0) {
          let msg = {
            isMe: true,
            content: this.$refs.ip.innerHTML,
            time: new Date().getTime()
          }
          this.$refs.ip.innerHTML = ''
          this.$emit('send', msg, this.chat.groupId)
        }
      },
      getSize(size) {
        if (size > 1024000) {
          return (size / 1024000).toFixed(2) + 'MB'
        } else if (size > 1024) {
          return (size / 1024).toFixed(2) + 'KB'
        } else {
          return size + 'B'
        }
      },
      addBrow(br) {
        this.$refs.ip.innerHTML += br
      },
      getFileImg(row) {

      },
      db() {
        let a = window.getSelection()
        //a.selectAllChildren(document.getElementById('input'))
        console.log(a)
      },
      openFile(row) {
        exec(row.path, {})
        //exec.exec(row.path, {})
      },
      handlePreview(file) {
        console.log(file)
        this.$refs.ip.innerHTML = ''
      },
      upChange(file, fileList) {
        this.fileList = fileList
        console.log(file, fileList)
      },
      uploadFile() {
        this.$refs.upFile.$el.click()
      },
      resize(ev) {
        let initY = 0, tph = 0, bth = 0
				let tp = document.getElementById('msg')
				let bt = document.getElementById('send')
				let drag = document.getElementById('drag')
        tph = tp.offsetHeight
        bth = bt.offsetHeight
        initY = (ev || event).clientY
        document.onmousemove = function (ev2) {
          //tp.style.cursor = 's-resize'
          var y = (ev2 || event).clientY - initY
					bt.style.height = (bth - y) + 'px'
					drag.style.bottom = (bth - y) + 'px'
          tp.style.height = 'calc(100% - ' + (bth - y) + 'px)'
        }
      }
    },
    watch: {
      fileList: {
        deep: true,
        handler(val) {
          console.log(val)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .cp-chat-view {
    font-family: 微软雅黑, serif;
    height: 100%;
    width: 100%;
    position: relative;

    .msg {
      border-top: 1px solid rgb(231, 231, 231);
      padding: 0 30px;
      background-color: rgb(245, 245, 245);
      position: absolute;
      height: calc(100% - 150px);
      width: 100%;
      overflow-y: auto;

      &::-webkit-scrollbar {
        background-color: rgba(245, 245, 245, 0.5);
      }

      img {
        border-radius: 4px;
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          position: relative;
          padding: 5px 0;
          height: 100%;
          word-wrap: break-word;
          word-break: break-all;
          overflow: hidden;

          .other {
            padding: 8px 10px;
            position: absolute;
            max-width: 80%;
            top: 6px;
            left: 45px;
            display: inline-block;
            background-color: #fff;
            font-size: small;
            border-radius: 4px;
          }

          .me-img {
            position: absolute;
            right: 0;
          }

          .me {
            max-width: 80%;
            float: right;
            margin-right: 45px;
            font-size: small;
            border-radius: 4px;
            padding: 8px 10px;
            color: black;
            background-color: rgb(158, 234, 106);
          }

        }
      }
    }

    .send {
      padding: 0 30px;
      height: 150px;
      width: 100%;
      bottom: 0;
      position: absolute;
      background-color: #fff;

      .tool-bar {
        height: 40px;
        line-height: 40px;

        i {
          cursor: pointer;
          margin-right: 12px;
          font-size: large;
          color: rgb(157, 157, 157);

          &:hover {
            color: rgb(91, 91, 91);
          }
        }

        & > i:last-child {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }

      .btn {
        cursor: pointer;
        float: right;
        width: 65px;
        height: 26px;
        font-size: 14px;
        font-family: 微软雅黑, serif;
        color: rgb(96, 96, 96);
        border: 1px solid rgb(229, 229, 229);
        background-color: rgb(245, 245, 245);

        &:hover {
          border: none;
          color: #ffffff;
          background-color: rgb(18, 150, 17);
        }
      }

      .brows {
        position: absolute;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #7f7f7f;
        top: -285px;
        left: -100px;
        width: 460px;
        height: 290px;
        padding: 0 8px;
        background-color: #fff;
        border: 0.5px solid #bbbbbb;

        .brow {
          height: 210px;
          padding-left: 5px;
          margin-top: 20px;
          overflow-y: auto;
        }

        .select {
          position: absolute;
          bottom: 0;
          left: 0;
          width: calc(100% - 1px);
          background: rgb(245, 245, 245);

          ul {
            margin: 0;
            padding: 0;

            li {
              cursor: pointer;
              padding: 10px 17.5px;

              &:hover {
                background: rgb(245, 245, 245);
              }
            }
          }
        }

        ul {
          padding: 5px 5px;
          margin: 0;

          li {
            cursor: default;
            float: left;
            font-size: large;

            &:hover {
              background-color: rgb(231, 231, 231);
            }
          }
        }
      }
    }

    #input {
      border: #7f7f7f;
      height: calc(100% - 70px);
      overflow-y: auto;
      outline: none;
      width: 100%;
      color: #000;
      font-size: 14px;
      font-family: 微软雅黑, serif;
      word-wrap: break-word;
      word-break: break-all;
      overflow-x: hidden;

      .file {
        cursor: default;
        height: 45px;
        padding: 5px 10px;
        width: 300px;
        position: relative;
        border: 0.5px solid #d0d0d0;
        border-radius: 3px;

        &:hover {
          background: #d0cecd;
        }

        .el-icon-close {
          position: absolute;
          top: 3px;
          right: 5px;
          cursor: pointer;
          color: #969696;

          &:hover {
            color: #6b6b6b
          }
        }

        .el-icon-document {
          color: #969696;
          font-size: 40px;
          float: left;
        }

        .info {
          margin-left: 15px;
          font-size: small;
          float: left;

          p {
            margin: 0
          }
        }
      }
    }
  }
</style>
