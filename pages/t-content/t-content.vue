<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="theme">
			1. 题目
		</view>
		<view class="hui">{{theme}}</view>
		<view class="theme">
			2. 经费
		</view>
		<view class="huis">{{fee}}元</view>
		<view class="theme">
			3.学生人数
		</view>
		<view class="huis">{{stunum}}</view>
		<view class="bao">报名中指定的学生</view>
		<view class="stus" v-for="(item,index) in stus" :key="index">
			<view>
				<view class="name">{{item.name}}</view>
				<view class="msg">学号：{{item.num}}</view>
				<view class="msg">专业：{{item.pros}}</view>
				<view class="msg">班级：{{item.ban}}</view>
				<view class="msg">电话：{{item.phone}}</view>
			</view>
		</view>
		<view class="bao">报名中未指定的学生</view>
		<view class="stusno" v-for="(item,index) in stusno" :key="index">
			<view>
				<view class="name">{{item.name}}</view>
				<view class="msg">学号：{{item.num}}</view>
				<view class="msg">专业：{{item.pros}}</view>
				<view class="msg">班级：{{item.ban}}</view>
				<view class="msg">电话：{{item.phone}}</view>
			</view>
		</view>
	</scroll-view>
	<view class="daodao">
		<view class="daos" @click="daos">结果导出</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	// 在子组件或任何其他页面中
	import {
		useMainStore
	} from '@/stores/useMainStore';
	import {
		getResultExecl
	} from '../../api'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import axios from "axios";
	const mainStore = useMainStore();
	let theme = ref('')
	let fee = ref()
	let stunum = ref()
	let stus = ref([])
	let stusno = ref([])
	const p = ref(null)
	const pcode = ref(null)
	const code = ref(null)
	// stusno.value = [{
	// 	name: '张三',
	// 	num: 123456789098765,
	// 	pros: '计算机与科学',
	// 	ban: '大一四班',
	// 	phone: 1534567890
	// }]

	async function daos() {
		let res = await getResultExecl(p.value, theme.value, pcode.value, code.value)
		console.log(res)
		// uni.showToast({
		// 	title: '结果已导出!',
		// 	icon: 'none', // 使用 'none' 表示纯文本弹窗
		// 	duration: 1000 // 显示时长为 2000 毫秒
		// });
		// setTimeout(() => {
		// 	uni.navigateTo({
		// 		url: '/pages/t-index/t-index'
		// 	});
		// }, 1000);

	}
	onShow(() => {
		console.log(mainStore.shareResult, 'ccccc');
		let op = mainStore.shareResult
		if (op != null) {
			pcode.value = op.projectPracticeCode
			code.value = op.code
			p.value = op.projectPracticeName
			theme.value = op.title
			fee.value = op.budget
			stunum.value = op.studentRequirements
			if (op.Enrolls != null) {
				let yes = []
				let no = []
				op.Enrolls.forEach((i, k) => {
					let t = {
						name: i.Student.name,
						num: i.Student.sno,
						pros: i.Student.majorName,
						ban: i.Student.class,
						phone: i.Student.phone
					}
					if (i.isappointment == 1) {
						yes.push(t)
					} else no.push(t)
				})
				stus.value = yes
				stusno.value = no
			}
			mainStore.setResultData(null)
		}
	});
</script>

<style lang="scss" scoped>
	.daodao {
		opacity: 1;
		background: #FFFFFF;
		width: 100vw;
		position: fixed;
		bottom: 0;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.daos {
		border-radius: 6px;
		opacity: 1;
		background: #2277F8;
		height: 45px;
		width: 90vw;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 15px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #FFFFFF;
	}

	.containers {
		width: 90vw;
		margin-left: 5vw;
		height: auto;
		overflow-y: auto;
		padding-bottom: 90px;
	}

	.theme {
		margin-top: 30px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #333333;
	}

	.hui {
		margin-top: 15px;
		height: 81px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		width: 100%;
		padding: 10px;
	}

	.huis {
		margin-top: 15px;
		height: 34px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		width: 100%;
		padding: 10px;
		display: flex;
		align-items: center;

	}

	.bao {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
		margin-top: 40px;
	}

	.stus {
		margin-top: 10px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		height: 127px;
		padding: 12px;
		margin-bottom: 8px;
		display: flex;
		justify-content: space-between;
	}

	.stusno {
		margin-top: 10px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		border: 1px dashed #2077F8;
		height: 127px;
		padding: 12px;
		margin-bottom: 8px;
		display: flex;
		justify-content: space-between;
	}

	.name {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 15px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
	}

	.msg {
		margin-top: 6px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #999CA2;
	}
</style>