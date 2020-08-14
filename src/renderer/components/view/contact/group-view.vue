<template>
	<div class="cp-gv" v-if="select !== null" @click="showInfo = false">
		<div class="new-friends" v-if="select.type === 'newFriend'">
			<div class="search">
				<el-input size="mini" v-model="search" placeholder="搜索对方 手机号 / 邮箱 / 微聊号"></el-input>
				<el-button size="mini" type="primary"><i class="el-icon-search"></i>搜索</el-button>
			</div>
			<ul>
				<li v-for="f in select.data">
					<div>
						<img :src="f.img" alt="" width="50px" height="50px">
						<div class="text">
							<p style="color:#272626;">{{f.name}}</p>
							<p>{{f.remark}}</p>
						</div>
						<div class="rst">
							<el-button size="mini" type="primary" v-if="f.status === 1" style="padding: 5px 8px">接受</el-button>
							<p v-else-if="f.status === 2">已添加</p>
							<p v-else-if="f.status === 3" style="color:rgb(250, 81, 81);">已拒绝</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="subscribe" v-else-if="select.type === 'subscribe'">
			<ul>
				<li v-for="s in select.data" @click.stop="showInfo = true; info = s">
					<img :src="s.img" alt="" width="50px" height="50px">
					<p>{{s.name}}</p>
					<div class="info" v-if="info === s && showInfo">
						<div class="title">
							<div>
								<p>{{s.name}}</p>
								<p>微信号：{{s.name}}</p>
							</div>
							<img :src="s.img" alt="" width="55px" height="55px">
						</div>
						<div class="desp">
							这是一个无聊的公众号，经常发布一些垃圾信息，快来订阅我吧！
						</div>
						<div class="footer">
							<i class="el-icon-postcard"></i>
							<i class="el-icon-tickets"></i>
							<i class="el-icon-chat-round"></i>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="group" v-else-if="select.type === 'group'">
		
		</div>
		<div class="friend" v-else-if="select.type === 'friend'">
			<div class="title">
				<div>
					<p>{{select.name}}
						<i :class="select.sex?'el-icon-male':'el-icon-female'"
						   :style="select.sex?'color: rgb(70, 182, 239)':'color: rgb(243, 126, 125)'">
						</i>
					</p>
					<p>{{select.name}}</p>
				</div>
				<img :src="select.img" alt="" width="55px" height="55px">
			</div>
			<div class="desp">
				<p>
					<span>备&nbsp&nbsp&nbsp注</span>
					<span>{{select.name}}</span>
				</p>
				<p>
					<span>微信号</span>
					<span>{{select.name}}</span>
				</p>
				<p>
					<span>来&nbsp&nbsp&nbsp源</span>
					<span>通过搜索手机号添加</span>
				</p>
			</div>
			<div class="footer">
				<el-button type="primary" size="medium">发消息</el-button>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "group-view",
	    props:['select'],
	    data(){
            return{
                search:'',
	            showInfo: false,
	            info: null,
            }
	    }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.cp-gv{
		height: 100%;
		overflow-y: auto;
		padding: 0 87px;
		border-top: 1px solid @borderColor;
		background-color: @viewBgc;
		.new-friends{
			.search{
				padding: 50px 0;
				.el-input{
					width: 70%;
					float: left;
				}
				.el-button{
					float: right;
				}
			}
			ul{
				li:first-child{
					border-top: 1px solid @borderColor;
				}
				li{
					border-bottom: 1px solid @borderColor;
					font-size: small;
					padding: 12px 0;
					color: @icoColor;
					position: relative;
					.text{
						position: absolute;
						top: 6px; left: -10px;
						margin-left: 70px;
						p{
							margin: 10px 0
						}
					}
					.rst{
						.el-button{
							position: absolute;
							right: 0;
							top: 25px;
						}
						p{
							position: absolute;
							right: 0;
							top: 18px;
						}
						
					}
				}
			}
		}
		.subscribe{
			margin-top: 20px;
			img{
				border-radius: 50%;
			}
			li{
				float: left;
				width: 70px;
				height: 80px;
				padding: 10px 0 ;
				cursor: pointer;
				font-size: 13px;
				text-align: center;
				position: relative;
				&:hover{
					background-color: @hoverColor;
				}
				p{
					overflow: hidden;
					margin: 7px 0;
					color: @icoHc;
				}
				.info{
					position: absolute;
					top: 50px;
					left: 45px;
					cursor: default;
					width: 230px;
					padding: 30px;
					background-color: #fff;
					border-radius: 3px;
					box-shadow: @shadow;
					z-index: 999;
					.title{
						text-align: left;
						padding-bottom: 20px;
						border-bottom: 1px solid @borderColor;
						font-size: large;
						p:first-child{color: #000;}
						p:last-child{font-size: small}
						div{
							display: inline-block;
						}
						img{
							float: right;
						}
					}
					.desp{
						margin: 15px 0;
						text-align: left;
					}
					.footer{
						text-align: right;
						i{
							cursor: pointer;
							padding: 5px;
							font-size: 27px;
							color: @icoColor;
							&:hover{color: @icoHc}
						}
					}
				}
				
			}
		}
		.group{
		
		}
		.friend{
			.title{
				text-align: left;
				padding: 30px 0;
				font-size: large;
				p:first-child{color: #000;}
				p:last-child{
					font-size: small;
					color: @icoColor;}
				div{
					display: inline-block;
				}
				img{
					margin-top: 20px;
					float: right;
				}
			}
			.desp{
				padding: 25px 0;
				text-align: left;
				font-size: small;
				border-top: 1px solid @borderColor;
				border-bottom: 1px solid @borderColor;
				p{
					span:first-child{
						margin-right: 15px;
						color: @icoColor;
					}
				}
			}
			.footer{
				margin-top: 30px;
				text-align: center;
				.el-button{
					width: 150px;
				}
			}
		}
	}
</style>
