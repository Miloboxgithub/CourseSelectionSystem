<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="headers">{{header}}</view>
		<view style="width: 90vw; margin-left: 5vw;">
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				1. 题目
			</view>
			<view class="inputs">
				<input type="text" placeholder="请输入" placeholder-class="placeholderStyle" />
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				2. 项目内容
			</view>
			<view class="inputss">
				<textarea class="textarea" v-model="inputText" maxlength="200" placeholder="请输入(200字以内)"
					placeholder-class="placeholderStyle"></textarea>
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				3. 教师指导内容及方式
			</view>
			<view class="inputs">
				<input type="text" placeholder="地点" placeholder-class="placeholderStyle" />
			</view>
			<view class="inputs">
				<input type="text" placeholder="时间" placeholder-class="placeholderStyle" />
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				4. 最终成果展现要求
			</view>
			<view class="inputss">
				<textarea class="textarea" v-model="inputText" maxlength="200" placeholder="请输入(200字以内)"
					placeholder-class="placeholderStyle"></textarea>
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				5. 学生人数要求
			</view>
			<view class="inputs" @click="prickers">
				<input type="text" readonly="true" :value="stunum" placeholder="请选择"
					placeholder-class="placeholderStyle" />

			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				6.项目费用预算
			</view>
			<view class="xuan" @click="ops=true">
				<image :src="ops?'/static/7.svg':'/static/77.svg'" mode=""></image>
				利用现有资源，不用经费
			</view>
			<view class="xuan" @click="ops=false">
				<image :src="ops?'/static/77.svg':'/static/7.svg'" mode=""></image>
				申请学院教学实验经费
			</view>
			<view class="inputs" v-if="!ops">
				<input type="text" placeholder="请填写经费预算金额" placeholder-class="placeholderStyle" />
			</view>
			<view class="theme" style="display: flex; margin-bottom: 20px;">
				7. 指定意向学生
				<view class="zzz">(选填)</view>
				<view class="pi" style="color: #999CA2;position: absolute; right: 22vw;">批量删除</view>
				<view class="pi" style="color: #5279F2;position: absolute; right: 5vw;">批量导入</view>
			</view>
			<view class="stus" v-for="(item,index) in stus" :key="index">
				<view>
					<view class="name">{{item.name}}</view>
					<view class="msg">学号：{{item.num}}</view>
					<view class="msg">专业：{{item.pros}}</view>
					<view class="msg">班级：{{item.ban}}</view>
					<view class="msg">电话：{{item.phone}}</view>
				</view>
				<view>
					<view class="edit" @click="showModal2=true,delnum=index">删除</view>
				</view>
			</view>
			<view class="addstu" @click="addstu">
				<image src="/static/添加.svg" mode=""></image>
				添加学生
			</view>
			<view style="display: flex; justify-content: space-around; margin-top: 55px;">
				<view class="chun">
					暂存
				</view>
				<view class="pub" @click="showModal1=true">
					发布
				</view>
			</view>
		</view>
	</scroll-view>
	<!-- 蒙层背景 -->
	<view v-if="showModal1" class="mask">
		<!-- 蒙层内容 -->
		<view class="modal">
			<!-- 蒙层内部内容 -->
			<view class="dels" @click="pubs()">
				确认发布
			</view>
			<view class="footer" @click="closeModal">
				取消
			</view>
		</view>
	</view>
	<!-- 蒙层背景 -->
	<view v-if="showModal2" class="mask">
		<!-- 蒙层内容 -->
		<view class="modal">
			<!-- 蒙层内部内容 -->
			<view class="dels" @click="dels()">
				确认删除
			</view>
			<view class="footer" @click="closeModal">
				取消
			</view>
		</view>
	</view>
	<view v-if="visible" class="mask"></view>
	<uni-popup v-if="visible" ref="pickerView" style="width: 100vw; position: fixed; bottom:0;">
		<view class="popup-view">
			<view class="popup-view-header">
				选择可选课学生人数
				<image @click="closeModal" src="/static/关闭.svg" mode=""></image>
			</view>
			<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
				<picker-view-column>
					<view class="item" v-for="(item, index) in dataList" :key="index">{{ item }}</view>
				</picker-view-column>
			</picker-view>
			<view class="qur" @click="qur">确认</view>
		</view>
	</uni-popup>

	<view v-if="showModal3" class="mask"></view>
	<uni-popup v-if="showModal3" ref="pickerView" style="width: 100vw; position: fixed; bottom:0;">
		<view class="popup-views">
			<view class="popup-view-header">
				选择学生
				<image @click="closeModal" src="/static/关闭.svg" mode=""></image>
			</view>
			<view class="search">
				<image src="/static/搜索.svg" mode=""></image>
				<input type="text" placeholder="输入学生姓名搜索" />
				<view class="sss">搜索</view>
			</view>
			<view class="stus" v-for="(item,index) in stuss" :key="index"
				style="width:86vw;padding: 16px 0; margin-left: 7vw;margin-top: 15px;">
				<view style="margin-left: 16px;">
					<view class="name">{{item.name}}</view>
					<view class="msg">学号：{{item.num}}</view>
					<view class="msg">专业：{{item.pros}}</view>
					<view class="msg">班级：{{item.ban}}</view>
					<view class="msg">电话：{{item.phone}}</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';
	import logsVue from '../logs/logs.vue';
	let header = ref('2024级电子专业项目实践1')
	let ops = ref(true)
	let stus = ref([])
	let stuss = ref([])
	let delnum = ref(0)
	const showModal1 = ref(false);
	const showModal2 = ref(false);
	const showModal3 = ref(false); // 控制显示隐藏
	const indicatorStyle = ref('height: 50px; color: #007aff;')
	const stunum = ref()

	function closeModal() {
		showModal1.value = false;
		showModal2.value = false;
		showModal3.value = false;
		visible.value = false
	}
	stus.value = [{
			name: '张三',
			num: 123456789098765,
			pros: '计算机与科学',
			ban: '大一四班',
			phone: 1534567890
		},
		{
			name: '张三',
			num: 123456789098765,
			pros: '计算机与科学',
			ban: '大一四班',
			phone: 1534567890
		}
	]
	stuss.value = [{
		name: '张三',
		num: 123456789098765,
		pros: '计算机与科学',
		ban: '大一四班',
		phone: 1534567890
	}]

	function dels() {
		console.log(delnum.value)
		if (delnum.value >= 0 && delnum.value < stus.value.length) {
			stus.value.splice(delnum.value, 1); // 删除对应下标的元素
		}
		closeModal()
	}
	const visible = ref(false);
	const value = ref([0]); // 假设默认选中第一项
	const dataList = ref([]); // 示例数据
	for (let i = 1; i < 100; i++) {
		dataList.value.push(i)
	}
	const selectedData = ref(null);
	const pickerView = ref(null);

	onMounted(() => {
		// 如果需要在组件挂载后访问 pickerView，可以在这里进行
	});

	function bindChange(e) {
		value.value = e.detail.value;
		selectedData.value = dataList.value[e.detail.value[0]];
		console.log(selectedData.value)
	}

	function prickers() {
		visible.value = true
	}

	function qur() {
		stunum.value = selectedData.value
		closeModal()
	}

	function pubs() {
		closeModal()
		uni.showToast({
			title: '题目已发布!',
			icon: 'none', // 使用 'none' 表示纯文本弹窗
			duration: 1000 // 显示时长为 2000 毫秒
		});
		setTimeout(() => {
			uni.navigateTo({
				url: '/pages/t-index/t-index'
			});
		}, 1000);

	}

	function addstu() {
		showModal3.value = true
	}
</script>

<style lang="scss" scoped>
	.containers {
		width: 100vw;
		height: auto;

		overflow-y: auto;
		padding-bottom: 50px;
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
		/* 1. 题目 */
		color: #333333
	}

	.zzz {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		/* 1. 题目 */
		color: #999CA2
	}

	.theme image {
		margin-right: 3px;
		width: 6px;
		height: 6px;
	}

	.inputs {
		margin-top: 15px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		height: 44px;
		display: flex;
		align-items: center;
		padding-left: 15px;
	}

	.inputss {
		margin-top: 15px;
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		height: 91px;
		display: flex;
		align-items: center;
		padding-left: 15px;
	}

	.textarea {
		height: 75px;
		width: 96%;
	}

	.placeholderStyle {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: normal;
		line-height: normal;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #9A9B9D;
	}

	.xuan {
		margin-top: 10px;
		display: flex;
		align-items: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: normal;
		line-height: normal;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #333333;
	}

	.xuan image {
		margin-right: 6px;
		width: 19px;
		height: 19px;
	}

	.pi {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 14px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
	}

	.stus {
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		height: 127px;
		padding: 12px;
		margin-bottom: 8px;
		display: flex;
		justify-content: space-between;
	}

	.addstu {
		border-radius: 6px;
		opacity: 1;
		background: #E8F2FE;
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
		color: #2276FA;
	}

	.addstu image {
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}

	.chun {
		border-radius: 6px;
		opacity: 1;
		background: #7FB2FF;
		width: 38vw;
		height: 45px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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

	.pub {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 15px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #FFFFFF;
		border-radius: 6px;
		opacity: 1;
		background: #2277F8;
		width: 38vw;
		height: 45px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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

	.edit {
		border-radius: 5px;
		opacity: 1;
		box-sizing: border-box;
		border: 1px solid #2077F8;
		width: 70px;
		height: 29px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 15px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #2077F8;
		margin-bottom: 10px;
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

	.popup-view {
		background-color: #FFFFFF;
		height: 450px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;

	}

	.popup-views {
		background-color: #FFFFFF;
		height: 600px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;

	}

	.popup-view-header {
		text-align: center;
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 19px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;

	}

	.popup-view-header image {
		position: absolute;
		width: 24px;
		height: 24px;
		right: 16px;
		top: 16px;
	}

	.picker-view {
		width: 100%;
		height: 250px;
		margin-top: 20rpx;
	}

	.item {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 24px;
		font-weight: 500;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #3D3D3D;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.qur {
		position: absolute;
		bottom: 30px;
		border-radius: 6px;
		opacity: 1;
		background: #2277F8;
		height: 45px;
		width: 86vw;
		margin-left: 7vw;
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

	.search {
		border-radius: 7px;
		opacity: 1;
		background: #F8F9FB;
		height: 44px;
		width: 86vw;
		margin-left: 7vw;
		margin-top: 20px;
		display: flex;
		align-items: center;
	}

	.search image {
		width: 24px;
		height: 24px;
		margin-left: 2vw;
		margin-right: 2vw;
	}

	.search input {
		width: 60vw;
	}

	.sss {
		position: absolute;
		right: 11vw;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: #2077F8;
	}
</style>