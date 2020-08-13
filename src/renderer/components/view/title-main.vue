<template>
	<div class="title">
		<div class="lt">
			<el-input placeholder="搜索" prefix-icon="el-icon-search"></el-input>
			<span>
				<i class="el-icon-plus"></i>
			</span>
		</div>
		<div class="rt">
			<div class="rt-top">
				<span :style="isTop? 'background-color: rgb(208, 206, 205)':''"><i class="el-icon-paperclip" @click="toTop"></i></span>
				<span><i class="el-icon-minus" @click="minWin"></i></span>
				<span><i class="el-icon-crop" @click="maxWin"></i></span>
				<span><i class="el-icon-close" @click="exit"></i></span>
			</div>
			<div class="rt-bt" v-if="title !== null">
				<span>{{title.name}}</span>
				<i class="el-icon-more"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import {remote} from 'electron'
	
    export default {
        name: "title-main",
	    props:['title'],
	    data(){
            return{
                isMax: false,
	            isTop: false
            }
	    },
	    methods:{
            toTop(){
                remote.getCurrentWindow().setAlwaysOnTop(!this.isTop)
                this.isTop = !this.isTop
            },
            exit(){
                //remote.app.quit()
                remote.getCurrentWindow().hide()
            },
            minWin(){
                remote.getCurrentWindow().minimize()
            },
            maxWin(){
                if (this.isMax){
                    remote.getCurrentWindow().unmaximize()
                    this.isMax = false
                }else {
                    remote.getCurrentWindow().maximize()
                    this.isMax = true
                }
                
            }
	    }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.title{
		margin-left: 60px;
		width: 100%;
		height: 64px;
		background-color: @viewBgc;
		-webkit-app-region: drag;
		/deep/ .el-input{
			margin-top: 20px;
			margin-left: 10px;
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
			float: left;
			width: 250px;
			height: 100%;
			background-color: @groupBgc;
			span{
				margin-left: 8px;
				cursor: pointer;
				padding: 4px 4.5px;
				border-radius: 5px;
				background-color: rgb(219, 217, 216);
				-webkit-app-region: no-drag;
				&:hover{
					background-color: rgb(208, 206, 205);
				}
			}
		}
		.rt{
			float: left;
			height: 100%;
			.rt-top{
				position: fixed;
				top: 0px;
				right: 0px;
				width: 100%;
				text-align: right;
				span{
					cursor: pointer;
					padding: 5px 9px;
					//border: 1px solid red;
					margin: 0 0;
					&:hover{
						background-color: rgb(229, 229, 229);
					}
				}
				&>span:last-child{
					&:hover{
						background-color: @errorColor;
						i{
							color: #fff;
						}
					}
				}
				i{
					margin-top: 10px;
					font-size: smaller;
					color: @icoColor;
					-webkit-app-region: no-drag;
				}
			}
			.rt-bt{
				margin-left: 30px;
				margin-top: 28px;
				font-size: large;
				font-family: @primaryFont;
				font-weight: 400;
				i{
					position: fixed;
					cursor: pointer;
					color: @icoColor;
					top: 36px;
					right: 10px;
					-webkit-app-region: no-drag;
					&:hover{
						color: @icoHc;
					}
				}
			}
		}
	}
</style>
