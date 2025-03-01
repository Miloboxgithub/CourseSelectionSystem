<template>
	<scroll-view class="containers" scroll-y="true">
		<image src="/static/背景@1x.png" mode="aspectFill" class="bg"></image>
		<view class="headtext">教师端</view>
		<view class="xuan" @click="showModal1 = true">{{pros}}-{{schoolCode}}
			<image src="/static/路径 3777.svg" mode="aspectFill">
			</image>
		</view>
		<view class="nnn">
			工程项目选课系统
		</view>
		<view class="sss">精准匹配课程需求 简化选课流程</view>
		<view class="zhong">
			<view class="deadline">出题截止时间:{{deadtime}}</view>
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
					<image class="es" src="/static/更多.svg" @click="showMore(item.theme,item.code)"></image>
				</view>
				<view class="theme">{{item.theme}}</view>

				<view class="ddl">选课截止：{{item.deadline}}</view>
				<image class="btn" :src="item.status?'/static/按钮@1x.png':'/static/1111.png'" mode="scaleToFill"
					@click="toggleModal(item.status,item.theme,item.code)">
				</image>
			</view>
		</view>
	</scroll-view>

	<!-- 蒙层背景 -->
	<view v-if="showModal1" class="mask">
		<!-- 蒙层内容 -->
		<view class="modal" style="overflow-y: auto; max-height: 100vh;">
			<!-- 蒙层内部内容 -->
			<view class="profession" v-for="(item,index) in profession" :key="index" @click="changePros(item)">
				{{item.projectPracticeName}}
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
			<view class="profession" @click="xiugai()">
				修改出题内容
			</view>
			<view class="profession" @click="daochu">
				导出结果
			</view>
			<view class="profession" @click="goOnPro()">
				创建副本
			</view>
			<view class="dels" @click="delsPro()">
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
			<view class="profession" @click="checks()">
				查看出题详情
			</view>
			<view class="profession" @click="results()">
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
	import {
		Login,
		allProject,
		changeProject,
		checkDetail,
		checkResult,
		deleteProject,
		setCopyProject,
	} from '../../api'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import axios from "axios";
	// 在父组件或任何页面中
	import {
		useMainStore
	} from '@/stores/useMainStore';


	let items = ref([])
	let profession = ref([])
	// profession.value = [
	// 	'2024级电子项目专业', '2024级机器人项目专业', '2024级自动化项目专业'
	// ]
	let pros = ref('')
	const deadtime = ref('')

	function news() {
		if (pros.value == '请选择课题') {
			uni.showToast({
				title: '请先选择课题',
				icon: 'error',
				duration: 1500 // 显示时长为 2000 毫秒
			})
		} else {
			const mainStore = useMainStore();
			mainStore.setSharedData(pros.value, proId.value, schoolCode.value);
			uni.navigateTo({
				url: '/pages/t-publish/t-publish'
			});
		}
	}

	async function daochu() {
		let res = await checkResult(pros.value, themes.value, proId.value, itemCode.value)
		console.log(res.data.Results, 'daochu')
		if (res.code != 0) {
			uni.showToast({
				title: '查看结果失败',
				icon: 'error',
				duration: 1000 // 显示时长为 2000 毫秒
			})
		} else {
			const mainStore = useMainStore();
			mainStore.setResultData(res.data.Results);
			uni.navigateTo({
				url: '/pages/t-content/t-content'
			});
		}
		closeModal()
	}

	const showModal1 = ref(false);
	const showModal2 = ref(false);
	const showModal3 = ref(false);
	const proId = ref(null)
	const schoolCode = ref()

	function closeModal() {
		showModal1.value = false;
		showModal2.value = false;
		showModal3.value = false;
	}

	function confirmAction() {
		// 确认操作的逻辑
		closeModal();
	}
	const themes = ref('')
	const itemCode = ref(null)

	function toggleModal(e, t, c) {
		themes.value = t
		itemCode.value = c
		if (e) {
			showModal3.value = true

		} else {
			copyPro()
		}
	}

	function showMore(t, c) {
		showModal2.value = true
		themes.value = t
		itemCode.value = c
	}
	async function checks() {
		let res = await checkDetail(pros.value, themes.value, proId.value, itemCode.value, 1)
		if (res.code != 0) {
			uni.showToast({
				title: '查看详情失败',
				icon: 'error',
				duration: 1000 // 显示时长为 2000 毫秒
			})
		} else {
			const mainStore = useMainStore();
			mainStore.setDetailData(res.data.Details);
			mainStore.setSharedData(pros.value, proId.value);
			uni.navigateTo({
				url: '/pages/t-detail/t-detail'
			});
		}
		closeModal()

	}
	async function xiugai() {
		let res = await checkDetail(pros.value, themes.value, proId.value, itemCode.value, 1)
		console.log(res, 'xiugai')
		if (res.code != 0) {
			uni.showToast({
				title: '查看结果失败',
				icon: 'error',
				duration: 1000 // 显示时长为 2000 毫秒
			})
		} else {
			const mainStore = useMainStore();
			mainStore.setChangeData(res.data.Details);
			mainStore.setSharedData(pros.value, proId.value);
			uni.navigateTo({
				url: '/pages/t-publish/t-publish'
			});
		}
		closeModal()
	}
	async function results() {
		// let res = await checkResult(pros.value, themes.value)
		// console.log(res, 'result')
		daochu()
	}

	function formatDateToMonthDay(dateString) {
		const date = new Date(dateString);
		const month = date.getMonth() + 1; // getMonth() 返回的是0-11，所以要加1
		const day = date.getDate();

		// 确保月份和日子都是两位数显示（例如：09月, 03日）
		const formattedMonth = month.toString().padStart(2, '0');
		const formattedDay = day.toString().padStart(2, '0');

		return `${formattedMonth}月${formattedDay}日`;
	}

	function changePros(e) {
		pros.value = e.projectPracticeName
		proId.value = e.projectPracticeCode
		schoolCode.value = e.schoolCode
		getData(e.projectPracticeName, e.projectPracticeCode)
		closeModal()
	}

	function isStartWithFourNumbers(str) {
		// 使用正则表达式匹配字符串开头是否为4个数字
		const regex = /^\d{4}/;
		return regex.test(str);
	}
	async function getItems() {
		let ress = await allProject()
		console.log(ress, 'aaa')
		let arr = ress.data.proPracticeList
		arr.forEach((i, k) => {
			if (!isStartWithFourNumbers(i.projectPracticeName)) {
				i.projectPracticeName = i.grade + i.majorName + i.projectPracticeName
			}
		})
		profession.value = arr
		const mainStore = useMainStore();
		if (mainStore.profession != null) {
			pros.value = mainStore.profession
			proId.value = mainStore.proId
			schoolCode.value = mainStore.schoolCode
			getData(mainStore.profession, mainStore.proId)

		} else {
			pros.value = '请选择课题'
			//proId.value = arr[0].projectPracticeCode
			//getData(arr[0].projectPracticeName, arr[0].projectPracticeCode)
		}
	}

	async function getData(p, id) {
		let ress = await changeProject(p, id)
		console.log(ress, 'kkkkk')
		let ans = ress.data.titleList
		deadtime.value = ans.titleEtime
		let arr = []
		if (ans.SepProPracticeInfos)
			ans.SepProPracticeInfos.forEach((i, k) => {
				arr.push({
					status: i.releaseStatus,
					theme: i.title,
					deadline: i.selectEtime.substring(0, 10),
					code: i.code
				})
			})
		items.value = arr
	}
	async function delsPro() {
		let res = await deleteProject(pros.value, themes.value, proId.value, itemCode.value)
		if (res.code != 0) {
			uni.showToast({
				title: '删除失败',
				icon: 'error',
				duration: 1000 // 显示时长为 2000 毫秒
			})
		}
		closeModal()
		getData(pros.value, proId.value)
	}
	async function copyPro() {
		let res = await checkDetail(pros.value, themes.value, proId.value, itemCode.value, 0)
		console.log(res, 'copy')
		if (res.code != 0) {
			uni.showToast({
				title: '操作失败',
				icon: 'error',
				duration: 1000 // 显示时长为 2000 毫秒
			})
		} else {
			const mainStore = useMainStore();
			mainStore.setCopyData(res.data.Details);
			mainStore.setSharedData(pros.value, proId.value, schoolCode.value);
			uni.navigateTo({
				url: '/pages/t-publish/t-publish'
			});
		}
		closeModal()
	}
	async function goOnPro() {
		let res = await setCopyProject(pros.value, themes.value, proId.value, itemCode.value)
		console.log(res.data, 'copys')
		if (res.code != 0) {
			uni.showToast({
				title: '创建失败',
				icon: 'error',
				duration: 1000 // 显示时长为 2000 毫秒
			})
		} else {
			const mainStore = useMainStore();
			mainStore.setCopyData(res.data.titleCopy);
			mainStore.setSharedData(pros.value, proId.value);
			uni.navigateTo({
				url: '/pages/t-publish/t-publish'
			});
		}
		closeModal()
	}
	onShow(() => {
		getItems();
	});
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