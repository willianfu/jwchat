<template>
	<div class="bar" @click.stop="showOptions = false">
		<img src="../../assets/image/avatr.jpg" width="35" height="35">
		<div style="margin-top: 20px">
			<div class="item" v-for="(m,index) in menus">
				<el-badge :value="m.value" :is-dot="m.isDot" :hidden="m.value === 0">
					<i :class="m.icon" @click="to(m.path); now = index;"
					   :style="now === index ? 'color: rgb(7, 193, 96)':''"></i>
				</el-badge>
			</div>
			
			<div style="position:fixed; bottom: 0;">
				<div class="item bt">
					<el-badge :is-dot="false">
						<i class="el-icon-connection" @click="to()"></i>
					</el-badge>
				</div>
				<div class="item bt">
					<el-badge :is-dot="false">
						<i class="el-icon-mobile-phone" @click="to()"></i>
					</el-badge>
				</div>
				<div class="item bt">
					<el-badge :is-dot="false">
						<i class="el-icon-s-operation" @click.stop="showOptions = !showOptions" :modal="false"></i>
					</el-badge>
					<div v-if="showOptions" class="options">
						<ul>
							<li>意见反馈</li>
							<li>备份与恢复</li>
							<li @click="logoutDialog = true">退出账号</li>
							<li>设置</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<el-dialog title="退出登录" :visible.sync="logoutDialog" width="360px" :center="false" :close-on-click-modal="false">
			<span>退出后将无法收到新消息，确认退出登录？</span>
			<span slot="footer" class="dialog-footer">
			    <el-button type="primary" size="mini" @click="logout">确 定</el-button>
				<el-button  size="mini"  @click="logoutDialog = false">取 消</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
    export default {
        name: "left-toolbar",
        data() {
            return {
                now: 0,
                logoutDialog: false,
                showOptions: false,
                menus: [
                    {icon: 'el-icon-chat-square', path: 'chat', value: 0, isDot: false},
                    {icon: 'el-icon-user', path: 'contact', value: 0, isDot: true},
                    {icon: 'el-icon-news', path: '', value: 0, isDot: false},
                    {icon: 'el-icon-folder-opened', path: '', value: 0, isDot: false},
                    {icon: 'el-icon-bangzhu', path: '', value: 0, isDot: false},
                ]
            }
        },
        methods: {
            to(path) {
                if (path !== null && path !== undefined) {
                    console.log('=> /main/' + path)
                    this.$store.commit('setSelectSession', null)
                    this.$router.push(path)
                }
            },
            logout() {
                this.$router.push('/')
                this.$message({message: '请登录', center: true})
            }
        }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.bar {
		float: left;
		text-align: center;
		height: 100%;
		width: 50px;
		padding: 20px 5px;
		background-color: rgb(35, 37, 41);
		
		.img {
			display: block;
			border-radius: 10px;
			margin-bottom: 50px;
		}
		
		/deep/ .item {
			cursor: pointer;
			color: rgb(131, 131, 131);
			width: 50px;
			height: 45px;
			font-weight: 100;
			
			&:hover {
				color: rgb(150, 150, 150);
			}
			
			.el-badge {
				height: 80px;
				//line-height: 50px;
				i {
					font-size: 21px;
				}
				
				.el-badge__content {
					border-color: #F56C6C !important;
				}
			}
		}
		/deep/ .el-dialog{
			text-align: left;
		}
		.options {
			position: fixed;
			left: 60px;
			bottom: 15px;
			width: 135px;
			background-color: rgb(41, 41, 42);
			
			li {
				color: rgba(160, 160, 160, 0.9);
				padding-left: 10px;
				text-align: left;
				font-size: 13px;
				height: 45px;
				line-height: 45px;
				
				&:hover {
					background-color: rgba(48, 49, 51, 0.9);
				}
			}
		}
	}
</style>
