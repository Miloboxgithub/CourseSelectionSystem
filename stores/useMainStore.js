// stores/useMainStore.js
import {
	defineStore
} from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		sharedData: null,
		profession: null,
		proId: null,
		shareCopy: null,
		shareResult: null,
		shareDetail: null,
		selectData: null,
		selectCode: null,
		changeData: null,
	}),
	actions: {
		setSharedData(data1, data2) {
			this.profession = data1;
			this.proId = data2;
		},
		setCopyData(data) {
			this.shareCopy = data;
		},
		setResultData(data) {
			this.shareResult = data
		},
		setDetailData(data) {
			this.shareDetail = data
		},
		setSelectData(data, code) {
			this.selectData = data
			this.selectCode = code
		},
		setChangeData(data) {
			this.changeData = data
		},
	}
});