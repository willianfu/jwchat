<template>
	<div class="bar">
		<img src="../../assets/avatr.jpg" width="35" height="35">
		<div style="margin-top: 20px">
			<div class="item">
				<el-badge :value="50">
					<i class="el-icon-chat-square"></i>
				</el-badge>
			</div>
			<div class="item">
				<el-badge :is-dot="true">
					<i class="el-icon-user"></i>
				</el-badge>
			</div>
			<div class="item">
				<el-badge :is-dot="false">
					<i class="el-icon-news"></i>
				</el-badge>
			</div>
			<div class="item">
				<el-badge :is-dot="false">
					<i class="el-icon-folder-opened"></i>
				</el-badge>
			</div>
			<div class="item">
				<el-badge :is-dot="false">
					<i class="el-icon-bangzhu"></i>
				</el-badge>
			</div>
			<div style="position:fixed; bottom: 0;">
				<div class="item bt">
					<el-badge :is-dot="false">
						<i class="el-icon-connection"></i>
					</el-badge>
				</div>
				<div class="item bt">
					<el-badge :is-dot="false">
						<i class="el-icon-mobile-phone"></i>
					</el-badge>
				</div>
				<div class="item bt">
					<el-badge :is-dot="false">
						<i class="el-icon-s-operation"></i>
					</el-badge>
				</div>
			</div>
			
			
		</div>
	
	</div>
</template>

<script>
    export default {
        name: "left-toolbar",

    }
</script>

<style scoped lang="less">
	
	.bar {
		float: left;
		text-align: center;
		height: 100%;
		width: 50px;
		padding: 20px 5px;
		background-color: rgb(40, 42, 44);
		
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
			.el-badge{
				height: 80px;
				//line-height: 50px;
				i {
					font-size: 21px;
				}
				.el-badge__content{
					border-color: #F56C6C !important;
				}
			}
			
		}
	}
</style>
