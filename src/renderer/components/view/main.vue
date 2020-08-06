<template>
	<div class="main">
		<left-toolbar style="position:fixed; top: 0; left: 0; z-index: 999"></left-toolbar>
		<div class="titles">
			<title-main></title-main>
		</div>
		
	</div>
</template>

<script>
    import {remote} from 'electron'
    import leftToolbar from './left-toolbar'
    import titleMain from './title-main'
    
    export default {
        name: "main",
        components:{leftToolbar, titleMain},
	    data(){
            return{}
	    },
	    beforeCreate() {
            //remote.getCurrentWindow().setMaximumSize(300,400)
            remote.getCurrentWindow().setMinimumSize(800,600)
        }
    }
</script>

<style scoped>
	.main{
		height: 100%;
	}
	.titles{
		width: 100%;
		float: left;
	}
</style>
