<template>
	<div class="main">
		<left-toolbar style="position:fixed; top: 0; left: 0; z-index: 999"></left-toolbar>
		<div class="titles">
			<title-main :select="select"></title-main>
		</div>
		<router-view/>
	</div>
</template>

<script>
    import {remote} from 'electron'
    import leftToolbar from './left-toolbar'
    import titleMain from './title-main'
    import Chat from "./chat";

    export default {
        name: "index",
        components: {Chat, leftToolbar, titleMain},
        data() {
            return {
                select: null,
            }
        },
        beforeCreate() {
            //remote.getCurrentWebContents().closeDevTools()
            remote.getCurrentWindow().setSize(800, 800)
            remote.getCurrentWindow().setMinimumSize(800, 500)
        },
	    mounted(){
          this.$router.push('/chat')
	    },
        methods: {
        }
    }
</script>

<style scoped lang="less">
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
