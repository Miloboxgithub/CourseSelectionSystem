<template>
	<view class="containersss">
		<CustomTabBar />
	</view>
</template>
<script>
	import CustomTabBar from "./components/CustomTabBar.vue";

	export default {
		components: {
			CustomTabBar
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	#app-wrapper {
		/* 默认情况下让内容占据全部视口宽度 */
		width: 100%;
		box-sizing: border-box;
		/* 确保padding和border包含在元素的宽度内 */
		display: flex;
		flex-direction: column;
		align-items: center;
		/* 水平居中 */
	}

	/* 当屏幕宽度大于750px时，限制最大宽度为750px */
	@media screen and (min-width: 751px) {
		#app-wrapper {
			max-width: 750px;
			margin: 0 auto;
			/* 居中显示 */
			padding: 0 15px;
			/* 可以根据需要调整内边距 */
		}

		#app {
			width: 450px;
			margin: 0 auto;
			/* 设置左右外边距为auto，实现水平居中 */
		}

		.tabbar {
			width: 450px;
			margin: 0 auto;
			/* 居中显示 */
		}
	}

	.containersss {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>