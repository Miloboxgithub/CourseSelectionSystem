<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="theme" style="margin-top: 40px;">
			姓名
		</view>
		<view class="hui">{{name}}</view>
		<view class="theme">
			工号
		</view>
		<view class="hui">{{num}}</view>
		<view class="theme">
			邮箱
		</view>
		<view class="hui">{{ban}}</view>
		<view class="theme">
			电话
		</view>
		<view class="hui">{{phone}}</view>
		<view class="theme">
			学院
		</view>
		<view class="hui">{{major}}</view>

		<view class="delsss" @click="backup()">退出登录</view>
	</scroll-view>
	<view class="tabbars">
		<view class="imggg" @click="nnav">
			<image src="/static/1.svg" mode=""></image>
			<text style="color:#A3A3A3 ;">首页</text>
		</view>
		<view class="imggg">
			<image src="/static/33.svg" mode=""></image>
			<text>个人</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		myMsgs
	} from '../../api';
	import axios from "axios";
	let name = ref('张三')
	let num = ref('23456789876543234567')
	let ban = ref('大一三班')
	let phone = ref('12345678901')
	const major = ref()
	const grade = ref()
	async function getMsg() {
		let res = await myMsgs()
		console.log(res, 'myss')
		name.value = res.data.teacherInfo.name
		num.value = res.data.teacherInfo.sno
		ban.value = res.data.teacherInfo.email
		phone.value = res.data.teacherInfo.phone
		major.value = res.data.teacherInfo.collegeName
	}
	//getMsg();

	function backup() {
		uni.navigateTo({
			url: '/pages/logs/logs'
		})
	}

	function nnav() {
		uni.navigateTo({
			url: '/pages/t-index/t-index'
		});
	}
	onShow(() => {
		getMsg()
	})
</script>

<style lang="scss" scoped>
	.daodao {
		opacity: 1;
		background: #FFFFFF;
		width: 100%;
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
		width: 90%;
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
		width: 90%;
		margin-left: 5%;
		height: auto;
		overflow-y: auto;
		padding-bottom: 90px;
	}

	.theme {
		margin-top: 20px;
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

	.hui {
		margin-top: 15px;
		height: 38px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		width: 100%;
		padding: 10px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #999CA2;
	}

	.huis {
		margin-top: 15px;
		height: 60px;
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

	.tabbars {
		width: 100%;
		height: 50px;
		position: fixed;
		background-color: #fff;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		box-sizing: border-box;
		/* 确保宽度计算包括内边距和边框 */
	}

	/* 当屏幕宽度大于750px时，限制最大宽度为750px */
	@media (min-width: 751px) {
		.tabbars {
			width: 450px;
			margin: 0 auto;
			/* 居中显示 */
		}
	}

	.imggg {

		display: flex;
		align-items: center;
		/* 竖直居中 */
		flex-direction: column;
		/* 设置为列方向 */
	}

	.imggg image {
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}

	.imggg text {
		font-size: 12px;
		margin-top: 3px;
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
		width: 96%;
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
		width: 96%;
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
		width: 96%;
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

	.delsss {
		border-radius: 6px;
		opacity: 1;
		background: #F5F5F5;
		height: 45px;
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
		color: #999CA2;
		margin-top: 30px;
	}
</style>