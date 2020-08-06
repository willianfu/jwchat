<template>
	<div class="title">
		<div class="lt" >
			<el-input placeholder="搜索" prefix-icon="el-icon-search"></el-input>
		</div>
		<div class="rt">
			<div>嗦泡大队</div>
			<i></i>
			
		</div>
	</div>
</template>

<script>
    export default {
        name: "title-main"
    }
</script>

<style scoped lang="less">
	.title{
		margin-left: 50px;
		width: 100%;
		height: 64px;
		background-color: rgb(245, 245, 245);
		-webkit-app-region: drag;
		/deep/ .el-input{
			margin-top: 20px;
			margin-left: 20px;
			width: 190px;
			-webkit-app-region: no-drag;
			.el-input__inner{
				height: 25px;
				background-color: rgb(219, 217, 216);
			}
			.el-input__icon{
				line-height: 29px;}
			input::-webkit-input-placeholder {
				font-size: smaller;
				color: #7f7f7f;
			}
			input::-moz-input-placeholder {
				color: #7f7f7f;
			}
			input::-ms-input-placeholder {
				color: #7f7f7f;
			}
		}
		.lt{
			width: 260px;
			height: 100%;
			background-color:rgb(238, 234, 232);
		}
		.rt{
			width: 260px;
			height: 100%;
		}
	}
</style>
