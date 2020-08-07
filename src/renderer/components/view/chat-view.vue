<template>
	<div class="cp-chat-view" v-if="chat !== null">
		<div class="msg">
			<ul>
				<li v-for="c in chat.msgs">
					<div v-if="c.isMe" style="min-height: 37px">
						<div class="me" v-html="c.content"></div>
						<img class="me-img" src="../../assets/avatr.jpg" width="33" height="33">
					</div>
					<div v-else>
						<img :src="chat.img"  width="33" height="33">
						<div class="other" v-html="c.content"></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="send">
			<div class="tool-bar">
				<i class="el-icon-eleme"></i>
				<i class="el-icon-folder-opened"></i>
				<i class="el-icon-scissors"></i>
				<i class="el-icon-chat-dot-round"></i>
				<i class="el-icon-phone-outline"></i>
			</div>
			<div id="input" ref="ip" contenteditable='true'>6666</div>
			<button class="btn" @click="send">发送(S)</button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "chat-view",
	    props:['chat'],
	    data(){
            return{
                sendHeight:50,
	            input:''
            }
	    },
	    methods:{
            send(){
                if (this.$refs.ip.innerHTML.length > 0){
                    let msg = {
                        isMe: true,
	                    content: this.$refs.ip.innerHTML,
	                    time: new Date().getTime()
                    }
                    this.$emit('send', msg, this.chat.groupId)
                }
            }
	    }
    }
</script>

<style scoped lang="less">
	.cp-chat-view{
		font-family: 微软雅黑,serif;
		height: 100%;
		width: 100%;
		position: relative;
		.msg{
			border-top: 1px solid rgb(231, 231, 231);
			padding: 0 30px;
			background-color: rgb(245, 245, 245);
			position: absolute;
			height: 100%;
			width: 100%;
			overflow-y: auto;
			img{
				border-radius: 4px;
			}
			ul{
				margin: 0;
				padding: 0;
				li{
					position: relative;
					padding: 5px 0;
					.other{
						padding: 8px 10px;
						position: absolute;
						top: 6px;
						left: 45px;
						display: inline-block;
						background-color: #fff;
						font-size: small;
						border-radius: 4px;
					}
					.me-img{
						position: absolute;
						right: 0;
					}
					.me{
						right: 45px;
						position: absolute;
						display: inline-block;
						font-size: small;
						border-radius: 4px;
						padding: 8px 10px;
						color: black;
						background-color: rgb(158, 234, 106);
					}
					
				}
			}
		}
		.send{
			padding: 0 30px;
			
			width: 100%;
			bottom: 0;
			position: absolute;
			background-color: #fff;
			.tool-bar{
				height: 40px;
				line-height: 40px;
				i{
					cursor: pointer;
					margin-right: 12px;
					font-size: large;
					color: rgb(157, 157, 157);
					&:hover{
						color: rgb(91, 91, 91);
					}
				}
				&>i:last-child{
					position: absolute;
					top: 10px;
					right: 10px;
				}
			}
			.btn{
				cursor: pointer;
				position: absolute;
				bottom: 10px;
				right: 30px;
				width: 65px;
				height: 26px;
				font-size: 14px;
				font-family: 微软雅黑,serif;
				color: rgb(96, 96, 96);
				border: 1px solid rgb(229, 229, 229);
				background-color: rgb(245, 245, 245);
				&:hover{
					border: none;
					color: #ffffff;
					background-color: rgb(18, 150, 17);
				}
			}
		}
		#input{
			border: #7f7f7f;
			height: 100px;
			margin-bottom: 40px;
			overflow-y: auto;
			outline: none;
			width: 100%;
			color: #000;
			font-size: 14px;
			font-family: 微软雅黑,serif;
			word-wrap: break-word;
			word-break: break-all;
			overflow-x: hidden;
		}
	}
</style>
