<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="items">
			<view class="item" v-for="(item,index) in items" :key="index">
				<image class="icon" src="/static/图标.svg"></image>
				<view class="theme"><text class="textext">{{item.theme}}</text></view>
				<view class="teacher">{{item.t}}（{{item.num}}/{{item.sum}}）</view>
				<view class="project">{{item.pro}}</view>
				<image class="you" src="/static/右箭头.svg" @click="select"></image>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let items = ref([])
	items.value = [{
			theme: '未知动态环境下机器人路径规划及其在服务器的什么什么什么什么',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践1'
		},
		{
			theme: '面向声表面波传感器应用的AlN基压电薄膜制备和表征',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践2',
		},
		{
			theme: '基于MCU的智能交流电表系统设计',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践3'
		},
		{
			theme: '小型舵机驱动机械臂的单片机控制系统',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践3'
		},
		{
			theme: '面向声表面波传感器应用的AlN基压电薄膜制备和表征',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践4'
		},
		{
			theme: '基于MCU的智能交流电表系统设计',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践5'
		},
		{
			theme: '未知动态环境下机器人路径规划及其在服...',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践6'
		},
		{
			theme: '基于MCU的智能交流电表系统设计',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践7'
		},
		{
			theme: '基于MCU的智能交流电表系统设计',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践8'
		},
		{
			theme: '基于MCU的智能交流电表系统设计',
			t: '张老师',
			num: 5,
			sum: 9,
			pro: '2023级工程实践9'
		},
	]

	function select() {
		uni.navigateTo({
			url: '/pages/s-selected/s-selected'
		});
	}
</script>

<style lang="scss" scoped>
	.containers {
		height: 100vh;
		width: 100vw;
		position: relative;
		/* 添加相对定位 */
		overflow: hidden;
		/* 防止伪元素溢出容器 */
		white-space: nowrap;
		overflow-y: auto;

	}

	.containers::after {
		content: '';
		/* 伪元素内容 */
		position: absolute;
		/* 绝对定位 */
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(235, 239, 250);
		/* 红色背景 */
		z-index: -2;
		/* 确保伪元素在图片之下 */
	}

	.bg {
		position: absolute;
		width: 100vw;
		height: 314.19px;
		top: 0;
		left: 0;
		z-index: -1;
		/* 图片在伪元素之下 */
	}

	.items {
		left: 5vw;
		width: 90vw;
		position: absolute;
		top: 25px;
	}

	.item {
		border-radius: 12px;
		opacity: 1;
		background: #FFFFFF;
		height: 92px;
		margin-bottom: 10px;
		position: relative;
	}

	.icon {
		width: 18px;
		height: 18px;
		position: absolute;
		left: 15px;
		top: 15px;
	}

	.theme {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: 600;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		color: #08090D;
		position: absolute;
		top: 15px;
		left: 45px;
		width: 80%;
	}

	.textext {
		width: 100%;
		white-space: nowrap;
		/* 保持文本在一行显示 */
		overflow: hidden;
		/* 隐藏超出部分 */
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
	}

	.teacher {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 12px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #7D807F;
		position: absolute;
		top: 40px;
		left: 45px;
	}

	.project {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 12px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #7D807F;
		position: absolute;
		bottom: 15px;
		left: 45px;
	}

	.you {
		width: 16px;
		height: 16px;
		position: absolute;
		top: 40%;
		right: 15px;
	}
</style>