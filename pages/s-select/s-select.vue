<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="headers">{{title}}</view>
		<view class="xiao"></view>
		<view class="theme">
			1. 项目内容
		</view>
		<view class="hui">{{content}}</view>
		<view class="theme">
			2. 最终成果展现要求
		</view>
		<view class="hui">{{require}}</view>
		<view class="theme">
			3. 已选该题目学生
		</view>
		<view class="huis" v-for="(item,index) in selected" :key="index">
			<view class="name">{{item.name}}</view>
			<view class="msg">年级：{{item.grade}}</view>
			<view class="msg">班级：{{item.ban}}</view>
			<view class="msg">专业：{{item.major}}</view>
		</view>
	</scroll-view>
	<view class="daodao" v-if="!showModal">
		<view class="daos" @click="daos">提交选课</view>
	</view>
	<!-- 蒙层背景 -->
	<view v-if="showModal" class="mask">
		<!-- 蒙层内容 -->
		<view class="modal">
			<!-- 蒙层内部内容 -->
			<view class="dels" @click="xuan()">
				确认选课
			</view>
			<view class="footer" @click="closeModal">
				取消
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		submitSelectCourse
	} from '../../api';
	import axios from "axios";
	import {
		useMainStore
	} from '@/stores/useMainStore';
	const mainStore = useMainStore();
	const title = ref('')
	let content = ref('内容')
	let require = ref('内容')

	let selected = ref([])
	let showModal = ref(false)
	selected.value = [{
			name: '张三',
			ban: '大一四班',
		},
		{
			name: '张三',
			ban: '大一四班',
		}
	]
	let stusno = ref([])
	stusno.value = [{
		name: '张三',
		num: 123456789098765,
		pros: '计算机与科学',
		ban: '大一四班',
		phone: 1534567890
	}]

	function daos() {
		showModal.value = true
	}

	function closeModal() {
		showModal.value = false
	}

	async function xuan() {
		closeModal()
		let res = await submitSelectCourse(mainStore.selectCode)
		console.log(res, 'ttttt')
		if (res.code == 0) {
			uni.showToast({
				title: '选课成功!',
				icon: 'success', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
			setTimeout(() => {
				uni.switchTab({
					url: '/pages/s-record/s-record'
				});
			}, 1000);
		} else {
			uni.showToast({
				title: '选课失败!',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}
	}
	onShow(() => {
		if (mainStore.selectData != null) {
			let op = mainStore.selectData
			content.value = op.content
			require.value = op.result_display
			title.value = op.title
			selected.value = []
			op.selected_student.forEach((i, k) => {
				selected.value.push({
					name: i.name,
					ban: i.class,
					major: i.major,
					grade: i.grade
				})
			})

		}
	})
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
		height: 95px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		width: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
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

	.headers {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 21px;
		font-weight: 500;
		line-height: normal;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		/* 颜色/中性色色板/#OAOAOA */
		color: #0A0A0A;
		margin-top: 25px;
	}

	.xiao {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 15px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #707070;
		margin-top: 5px;
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: flex-end;
		/* 使.modal在底部对齐 */
	}

	.modal {
		flex-direction: column-reverse;
		/* 子元素从底部向上排列 */



	}

	.profession {

		margin-bottom: 5px;
		border-radius: 7px;
		opacity: 1;
		background: #FFFFFF;
		height: 56px;
		width: 96vw;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
	}

	.dels {

		margin-bottom: 5px;
		border-radius: 7px;
		opacity: 1;
		background: #FFFFFF;
		height: 56px;
		width: 96vw;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #FF2F2F;
	}

	.footer {
		margin-top: 5px;
		margin-bottom: 54px;
		border-radius: 7px;
		opacity: 1;
		background: #FFFFFF;
		height: 56px;
		width: 96vw;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
	}
</style>