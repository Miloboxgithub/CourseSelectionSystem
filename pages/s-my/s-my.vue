<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="theme" style="margin-top: 40px;">
			姓名
		</view>
		<view class="hui">{{name}}</view>
		<view class="theme">
			学号
		</view>
		<view class="hui">{{num}}</view>
		<view class="theme">
			班级
		</view>
		<view class="hui">{{ban}}</view>
		<view class="theme">
			电话
		</view>
		<view class="hui">{{phone}}</view>

	</scroll-view>

</template>

<script setup>
	import {
		ref
	} from 'vue'

	let name = ref('张三')
	let num = ref('23456789876543234567')
	let ban = ref('大一三班')
	let phone = ref('12345678901')
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