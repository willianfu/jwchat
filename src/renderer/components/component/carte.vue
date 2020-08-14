<template>
	<div class="cp-carte">
		<div class="title">
			<div>
				<p>{{user.name}}
					<i :class="user.sex?'el-icon-male':'el-icon-female'"
					   :style="user.sex?'color: rgb(70, 182, 239)':'color: rgb(243, 126, 125)'">
					</i>
				</p>
				<p>{{user.num}}</p>
			</div>
			<img :src="user.img" alt="" width="55px" height="55px">
		</div>
		<div class="footer">
			<i class="el-icon-plus"></i>
		</div>
	</div>
</template>

<script>
    export default {
        name: "carte",
	    props:['user']
    }
</script>

<style scoped>

</style>
