<template>
	<scroll-view class="containers" scroll-y="true">
		<image src="/static/背景@1x.png" mode="aspectFill" class="bg"></image>
		<view class="headtext">学生端</view>

		<image class="zd" src="/static/4645.svg" mode=""></image>
		<view class="dz">中德学院</view>
		<view class="nnn">
			工程项目选课系统
		</view>
		<view class="xuan">{{pros}}
		</view>
		<view class="sss">精准匹配课程需求 简化选课流程</view>
		<view class="zhong">
			<view class="deadline">选题截止时间：{{Deadline}}</view>
		</view>
		<view class="items">
			<view class="item" v-for="(item,index) in items" :key="index">
				<image class="icon" src="/static/图标.svg"></image>
				<view class="theme"><text class="textext">{{item.theme}}</text></view>
				<view class="teacher">{{item.t}}（{{item.num}}/{{item.sum}}）</view>
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
		onShow,
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getCourse,
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
	// 		sum: 9
	// 	},
	// 	{
	// 		theme: '面向声表面波传感器应用的AlN基压电薄膜制备和表征',
	// 		t: '张老师',
	// 		num: 5,
	// 		sum: 9
	// 	},
	// 	{
	// 		theme: '基于MCU的智能交流电表系统设计',
	// 		t: '张老师',
	// 		num: 5,
	// 		sum: 9
	// 	}
	// ]
	let Deadline = ref('')
	let profession = ref([])
	profession.value = [
		'2024电子专业'
	]
	let pros = ref('')

	function news() {
		uni.navigateTo({
			url: '/pages/t-publish/t-publish'
		});
	}

	function formatDate(dateString) {
		// 解析日期字符串为Date对象
		const date = new Date(dateString);

		// 验证日期是否有效
		if (isNaN(date.getTime())) {
			throw new Error('Invalid date');
		}

		// 使用Intl.DateTimeFormat来格式化日期
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		const formatter = new Intl.DateTimeFormat('zh-CN', options);
		const formattedDate = formatter.format(date);

		// 将格式化后的日期分割并重新组合为“月日”格式
		const parts = formattedDate.split(' ');
		const monthDay = parts[0];
		//console.log(monthDay)
		return monthDay;
	}

	async function select(code) {

		let res = await getCourseContent(code)

		console.log(res, 'chccccc')
		if (res.code == 0) {
			mainStore.setSelectData(res.data, code)
			uni.navigateTo({
				url: '/pages/s-select/s-select'
			});
		} else {
			uni.showToast({
				title: '获取数据失败!',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}
	}
	const showModal1 = ref(false);
	const showModal2 = ref(false);
	const showModal3 = ref(false);

	function closeModal() {
		showModal1.value = false;
		showModal2.value = false;
		showModal3.value = false;
	}

	function confirmAction() {
		// 确认操作的逻辑
		closeModal();
	}

	function toggleModal(e) {
		if (e) {
			showModal3.value = true
		}
	}
	async function getItems() {
		const res = await getCourse()
		console.log(res)
		items.value = []
		if (res.code == 0) {
			Deadline.value = res.data.project_info.selectEtime
			pros.value = res.data.grade + res.data.majorName
			let op = res.data.course
			if (op != null) {
				op.forEach((i, k) => {
					items.value.push({
						theme: i.course_title,
						t: i.teacher_name,
						num: i.select_count,
						sum: i.student_requirements,
						id: i.course_code
					})
				})
			}
		} else {
			let msg = res.message
			pros.value = res.data.grade + res.data.majorName
			Deadline.value = '无'
			uni.showToast({
				title: msg,
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
	.zd {
		width: 59px;
		height: 23px;
		position: absolute;
		top: 81px;
		left: 43%;
	}

	.dz {
		width: 59px;
		height: 23px;
		position: absolute;
		top: 79px;
		left: 44%;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 12px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #FFFFFF;
	}

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

	.headtext {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		/* 颜色/中性色色板/#OAOAOA */
		color: #0A0A0A;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5vh;
	}

	.xuan {
		position: absolute;
		left: 18px;
		top: 139px;
		width: auto;
		height: 30px;
		/* 自动布局 */
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 5px 9px;
		border-radius: 78px;
		opacity: 1;
		background: linear-gradient(270deg, #C6DAFA 0%, #DDEBF4 100%);
		box-sizing: border-box;
		border: 1px solid rgba(255, 255, 255, 0.34);
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 16px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		font-variation-settings: "opsz" auto;
		color: #09101D;
	}

	.xuan image {
		width: 16px;
		height: 16px;
		margin-left: 2px;
	}

	.nnn {
		position: absolute;
		left: 21px;
		top: 100px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 22px;
		font-weight: 600;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: 0.5px;
		font-variation-settings: "opsz" auto;
		background: linear-gradient(180deg, #050A24 0%, #24418C 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	.sss {
		position: absolute;
		left: 21px;
		top: 175px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: 0.2px;
		font-variation-settings: "opsz" auto;
		color: #8E939A;
	}

	.deadline {
		position: absolute;
		left: 5%;
		top: 233px;
		width: 90%;
		height: 34px;
		/* 自动布局 */
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 7px 0px;
		border-radius: 12px;
		opacity: 1;
		background: rgba(255, 255, 255, 0.29);
		box-sizing: border-box;
		border: 1px solid #BCCCF4;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: 0.6px;
		font-variation-settings: "opsz" auto;
		color: #4B71E8;
	}

	.items {
		left: 5%;
		width: 90%;
		position: absolute;
		top: 286px;
	}

	.item {
		border-radius: 12px;
		opacity: 1;
		background: #FFFFFF;
		height: 71px;
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
		top: 39px;
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