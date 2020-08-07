<template>
	<div class="login">
		<div class="title">
			<i class="el-icon-close" @click="exit"></i>
		</div>
		<div class="body">
			<div class="logo" style="text-align:center;margin-top: 20px;">
				<transition name="fade">
					<img src="../assets/logo-g.png" width="80" height="80" v-show="showLogo"/>
				</transition>
			</div>
			<transition name="fade">
				<div v-show="showFont" class="ft">微聊，是一种生活方式</div>
			</transition>
			<transition name="fade">
				<div v-show="showForm">
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
			</transition>
		</div>
	</div>
</template>

<script>
    import {remote, app} from 'electron'

    export default {
        name: "login",
        data() {
            return {
                showLogo: false,
                showForm: false,
                showFont: false,
                user: {
                    account: '',
                    password: ''
                }
            }
        },
        beforeCreate() {
            //remote.getCurrentWindow().setMaximumSize(350, 500)
            remote.getCurrentWindow().setSize(350, 530,false)
        },
        mounted() {
            this.showLogo = true;
            let that = this;
            setTimeout(() => {
                that.showFont = true
            }, 300)
            setTimeout(() => {
                that.showFont = false
                that.showForm = true
            }, 2500)
        },
        methods: {
            exit() {
                remote.app.quit()
            },
            login() {
                this.$router.push('/main')
            }
        }
    }
</script>

<style scoped lang="less">
	.login {
		height: 100%;
		min-width: 340px;
		overflow: hidden;
	}
	.ft{
		position: fixed;
		top: 250px;
		left: 85px;
		font-size: large;
		color: #7f7f7f;
		text-align:center;
	}
	/deep/ .body {
		display: inline-block;
		padding: 0 20px;
		min-width: 310px;
		height: 100%;
		background-color: rgb(239, 239, 239);
		
		.submit {
			background-color: #07C160;
			border-color: #07C160;
			
			&:hover {
				background-color: #07d85d;
				border-color: #07C160;
			}
			
			margin-top: 20px;
			width: 100%;
		}
		
		.option {
			text-align: center;
			
			.el-button--text {
				color: #07C160;
			}
		}
		
		.el-input {
			margin: 10px 0;
			
			.el-input__inner {
				outline: none;
				height: 45px;
			}
		}
		
		.el-button {
			height: 45px;
		}
	}
	
	.title {
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
		
		i:hover {
			color: #07C160;
		}
	}
	
	.el-input.is-active .el-input__inner, .el-input__inner:focus {
		border-color: #07C160 !important;
	}
	
	.fade-enter-active, .fade-leave-active {
		transition: opacity 3s;
	}
	
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
