<template>
	<div class="login">
		<div class="title">
			<i class="el-icon-close" @click="exit"></i>
		</div>
		<div class="body">
			<div class="logo" style="text-align:center;margin-top: 20px;">
				<img src="../assets/logo-g.png" width="80" height="80" />
			</div>
			<div style="margin-top: 50px">
				<el-input v-model="user.account" placeholder="请输入账号"></el-input>
				<el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
				<el-button type="primary" class="submit" @click="login">登 录</el-button>
			</div>
			<div class="option">
				<el-button type="text" size="mini">注册账号</el-button>
				<el-button type="text" size="mini">忘记密码</el-button>
				<el-button type="text" size="mini">扫码登录</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {remote} from 'electron'
	
    export default {
        name: "login",
        data(){
            return {
                user:{
                    account:'',
	                password:''
                }
            }
	    },
	    beforeCreate(){
            //remote.getCurrentWindow().setMaximumSize(300,400)
            remote.getCurrentWindow().setMinimumSize(300,400)
	    },
	    methods:{
            exit(){
                this.$confirm('您却确定退出吗?', '提示', {
                    confirmButtonText: '退出',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消退出'
                    });
                });
            },
		    login(){
                this.$router.push('/main')
		    }
	    }
    }
</script>

<style scoped lang="less">
	.login{
		
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	/deep/ .body{
		display: inline-block;
		padding: 0 20px;
		height: 100%;
		background-color: rgb(239, 239, 239);
		.submit{
			background-color: #07C160;
			border-color: #07C160;
			&:hover{
				background-color: #07d85d;
				border-color: #07C160;
			}
			margin-top: 20px;
			width: 100%;
		}
		.option{
			text-align: center;
			.el-button--text{
				color: #07C160;
			}
		}
		.el-input{
			margin: 10px 0;
			.el-input__inner{
				outline: none;
				height: 45px;
			}
		}
	
		.el-button{
			height: 45px;
		}
	}
	.title{
		width: 100%;
		height: 50px;
		background-color: rgb(239, 239, 239);
		-webkit-app-region: drag;
		i {
			cursor: pointer;
			float: right;
			margin-right: 15px;
			margin-top: 15px;
			-webkit-app-region: no-drag;
		}
		i:hover{color: #07C160;}
	}
	
	.el-input.is-active .el-input__inner, .el-input__inner:focus{
		border-color: #07C160 !important;
	}
</style>
