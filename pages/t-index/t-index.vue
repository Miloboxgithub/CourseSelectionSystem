<template>
	<scroll-view class="containers" scroll-y="true">
		<image src="/static/背景@1x.png" mode="aspectFill" class="bg"></image>
		<view class="headtext">教师端</view>
		<view class="xuan" @click="showModal1 = true">{{pros}}实践<image src="/static/路径 3777.svg" mode="aspectFill">
			</image>
		</view>
		<view class="nnn">
			工程项目选课系统
		</view>
		<view class="sss">精准匹配课程需求 简化选课流程</view>
		<view class="zhong">
			<view class="deadline">{{pros}}出题截止时间：11月30日</view>
		</view>
		<view class="items">
			<view class="itemn" @click="news()">
				<image src="/static/新建按钮.svg" mode="" class="newimg"></image>
				<view class="new">
					新建课题
				</view>
			</view>
			<view class="item" v-for="(item,index) in items" :key="index">
				<view class="head">
					<view class="st">
						<image :src="item.status?'/static/已发布@1x.png':'/static/未发布@1x.png'" mode="scaleToFill">
						</image>
					</view>
					<image class="es" src="/static/更多.svg" @click="showModal2 = true"></image>
				</view>
				<view class="theme">{{item.theme}}</view>

				<view class="ddl">选课截止：{{item.deadline}}</view>
				<image class="btn" :src="item.status?'/static/按钮@1x.png':'/static/1111.png'" mode="scaleToFill"
					@click="toggleModal(item.status)">
				</image>
			</view>
		</view>
	</scroll-view>

	<!-- 蒙层背景 -->
	<view v-if="showModal1" class="mask">
		<!-- 蒙层内容 -->
		<view class="modal">
			<!-- 蒙层内部内容 -->
			<view class="profession" v-for="(item,index) in profession" :key="index" @click="changePros(item)">
				{{item}}
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
			<view class="profession" @click="daochu">
				导出结果
			</view>
			<view class="profession">
				创建副本
			</view>
			<view class="dels">
				删除
			</view>
			<view class="footer" @click="closeModal">
				取消
			</view>
		</view>
	</view>
	<!-- 蒙层背景 -->
	<view v-if="showModal3" class="mask">
		<!-- 蒙层内容 -->
		<view class="modal">
			<!-- 蒙层内部内容 -->
			<view class="profession">
				查看出题详情
			</view>
			<view class="profession">
				查看选题结果
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
	} from 'vue';
	let items = ref([])
	items.value = [{
			status: 1,
			theme: '基于pyqt的树莓派视觉检测软件开发',
			deadline: '2024-10-09'
		},
		{
			status: 0,
			theme: '医疗用层析超滤设备研发',
			deadline: '2024-10-09'
		},
		{
			status: 0,
			theme: '未知动态环境下机器人路径规划及其在服务机器人上的应用',
			deadline: '2024-10-09'
		},
		{
			status: 0,
			theme: '电子鼓原理与设计',
			deadline: '2024-10-09'
		},
		{
			status: 0,
			theme: '基于MCU的智能交流电表系统设计',
			deadline: '2024-10-09'
		},
		{
			status: 0,
			theme: '面向声表面波传感器应用的AlN基压电薄膜制备和表征',
			deadline: '2024-10-09'
		},
		{
			status: 0,
			theme: '光纤激光器设计',
			deadline: '2024-10-09'
		},
	]
	let profession = ref([])
	profession.value = [
		'2024级电子项目专业', '2024级机器人项目专业', '2024级自动化项目专业'
	]
	let pros = ref('2024级电子项目专业')

	function news() {
		uni.navigateTo({
			url: '/pages/t-publish/t-publish'
		});
	}

	function daochu() {
		uni.navigateTo({
			url: '/pages/t-content/t-content'
		});
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

	function changePros(e) {
		pros.value = e
		closeModal()
	}
</script>

<style lang="scss" scoped>
	.containers {
		height: 100vh;
		width: 100vw;
		position: relative;
		/* 添加相对定位 */
		overflow: hidden;
		/* 防止伪元素溢出容器 */
		white-space: nowrap;
		overflow-y: auto;
		padding-bottom: 50px;
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
		width: 100vw;
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
		top: 100px;
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
		font-size: 14px;
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
		top: 139px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 24px;
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
		left: 5vw;
		top: 233px;
		width: 90vw;
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
		left: 5vw;
		width: 90vw;
		height: 300px;
		position: absolute;
		top: 286px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.item {
		height: 210px;
		border-radius: 12px;
		opacity: 1;
		background: #FFFFFF;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
		margin-bottom: 10px;
		flex-basis: calc(50% - 5px);
		/* 每行之间的间隔 */
		box-sizing: border-box;
		/* 确保边框和内边距包含在宽度内 */
		padding: 13px;
		position: relative;
	}

	.itemn {
		display: flex;
		flex-direction: column;
		/* 设置主轴为垂直方向 */
		align-items: center;
		height: 210px;
		border-radius: 12px;
		opacity: 1;
		background: #FFFFFF;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
		margin-bottom: 10px;
		flex-basis: calc(50% - 5px);
		/* 每行之间的间隔 */
		box-sizing: border-box;
		/* 确保边框和内边距包含在宽度内 */
	}

	.newimg {
		margin-top: 20%;
		width: 100px;
		height: 100px;
	}

	.new {
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

	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.st image {
		width: 58px;
		height: 19px;
	}

	.theme {
		margin-top: 8px;
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 17px;
		font-weight: 600;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		color: #3D3D3D;
		white-space: normal;
		/* 允许换行 */
		word-wrap: break-word;
		/* 在长单词或URL时允许换行 */
		overflow-wrap: break-word;
		/* 允许在单词内换行 */
		text-align: justify;
	}

	.es {
		width: 16px;
		height: 16px;
	}

	.ddl {
		font-family: Alibaba PuHuiTi 3.0;
		font-size: 12px;
		font-weight: normal;
		line-height: normal;
		display: flex;
		align-items: center;
		letter-spacing: -0.3px;
		font-variation-settings: "opsz" auto;
		color: rgba(61, 61, 61, 0.4392);
		position: absolute;
		bottom: 43px;
		left: 50%;
		/* 从左侧开始，向右移动50% */
		transform: translate(-50%, -50%);
		/* 使用transform调整位置，使其居中 */
	}

	.btn {
		position: absolute;
		bottom: 13px;
		left: 50%;
		/* 从左侧开始，向右移动50% */
		transform: translate(-50%);
		/* 使用transform调整位置，使其居中 */
		width: 82%;
		height: 16%;
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
		margin-top: 17px;
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