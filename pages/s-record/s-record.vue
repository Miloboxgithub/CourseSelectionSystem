<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="items">
			<view class="item" v-for="(item,index) in items" :key="index">
				<image class="icon" src="/static/图标.svg"></image>
				<view class="theme"><text class="textext">{{item.theme}}</text></view>
				<view class="teacher">{{item.t}}（{{item.num}}/{{item.sum}}）</view>
				<view class="project">{{item.pro}}</view>
				<image class="you" src="/static/右箭头.svg" @click="select(item.id)"></image>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app';
	import {
		getRecord,
		getCourseContent
	} from '../../api';
	import axios from "axios";
	import {
		useMainStore
	} from '@/stores/useMainStore';
	const mainStore = useMainStore();
	let items = ref([])
	// items.value = [{
	// 		theme: '未知动态环境下机器人路径规划及其在服务器的什么什么什么什么',
	// 		t: '张老师',
	// 		num: 5,
	// 		sum: 9,
	// 		pro: '2023级工程实践1'
	// 	},
	// 	{
	// 		theme: '面向声表面波传感器应用的AlN基压电薄膜制备和表征',
	// 		t: '张老师',
	// 		num: 5,
	// 		sum: 9,
	// 		pro: '2023级工程实践2',
	// 	},
	// ]

	async function select(code) {
		let res = await getCourseContent(code)
		console.log(res, 'cfff')
		if (res.code == 0) {
			mainStore.setSelectData(res.data, code)
			uni.navigateTo({
				url: '/pages/s-selected/s-selected'
			});
		} else {
			uni.showToast({
				title: '获取数据失败!',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}

	}
	async function getItems() {
		const res = await getRecord()
		console.log(res, 'ggg')
		items.value = []
		if (res.code == 0) {
			let op = res.data.course
			if (op != null) {
				op.forEach((i, k) => {
					items.value.push({
						theme: i.course_title,
						t: i.teacher_name,
						num: i.select_count,
						sum: i.student_requirements,
						id: i.course_code,
						pro: i.projectpractice_name
					})
				})
			}
		} else {
			uni.showToast({
				title: '获取数据失败!',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}
	}
	onShow(() => {
		getItems()
	})
</script>

<style lang="scss" scoped>
	.containers {
		height: 100vh;
		width: 100%;
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
		width: 100%;
		height: 314.19px;
		top: 0;
		left: 0;
		z-index: -1;
		/* 图片在伪元素之下 */
	}

	.items {
		left: 5%;
		width: 90%;
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