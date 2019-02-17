<template>
	<div id="app">
		<el-form label-position="top" label-width="80px" :model="formData">
			<el-form-item label="用户名">
				<el-input v-model="formData.username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="formData.password"></el-input>
			</el-form-item>
			<el-button type="danger" round>登录</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data () {
			return {
				formData: {
					username:'',
					password:''
				}
			}
		}
	}
</script>

<style>
</style>
