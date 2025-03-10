<template>
	<view class="custom-tab-bar">
		<view v-for="(item, index) in currentTabList" :key="index" class="tab-item"
			:class="{ active: selectedIndex === index }" @click="switchTab(item.pagePath)">
			<image class="tab-icon" :src="selectedIndex === index ? item.selectedIconPath : item.iconPath" />
			<text class="tab-text">{{ item.text }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 定义两个不同的 tabBar 列表
				tabBars: {
					student: [{
							pagePath: "pages/s-index/s-index",
							text: "首页",
							iconPath: "static/1.svg",
							selectedIconPath: "static/11.svg"
						},
						{
							pagePath: "pages/s-record/s-record",
							text: "选课记录",
							iconPath: "static/22.svg",
							selectedIconPath: "static/2.svg"
						},
						{
							pagePath: "pages/s-my/s-my",
							text: "我的",
							iconPath: "static/3.svg",
							selectedIconPath: "static/33.svg"
						}
					],
					teacher: [{
							pagePath: "pages/t-index/t-index",
							text: "首页",
							iconPath: "static/1.svg",
							selectedIconPath: "static/11.svg"
						},
						{
							pagePath: "pages/t-my/t-my",
							text: "我的",
							iconPath: "static/3.svg",
							selectedIconPath: "static/33.svg"
						}
					]
				},
				currentTabList: [], // 当前显示的 tabBar 列表
				selectedIndex: 0 // 当前选中的 Tab 索引
			};
		},
		watch: {
			"$route.path": {
				handler() {
					this.updateTabList();
				},
				immediate: true
			}
		},
		methods: {
			switchTab(pagePath) {
				uni.switchTab({
					url: pagePath
				});
			},
			updateTabList() {
				const currentPath = this.$route.path;
				if (currentPath.includes("s-")) {
					// 如果是学生页面，显示学生 tabBar
					this.currentTabList = this.tabBars.student;
				} else if (currentPath.includes("t-")) {
					// 如果是教师页面，显示教师 tabBar
					this.currentTabList = this.tabBars.teacher;
				}

				// 更新选中状态
				this.selectedIndex = this.currentTabList.findIndex(
					item => item.pagePath === currentPath
				);
			}
		}
	};
</script>

<style scoped>
	.custom-tab-bar {
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		border-top: 1px solid #ddd;
		padding: 10px 0;
	}

	.tab-item {
		text-align: center;
	}

	.tab-icon {
		width: 40px;
		height: 40px;
	}

	.tab-text {
		font-size: 14px;
		color: #333;
	}

	.active .tab-text {
		color: #000;
	}
</style>