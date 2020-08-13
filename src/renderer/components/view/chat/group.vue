<template>
	<div class="cp-group">
		<div>
			<div class="img">
				<el-badge :is-dot="group.unRead > 0 && group.type === 'group'"
				          :value="group.unRead" :hidden="0 === group.unRead">
					<img :src="group.img" width="40" height="40">
				</el-badge>
			</div>
			<div class="content">
				<p>{{group.name}}
				</p>
				<span v-show="group.unRead !== undefined && group.unRead > 0">[{{group.unRead}}条]</span>
				<span style="font-size: 12px">{{subMsg(group.msgs)}}</span>
			</div>
		</div>
		<span class="time">
			{{getTime(group.msgs)}}
		</span>
	</div>
</template>

<script>
    export default {
        name: "group",
        props: [
            'group','select'
        ],
        data() {
            return {
            
            }
        },
	    methods:{
            subMsg(msg){
                if (msg !== undefined && msg !== null && msg.length > 0){
                    return this.subStr(this.filterHtml(msg[msg.length - 1].content))
                }else{
                    return ''
                }
            },
		    subStr(msg){
                if (msg !== undefined && msg !== null){
                    if (msg.length > 10){
                        return msg.substring(0, 20) + '...'
                    }
                    return msg
                }else{
                    return ''
                }
		    },
		    getTime(t){
                if (t !== undefined && t !== null && t.length > 0){
                    let time = new Date(t[t.length -1].time).toLocaleTimeString()
                    time = time.substring(0, time.length-3)
                    return time
                }else{
                    return ''
                }
		    },
            filterHtml(m) {
                if (m !== undefined && m !== null && m.length > 0){
                    let msg = m.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
                    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
                    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
                    return msg;
                }
                return ''
            }
	    }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.cp-group {
		height: 50px;
		padding-top: 6px;
		font-size: small;
		position: relative;
		p {
			color: black;
			margin: 5px 0;
		}
		
		/deep/ .img {
			display: inline-block;
			.el-badge__content{
				font-size: 8px;
				height: 15px;
				line-height: 14px;
			}
		}
		.time{
			position: absolute;
			font-size: smaller;
			right: 0;
			top: 5px;
		}
		.content {
			//display: inline-block;
			position: absolute;
			left: 50px;
			top: 2px;
		}
	}
</style>
