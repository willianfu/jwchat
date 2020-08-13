<template>
	<div class="list">
		<div v-for="n in contacts">
			<p>{{n.title}}</p>
			<ul>
				<li v-for="l in n.list" @click="selects(l, n.type)"
				    :style="l === select ? 'background-color:rgb(201, 198, 198)' : ''">
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
                select: null,
            }
        },
        mounted() {
        
        },
	    methods:{
            selects(s, type){
                this.select = s
                this.select.type = type
                this.$store.commit('setSelectSession', s)
            }
	    }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.list {
		float: left;
		height: 100%;
		width: 250px;
		padding: 0;
		margin: 0 0;
		background-color: @groupBgc;
		
		p {
			margin: 15px 0px 3px 12px;
			font-size: 12px;
			color: #999999;
		}
		
		&::-webkit-scrollbar {
			background-color: @groupBgc;
		}
		
		ul {
			border-bottom: 1px solid @borderColor;
		}
		
		li {
			font-family: @primaryFont;
			font-size: small;
			list-style-type: none;
			background-color: @groupBgc;
			padding: 12px 12px;
			position: relative;
			span {
				position: absolute;
				left: 60px;
				bottom: 24px;
			}
			
			&:hover {
				background-color: @hoverColor;
			}
		}
	}
</style>

