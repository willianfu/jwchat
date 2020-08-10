<template>
	<div class="bar">
		<img src="../../assets/avatr.jpg" width="35" height="35">
		<div style="margin-top: 20px">
			<div class="item" v-for="(m,index) in menus">
				<el-badge :value="m.value" :is-dot="m.isDot" :hidden="m.value === 0">
					<i :class="m.icon" @click="to(m.path); now = index;" :style="now === index ? 'color: rgb(7, 193, 96)':''"></i>
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
						<i class="el-icon-s-operation" @click="to()"></i>
					</el-badge>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>
    export default {
        name: "left-toolbar",
	    data(){
            return{
                now: 0,
                menus:[
                    {icon:'el-icon-chat-square', path:'chat', value:0, isDot: false},
                    {icon:'el-icon-user', path:'contact', value:0, isDot: true},
                    {icon:'el-icon-news', path:'', value:0, isDot: false},
                    {icon:'el-icon-folder-opened', path:'', value:0, isDot: false},
                    {icon:'el-icon-bangzhu', path:'', value:0, isDot: false},
                ]
            }
	    },
	    methods:{
            to(path){
                if (path !== null && path !== undefined){
                    console.log('=> /main/' + path)
                    this.$router.push(path)
                }
            }
	    }
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
