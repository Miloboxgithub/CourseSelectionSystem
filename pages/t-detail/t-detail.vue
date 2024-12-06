<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="headers">{{header}}</view>
		<view class="theme">
			1. 题目
		</view>
		<view class="huis">{{theme}}</view>
		<view class="theme">
			2. 项目内容
		</view>
		<view class="hui">{{content}}</view>
		<view class="theme">
			3. 教师知道内容及方式
		</view>
		<view class="huis">{{place}}</view>
		<view class="huis">{{time}}</view>
		<view class="theme">
			4. 最终成果展示要求
		</view>
		<view class="hui">{{req}}</view>
		<view class="theme">
			5. 经费
		</view>
		<view class="huis">{{fee}}元</view>
		<view class="theme">
			6.要求学生人数
		</view>
		<view class="huis">{{stunum}}</view>
		<view class="theme">7.指定意向学生</view>
		<view class="stus" v-for="(item,index) in stus" :key="index">
			<view>
				<view class="name">{{item.name}}</view>
				<view class="msg">学号：{{item.num}}</view>
				<view class="msg">专业：{{item.pros}}</view>
				<view class="msg">班级：{{item.ban}}</view>
				<view class="msg">电话：{{item.phone}}</view>
			</view>
		</view>
		<!-- <view class="bao">报名中未指定的学生</view>
		<view class="stusno" v-for="(item,index) in stusno" :key="index">
			<view>
				<view class="name">{{item.name}}</view>
				<view class="msg">学号：{{item.num}}</view>
				<view class="msg">专业：{{item.pros}}</view>
				<view class="msg">班级：{{item.ban}}</view>
				<view class="msg">电话：{{item.phone}}</view>
			</view>
		</view> -->
	</scroll-view>
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
		onShow
	} from '@dcloudio/uni-app'
	const mainStore = useMainStore();
	let header = ref('')
	let theme = ref('')
	const content = ref()
	const place = ref()
	const time = ref()
	const req = ref()
	let fee = ref()
	let stunum = ref()
	let stus = ref([])
	// stus.value = [{
	// 	name: '张三',
	// 	num: 123456789098765,
	// 	pros: '计算机与科学',
	// 	ban: '大一四班',
	// 	phone: 1534567890
	// }]
	onShow(() => {
		console.log(mainStore.shareDetail, mainStore.sharedData, 'dddddd');
		let op = mainStore.shareDetail
		if (op != null) {
			theme.value = op.title
			fee.value = op.budget
			content.value = op.content
			let parts = op.guidance.split("&&")
			let [field1, field2] = parts
			place.value = field1
			time.value = field2
			req.value = op.resultDisplay
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
			mainStore.setDetailData(null)
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

	.headers {
		margin-top: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 21px;
		font-weight: 500;
		line-height: normal;
		text-align: center;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		/* 颜色/中性色色板/#OAOAOA */
		color: #0A0A0A;
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