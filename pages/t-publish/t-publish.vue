<template>
	<scroll-view class="containers" scroll-y="true">
		<view class="headers">{{header}}</view>
		<view style="width: 90vw; margin-left: 5vw;">
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				1. 题目
			</view>
			<view class="inputs">
				<input type="text" placeholder="请输入" placeholder-class="placeholderStyle" v-model="title" />
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				2. 项目内容
			</view>
			<view class="inputss">
				<textarea class="textarea" maxlength="200" placeholder="请输入(200字以内)"
					placeholder-class="placeholderStyle" v-model="content"></textarea>
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				3. 教师指导内容及方式
			</view>
			<view style="color: #999CA2; font-size: 14px; white-space: pre;">
				（例：地点：D3-419 &nbsp;&nbsp;时间：每周二下午14:00-18:00）
			</view>
			<view class="inputs">
				<input type="text" placeholder="指导地点" placeholder-class="placeholderStyle" v-model="place" />
			</view>
			<view class="inputs">
				<input type="text" placeholder="指导时间" placeholder-class="placeholderStyle" v-model="time" />
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				4. 最终成果展现要求
			</view>
			<view class="inputss">
				<textarea class="textarea" v-model="resultdisplay" maxlength="200" placeholder="请输入(200字以内)"
					placeholder-class="placeholderStyle"></textarea>
			</view>
			<view class="theme">
				<image src="/static/_.svg" mode=""></image>
				5. 学生人数要求
			</view>
			<view class="inputs" :class="{'placeholderStyle': isPlaceholderSelected}" @click="prickers">
				<!-- <input type="text" readonly="true" :value="stunum" placeholder="请选择"
					placeholder-class="placeholderStyle" /> -->
				{{stunum}}
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
				<input type="text" placeholder="请填写经费预算金额" placeholder-class="placeholderStyle" v-model="budge" />
			</view>
			<view class="theme" style="display: flex; margin-bottom: 20px;">
				7. 指定意向学生
				<view class="zzz">(选填)</view>
				<view class="pi" @click="quanshan" style="color: #999CA2;position: absolute; right: 36vw;">批量删除</view>
				<view class="pi" @click="daoru" style="color: #5279F2;position: absolute; right: 20vw;">批量导入</view>
				<view class="pi" @click="moban" style="color: #5279F2;position: absolute; right: 5vw;">下载模板</view>
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
					<view class="edit" @click="showModal2=true,delnum=index,delsno = item.num">删除</view>
				</view>
			</view>
			<view class="addstu" @click="addstu">
				<image src="/static/添加.svg" mode=""></image>
				添加学生
			</view>
			<view v-if="changes" style="display: flex; justify-content: space-around; margin-top: 55px;">
				<view class="chun" @click="zanchun">
					暂存
				</view>
				<view class="pub" @click="fff()">
					发布
				</view>
			</view>
			<view v-else style="display: flex; justify-content: space-around; margin-top: 55px;">
				<view class="pub" style="width: 80%;" @click="xiugai()">
					修改
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
				<input type="text" placeholder="输入学生姓名/学号搜索" v-model="sep" />
				<view class="sss" @click="seps()">搜索</view>
			</view>
			<view style="flex: 1; overflow-y: auto; max-height: 450px;">
				<view class="stus" v-for="(item,index) in stuss" :key="index"
					style="width:86vw;padding: 16px 0; margin-left: 7vw;margin-top: 15px; " @click="Adds(index)">
					<view style="margin-left: 16px;">
						<view class="name">{{item.name}}</view>
						<view class="msg">学号：{{item.num}}</view>
						<view class="msg">专业：{{item.pros}}</view>
						<view class="msg">班级：{{item.ban}}</view>
						<view class="msg">电话：{{item.phone}}</view>
					</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		onMounted,
		computed
	} from 'vue';
	//import logsVue from '../logs/logs.vue';
	import {
		setProject,
		deleteProject,
		sepStudent,
		changePublishProject,
		getTemplate
	} from '../../api'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import axios from "axios";
	// 正确的使用方式
	import {
		useRoute
	} from 'vue-router';
	// 在子组件或任何其他页面中
	import {
		useMainStore
	} from '@/stores/useMainStore';
	const mainStore = useMainStore();
	const route = useRoute();
	let header = ref('')
	const title = ref('')
	const changes = ref(true)
	const content = ref('')
	const place = ref('')
	const time = ref('')
	const resultdisplay = ref('')
	let ops = ref(true)
	let stus = ref([])
	let stuss = ref([])
	let delnum = ref(0)
	const delsno = ref('')
	const delstu = ref([])
	const showModal1 = ref(false);
	const showModal2 = ref(false);
	const showModal3 = ref(false); // 控制显示隐藏
	const indicatorStyle = ref('height: 50px; color: #007aff;')
	const stunum = ref('请选择')
	const releasestatus = ref(1)
	const budge = ref(0)
	const sep = ref('')
	const code = ref(null)
	const lastStuList = ref([])

	function closeModal() {
		showModal1.value = false;
		showModal2.value = false;
		showModal3.value = false;
		visible.value = false
	}
	// stuss.value = [{
	// 	name: '张三',
	// 	num: 123456789098765,
	// 	pros: '计算机与科学',
	// 	ban: '大一四班',
	// 	phone: 1534567890
	// }]

	function dels() {
		console.log(delnum.value, delsno.value)
		if (delnum.value >= 0 && delnum.value < stus.value.length) {
			stus.value.splice(delnum.value, 1); // 删除对应下标的元素
		}
		delstu.value.push(delsno.value)
		console.log(delstu.value)
		closeModal()
	}
	const isPlaceholderSelected = computed(() => {
		return stunum.value === '请选择';
	});
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

	function quanshan() {
		stus.value = []
	}

	// 下载模板的函数
	async function moban() {
		// 使用 uni.showModal 弹出确认框
		uni.showModal({
			title: "提示",
			content: "确定要下载模板吗？",
			showCancel: true,
			success: async (res) => {
				if (res.confirm) {
					// 用户点击“确定”按钮
					try {
						// 调用后端接口获取模板文件
						const result = await getTemplate('student');

						let blob = new Blob([result], {
							type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
						});
						// 检查是否获取到 Blob 数据
						if (!blob) {
							uni.showToast({
								title: "文件获取失败",
								icon: "none"
							});
							return;
						}

						// 创建一个 URL
						const url = URL.createObjectURL(blob);

						// 创建一个 a 标签并触发下载
						const link = document.createElement("a");
						link.href = url;
						link.download = "example.xlsx"; // 设置下载文件的文件名
						link.click();

						// 释放 URL 对象
						URL.revokeObjectURL(url);

						uni.showToast({
							title: "文件下载成功",
							icon: "success"
						});


					} catch (error) {
						console.error("Error fetching user data:", error);
						uni.showToast({
							title: "下载失败，请检查网络或联系管理员",
							icon: "none",
							duration: 1500
						});
					}
				} else {
					// 用户点击“取消”按钮
					uni.showToast({
						title: "已取消下载",
						icon: "none",
						duration: 1500
					});
				}
			}
		});
	}

	// 使用 UniApp 的文件下载方法
	async function downloadFile(fileUrl) {
		return new Promise((resolve, reject) => {
			uni.downloadFile({
				url: fileUrl, // 文件的 URL
				success: (res) => {
					if (res.statusCode === 200) {
						// 下载成功，返回文件路径
						resolve(res.tempFilePath);
					} else {
						uni.showToast({
							title: "文件下载失败",
							icon: "none"
						});
						reject();
					}
				},
				fail: () => {
					uni.showToast({
						title: "文件下载失败",
						icon: "none"
					});
					reject();
				}
			});
		});
	}
	async function daoru() {
		try {
			// 使用 uni.chooseFile 打开文件选择对话框
			const {
				tempFilePaths,
				tempFiles
			} = await uni.chooseFile({
				count: 1,
				type: 'file',
				extension: ['xls', 'xlsx'], // 限制文件扩展名
			});

			if (tempFilePaths.length === 0) {
				uni.showToast({
					title: "请选择文件",
					icon: "none"
				});
				return;
			}

			const file = tempFiles[0];
			// 文件大小检查可以在这里进行，如果需要的话

			// 创建 FormData 并上传文件
			const uploadTask = uni.uploadFile({
				url: '/baseurl/openuse/getintentionstudents', // 更改为实际服务器地址
				filePath: file.path,
				name: 'studentfile',
				formData: {}, // 如果有其他表单数据，可以在此添加
				header: {
					"Content-Type": "multipart/form-data",
					Authorization: uni.getStorageSync("v_token"), // 假设 token 存储在 storage 中
				},
				success: (uploadRes) => {
					console.log("File uploaded successfully:", uploadRes);
					if (uploadRes.data.code == 0) {
						let arr = res.data.data.Studentinfo
						if (Array.isArray(arr))
							arr.forEach((i, k) => {
								stuss.value.push({
									name: i.name,
									num: i.sno,
									pros: i.majorName,
									ban: i.class,
									phone: i.phone
								})
							})
						else {
							stuss.value.push({
								name: arr.name,
								num: arr.sno,
								pros: arr.majorName,
								ban: arr.class,
								phone: arr.phone
							})
						}
						uni.showToast({
							title: "文件导入成功",
							icon: "success"
						});
					} else {
						uni.showToast({
							title: "文件导入失败",
							icon: "none"
						});
					}
					// setTimeout(() => {
					// 	getData(1, 0); // 假设 getData 是你定义的函数
					// }, 500);
				},
				fail: (err) => {
					console.error("Error uploading file:", err);
					uni.showToast({
						title: "文件导入失败",
						icon: "none"
					});
				}
			});

			// 监听上传进度变化事件（可选）
			uploadTask.onProgressUpdate((res) => {
				console.log('上传进度：' + res.progress);
			});

		} catch (error) {
			console.error("Error selecting or uploading file:", error);
			uni.showToast({
				title: "操作失败",
				icon: "none"
			});
		}
	}

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
		postMsg()


	}

	function addstu() {
		showModal3.value = true
	}
	const requiredFieldsRefs = {
		title,
		content,
		place,
		time,
		stunum,
		resultdisplay
	};
	// 定义一个空值检查函数
	function isEmpty(v) {
		console.log(v)
		if (v == '' || v == null) return true;
		return false;
	}

	function fff() {

		let allFilled = true;
		for (let fieldName of Object.keys(requiredFieldsRefs)) {
			const fieldRef = requiredFieldsRefs[fieldName];
			if (isEmpty(fieldRef.value)) {
				console.warn(`${fieldRef} is empty`);

				allFilled = false;
			}
		}
		if (allFilled)
			showModal1.value = true
		else
			uni.showToast({
				title: '请填写完整信息!',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
	}
	async function xiugai() {
		let appointStudent = [];
		let deleteStudent = [];

		// 检查 lastStuList 和 stus 是否为空
		if (!lastStuList.value || lastStuList.value.length === 0) {
			console.warn("lastStuList is empty");
			// 如果 lastStuList 为空，所有 stus 中的元素都应该加入 appointStudent
			if (stus.value && stus.value.length > 0) {
				appointStudent = stus.value.map(item => item.num);
			}
		} else if (!stus.value || stus.value.length === 0) {
			console.warn("stus is empty");
			// 如果 stus 为空，所有 lastStuList 中的元素都应该加入 deleteStudent
			if (lastStuList.value && lastStuList.value.length > 0) {
				deleteStudent = lastStuList.value.map(item => item.sno);
			}
		} else {
			// 如果两个数组都不为空，则进行正常的比较逻辑
			let lastStuMap = new Map(lastStuList.value.map(item => [item.sno, item]));
			let stusMap = new Map(stus.value.map(item => [item.num, item]));

			// 比较 stus 和 lastStuList
			for (let ii of stus.value) {
				if (!lastStuMap.has(ii.num)) {
					appointStudent.push(ii.num); // 如果 stus 有，lastStuList 没有，则加入 appointStudent
				}
			}

			for (let lastStu of lastStuList.value) {
				if (!stusMap.has(lastStu.sno)) {
					deleteStudent.push(lastStu.sno); // 如果 lastStuList 有，stus 没有，则加入 deleteStudent
				}
			}
		}

		console.log("Appoint Student:", appointStudent);
		console.log("Delete Student:", deleteStudent);
		let budgetSrouce = ops.value ? 0 : 1


		delstu.value = delstu.value.filter(item => !appointStudent.includes(item));
		let req = {
			projectPracticeName: header.value,
			projectPracticeCode: mainStore.proId,
			title: title.value,
			teacher_name: localStorage.getItem("v_name"),
			teacher_sno: localStorage.getItem("v_number"),
			content: content.value,
			guidance_place: place.value,
			guidance_time: time.value,
			resultDisplay: resultdisplay.value,
			studentRequirements: stunum.value,
			releaseStatus: 1,
			budgetSrouce,
			majorToGrade: {},
			budget: budge.value,
			appointStudent,
			deleteStudent,
			code: code.value,
		}
		let ress = await changePublishProject(req)
		console.log(ress, 'ffffssssss', req)
		closeModal()
		if (ress.data.message == 'success') {
			uni.showToast({
				title: '题目已修改!',
				icon: 'success', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/t-index/t-index'
				});
			}, 1000);
		} else {
			uni.showToast({
				title: ress.message,
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}
	}
	async function postMsg() {


		let budgetSrouce = ops.value ? 0 : 1
		let appointStudent = []
		stus.value.forEach((i, k) => {
			appointStudent.push(i.num)
		})
		let req = {
			projectPracticeName: header.value,
			projectPracticeCode: mainStore.proId,
			title: title.value,
			content: content.value,
			guidance_place: place.value,
			guidance_time: time.value,
			resultDisplay: resultdisplay.value,
			studentRequirements: stunum.value,
			releaseStatus: 1,
			budgetSrouce,
			majorToGrade: {},
			budget: budge.value,
			appointStudent,
			code: code.value,
		}
		let ress = await setProject(req)
		console.log(ress, 'aaahhhhhhh')
		closeModal()
		if (ress.data.message == 'success') {
			uni.showToast({
				title: '题目已发布!',
				icon: 'success', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/t-index/t-index'
				});
			}, 1000);
		} else {
			uni.showToast({
				title: ress.message,
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}

	}
	onShow(() => {
		console.log(mainStore.profession, mainStore.proId, mainStore.shareCopy, mainStore.changeData,
			'ssss');
		header.value = mainStore.profession
		let opss, op, po, pos, poss = null
		if (mainStore.shareCopy != null) {
			opss = mainStore.shareCopy
			op = mainStore.shareCopy.Course
			po = mainStore.shareCopy.StudentLists
		}
		if (mainStore.changeData != null) {
			console.log(mainStore.changeData, 'kkks')
			changes.value = false
			pos = mainStore.changeData.Course
			poss = mainStore.changeData.StudentLists
			lastStuList.value = mainStore.changeData.StudentLists
		}

		if (pos != null) {
			code.value = pos.code
			title.value = pos.title
			content.value = pos.content
			// let parts = pos.guidance.split("&&")
			// let [field1, field2] = parts
			place.value = pos.guidancePlace
			time.value = pos.guidanceTime
			resultdisplay.value = pos.resultDisplay
			stunum.value = pos.studentRequirements
			ops.value = pos.budgetSrouce == 0 ? true : false
			budge.value = pos.budget
			mainStore.setChangeData(null)
		} else if (op != null) {
			code.value = op.code
			title.value = op.title
			content.value = op.content
			// let parts = op.guidance.split("&&")
			// let [field1, field2] = parts
			place.value = op.guidancePlace
			time.value = op.guidanceTime
			resultdisplay.value = op.resultDisplay
			stunum.value = op.studentRequirements
			ops.value = op.budgetSrouce == 0 ? true : false
			budge.value = op.budget
			// appointstudent.value = op.appointstudent

			mainStore.setCopyData(null)
		} else if (opss != null) {
			code.value = opss.code
			title.value = opss.title
			content.value = opss.content
			// let parts = op.guidance.split("&&")
			// let [field1, field2] = parts
			place.value = opss.guidancePlace
			time.value = opss.guidanceTime
			resultdisplay.value = opss.resultDisplay
			stunum.value = opss.studentRequirements
			ops.value = opss.budgetSrouce == 0 ? true : false
			budge.value = opss.budget
			// appointstudent.value = op.appointstudent

			mainStore.setCopyData(null)
		}
		if (po != null) {

			po.forEach((i, k) => {
				stus.value.push({
					name: i.name,
					num: i.sno,
					pros: i.majorName,
					ban: i.class,
					phone: i.phone
				})

			})
		}
		if (poss != null) {
			poss.forEach((i, k) => {
				stus.value.push({
					name: i.name,
					num: i.sno,
					pros: i.majorName,
					ban: i.class,
					phone: i.phone
				})
			})
		}
	});

	async function zanchun() {
		let budgetSrouce = ops.value ? 0 : 1
		let appointStudent = []
		stus.value.forEach((i, k) => {
			appointStudent.push(i.num)
		})
		let req = {
			projectPracticeName: header.value,
			projectPracticeCode: mainStore.proId,
			title: title.value,
			content: content.value,
			guidance_place: place.value,
			guidance_time: time.value,
			resultDisplay: resultdisplay.value,
			studentRequirements: stunum.value,
			releaseStatus: 0,
			budgetSrouce,
			majorToGrade: {},
			budget: budge.value,
			appointStudent,
			code: code.value
		}
		let ress = await setProject(req)
		console.log(ress, 'zan')
		if (ress.data.message == 'success') {
			uni.showToast({
				title: '题目已暂存!',
				icon: 'success', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/t-index/t-index'
				});
			}, 1000);
		} else {
			uni.showToast({
				title: '题目暂存失败',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		}
	}
	async function seps() {
		let res = await sepStudent(sep.value, mainStore.proId)
		stuss.value = []
		console.log(res, sep.value)
		if (res.data.message == 'failed') {
			uni.showToast({
				title: '搜索失败',
				icon: 'error', // 使用 'none' 表示纯文本弹窗
				duration: 1000 // 显示时长为 2000 毫秒
			});
		} else {
			let arr = res.data.Studentinfo.StudentLists
			if (arr == null) {
				uni.showToast({
					title: '无数据',
					icon: 'error', // 使用 'none' 表示纯文本弹窗
					duration: 1000 // 显示时长为 2000 毫秒
				});
			} else {
				if (Array.isArray(arr))
					arr.forEach((i, k) => {
						stuss.value.push({
							name: i.name,
							num: i.sno,
							pros: i.majorName,
							ban: i.class,
							phone: i.phone
						})
					})
				else {
					stuss.value.push({
						name: arr.name,
						num: arr.sno,
						pros: arr.majorName,
						ban: arr.class,
						phone: arr.phone
					})
				}
			}
		}
	}

	function Adds(e) {
		closeModal()
		stus.value.push(stuss.value[e])
		stuss.value = []
		sep.value = ''
	}
</script>

<style lang="scss" scoped>
	.containers {
		width: 100vw;
		height: auto;

		overflow-y: auto;
		padding-bottom: 50px;
	}

	.inputs input {
		width: 95%;
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

	.huu {
		color: #2077F8 !important;
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
		bottom: -600px; // 初始状态，弹窗在屏幕下方
		left: 0;
		width: 100%;
		transition: bottom 0.3s ease-in-out; // 平滑动画效果
	}

	.popup-views.show {
		bottom: 0; // 显示状态，弹窗在底部
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