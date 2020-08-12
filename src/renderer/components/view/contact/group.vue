<template>
	<div class="list">
		<div v-for="n in contacts">
			<p>{{n.title}}</p>
			<ul>
				<li v-for="l in n.list">
					<img :src="l.img" width="35" height="34" alt="">
					<span>{{l.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
        name: "group",
        props: ['contacts'],
        data() {
            return {
            }
        },
        mounted() {
        
        }
    }
</script>

<style scoped lang="less">
	.list {
		float: left;
		height: 100%;
		width: 250px;
		padding: 0;
		margin: 0 0;
		background-color: rgb(238, 234, 232);
		
		p {
			margin: 15px 0px 3px 12px;
			font-size: 12px;
			color: #999999;
		}
		
		&::-webkit-scrollbar {
			background-color: rgb(238, 234, 232);
		}
		
		ul {
			border-bottom: 1px solid rgb(224, 221, 220);
		}
		
		li {
			font-family: 微软雅黑, serif;
			font-size: small;
			list-style-type: none;
			background-color: rgb(238, 234, 232);
			padding: 12px 12px;
			position: relative;
			span {
				position: absolute;
				left: 60px;
				bottom: 24px;
			}
			
			&:hover {
				background-color: rgb(222, 220, 219);
			}
		}
	}
</style>

