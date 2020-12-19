<template>
	<div>
		<header>{{ componentName }}</header>
		<div class="router-view__block">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			componentName: '',
		}
	},
	watch: {
		$route(this: any, to: any) {
			const index = to.path.lastIndexOf('/')
			const componentName = to.path.slice(index + 1)
			this.componentName =
				componentName[0]?.toUpperCase() + componentName.slice(1)
		},
	},
}
</script>

<style>
body {
	margin: 0;
	padding: 0;
	background: white;
	min-height: 100%;
	font-family: '微软雅黑 Light', sans-serif;
}

header {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 56px;
	background-color: #fff;
	font-weight: 500;
	font-size: 18px;
}

.router-view__block {
	padding: 0 15px 30px;
}

* {
	box-sizing: border-box;
}
</style>
