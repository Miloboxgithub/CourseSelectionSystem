<template>
	<view class="containers">
		<image src="../../static/bg@1x.png" mode="scaleToFill" class="bg"></image>
		<view class="headtext">登录</view>
		<view class="pic">
			<!-- <image src="/static/矩形 4646@1x.png" class="picimg" mode="aspectFill" /> -->
			<image src="../../static/中德 学院@1x.png" class="zzz" mode=""></image>
		</view>
		<view class="niu">
			<image src="" mode="" />
		</view>
		<view class="xiao"></view>
		<view class="hao">
			<view style="display: flex;align-items: center;margin-bottom: 8px;">
				<image src="" mode="" />
				<text>用户名</text>
			</view>
			<view class="input">
				<input bindinput="input2" type="text" placeholder="请输入用户名" placeholder-class="placeholderStyle"
					value="{{password}}" />
			</view>
		</view>
		<view class="hao" style="margin-top: 24px;">
			<view style="display: flex;align-items: center;margin-bottom: 8px;">
				<image src="" mode="" />
				<text>职工号</text>
			</view>
			<view class="input">
				<input bindinput="input1" placeholder="请输入职工号" placeholder-class="placeholderStyle" type="text"
					value="{{number}}" />
			</view>
		</view>
		<view class="confirm">
			<view style="display: flex;" bind:tap="rems">
				<image src="" mode="" /><text style="margin-left: 5px;">记住我</text>
			</view>
			<view style="margin-right: 5px;color: #556EFE;"><text>忘记密码？</text></view>
		</view>
		<view class="btn" bindtap="logins" data-url="/pages/index/index">
			登录
		</view>
		<view class="register">
			没有帐户？<text style="color: #556EFE">点击注册</text>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.containers {
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

	.niu {
		display: flex;
		justify-content: center;
		margin-top: 8px;
		font-family: 'DingTalk-JinBuTi', sans-serif;
		font-size: 26px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #556EFE;
	}

	.niu image {
		width: 148px;
		height: 31px;
	}

	.xiao {
		display: flex;
		justify-content: center;
		margin-top: 4px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #90B4FF;
	}

	.hao {
		width: 82vw;
		margin-left: 3.5vw;
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
		width: 82vw;
		height: 48px;
		border-radius: 8px;
		opacity: 1;
		background: #FFFFFF;
		box-sizing: border-box;
		border: 1px solid #DCDCDC;
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

	.confirm {
		display: flex;
		width: 82vw;
		margin-left: 3.5vw;
		justify-content: space-between;
		margin-top: 12px;
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
		width: 82vw;
		margin-left: 4vw;
		border-radius: 8px;
		opacity: 1;
		background: #556EFE;
		height: 55px;
		margin-top: 40px;
		font-family: Poppins;
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
		text-align: center;
		display: flex;
		align-items: center;
		letter-spacing: 0px;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.register {
		margin-top: 30px;
		display: flex;
		justify-content: center;
		font-family: Poppins;
		font-size: 14px;
		font-weight: normal;
		line-height: 20px;
		text-align: center;
		display: flex;
		align-items: center;
		letter-spacing: 0.63px;
	}

	input {
		width: 100%;
		height: 100%;
		line-height: 30px;
		/* padding: 0 5rem; */
		padding-left: 1.2rem;
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
		color: #DCDCDC;
	}

	input:focus,
	input:hover {
		outline: none;
		border-color: #556EFE;
		background-color: #fff;
		box-shadow: 0 0 0 5px rgb(85 110 254 / 30%);
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