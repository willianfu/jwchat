<template>
	<div class="cp-gv" v-if="select !== null">
		<div class="new-friends" v-if="select.type === 'newFriend'">
			<div class="search">
				<el-input size="mini" v-model="search" placeholder="搜索对方 手机号 / 邮箱 / 微聊号"></el-input>
				<el-button size="mini" type="primary"><i class="el-icon-search"></i>搜索</el-button>
			</div>
			<ul>
				<li v-for="f in select.data">
					<img :src="f.img" alt="" width="40px" height="40px">
					<div>
						<p>{{f.name}}</p>
						<p>{{f.remark}}</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="subscribe" v-else-if="select.type === 'subscribe'">
		
		</div>
		<div class="group" v-else-if="select.type === 'group'">
		
		</div>
		<div class="friend" v-else-if="select.type === 'friend'">
		
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
            }
	    }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.cp-gv{
		padding: 0 87px;
		border-top: @borderColor;
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
				li{
					border-top: 1px solid @borderColor;
				}
			}
		}
		.subscribe{
		
		}
		.group{
		
		}
		.friend{
		
		}
	}
</style>
