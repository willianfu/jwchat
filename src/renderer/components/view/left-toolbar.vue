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
			
			&:hover {
				color: rgb(150, 150, 150);
			}
			.el-badge{
				height: 80px;
				//line-height: 50px;
				i {
					font-size: larger;
				}
				.el-badge__content{
					border-color: #F56C6C !important;
				}
			}
			
		}
	}
</style>
