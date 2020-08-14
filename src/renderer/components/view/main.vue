<template>
	<div class="main">
		<left-toolbar style="position:fixed; top: 0; left: 0; z-index: 999"></left-toolbar>
		<div class="titles">
			<title-main :title="$store.state.Session.selectSession"></title-main>
		</div>
		<router-view style="margin-left: 60px"/>
	</div>
</template>

<script>
    import {remote} from 'electron'
    import leftToolbar from './left-toolbar'
    import titleMain from './title-main'
    import Chat from "./chat/chat";

    export default {
        name: "index",
        components: {Chat, leftToolbar, titleMain},
        data() {
            return {
            }
        },
        beforeCreate() {
            remote.getCurrentWindow().setSize(800, 550)
            remote.getCurrentWindow().setMinimumSize(800, 550)
        },
	    mounted(){
          this.$router.push('/chat')
	    },
        methods: {
        }
    }
</script>

<style scoped lang="less">
	@import '@/assets/style/theme';
	
	.main {
		height: 100%;
		position: relative;;
		min-width: 700px;
		overflow-x: hidden;
	}
	
	.titles {
		width: 100%;
		background-color: rgb(238, 234, 232);
		//position: absolute;
		top: 0;
	}

</style>
