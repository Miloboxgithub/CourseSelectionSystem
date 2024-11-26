<template>
	<view class="containers">
		<image src="../../static/bg@1x.png" mode="scaleToFill" class="bg"></image>
		<view class="headtext">登录</view>
		<view class="pic">
			<!-- <image src="/static/矩形 4646@1x.png" class="picimg" mode="aspectFill" /> -->
			<image src="../../static/中德 学院@1x.png" class="zzz" mode=""></image>
		</view>
		<view class="xiao">工程项目选课系统</view>
		<view class="hao">
			<view class="input">
				<image src="../../static/组 5737.svg" mode=""></image>
				<input @input="inputname" type="text" placeholder="请输入姓名" placeholder-class="placeholderStyle"
					v-model="name" />
			</view>
		</view>
		<view class="hao" style="margin-top: 20px;">
			<view class="input">
				<image src="../../static/组 5738.svg" mode=""></image>
				<input @input="inputnum" placeholder="请输入工号/学号" placeholder-class="placeholderStyle" type="text"
					v-model="number" />
			</view>
		</view>
		<view class="confirm">
			<view style="display: flex;" @click="rems">
				<image :src="rem ? '../../static/dui.svg':'../../static/属性 1=协议未勾选.svg'" mode="" /><text
					style="margin-left: 5px;">记住我</text>
			</view>
		</view>
		<view class="btn" @click="logins" data-url="/pages/t-index/t-index">
			登录
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	let rem = ref(true)
	let name = ref('')
	let number = ref('')

	function rems() {
		rem.value = !rem.value
	}

	function inputname(e) {
		name.value = e.detail.value
	}

	function inputnum(e) {
		number.value = e.detail.value
	}

	function logins(e) {
		console.log(name.value, number.value, e.currentTarget.dataset.url)
		let url = e.currentTarget.dataset.url
		uni.showToast({
			title: '登录成功!',
			icon: 'none', // 使用 'none' 表示纯文本弹窗
			duration: 1000 // 显示时长为 2000 毫秒
		});
		setTimeout(() => {
			uni.navigateTo({
				url
			});
		}, 1000);

	}
</script>

<style lang="scss" scoped>
	.containers {
		height: 100vh;
		width: 89vw;
		margin-left: 5.5vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		/* 设置主轴为垂直方向 */
		align-items: center;
		/* 垂直居中对齐子元素 */
		justify-content: center;
	}

	.pic {
		margin-top: 36px;
		display: flex;
		justify-content: center;
		position: relative;
		width: 140px;
		height: 140px;
		background-image: url('../../static/矩形 4646@1x.png');
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.zzz {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 59px;
		height: 59px;
	}

	.xiao {
		margin-top: 25px;
		display: flex;
		justify-content: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 25px;
		font-weight: normal;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
	}

	.hao {
		width: 86vw;
		margin-top: 40px;
	}

	.hao text {
		margin-left: 2vw;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		color: #3D3D3D;
		display: flex;
		align-items: center;
	}

	.input {
		width: 86vw;
		height: 56px;
		border-radius: 192px;
		opacity: 1;
		background: #F4F7FD;
		display: flex;
		align-items: center;
	}

	.hao image {

		width: 24px;
		height: 24px;
	}

	.input input {

		width: 100%;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;

	}

	.input image {
		margin-left: 18px;
		width: 24px;
		height: 24px;
	}

	.confirm {
		display: flex;
		width: 88vw;
		margin-left: 3.5vw;
		justify-content: space-between;
		margin-top: 27px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 16px;
		font-weight: normal;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
	}

	.confirm image {
		width: 24px;
		height: 24px;
	}

	.btn {
		width: 86vw;
		border-radius: 215px;
		opacity: 1;
		background: #5277F1;
		height: 57px;
		margin-top: 30px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 18px;
		font-weight: 600;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		width: 100%;
		height: 100%;
		line-height: 30px;
		/* padding: 0 5rem; */
		padding-left: 0.8rem;
		border: 2px solid transparent;
		border-radius: 10px;
		outline: none;

		/* color: #0d0c22; */
		transition: .5s ease;
	}

	/* .inputs::placeholder {
	  color: #0d1441;
	} */
	.placeholderStyle {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 16px;
		font-weight: normal;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #999CA2;
	}

	.input:focus,
	.input:hover {
		outline: none;
		border-color: #556EFE;
		background-color: #fff;
		box-shadow: 0 0 0 4px rgb(85 110 254 / 50%);
		outline: none;
		transition: .5s ease;
	}

	.bg {
		position: absolute;
		top: 0;
		width: 100vw;
		left: 0;
		height: 245px;
		z-index: -3;
	}


	.headtext {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		text-align: center;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		/* 颜色/中性色色板/#OAOAOA */
		color: #0A0A0A;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5vh;
	}
</style>