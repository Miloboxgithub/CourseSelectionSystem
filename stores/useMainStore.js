// stores/useMainStore.js
import {
	defineStore
} from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		sharedData: null,
		profession: null,
		shareCopy: null,
		shareResult: null,
		shareDetail: null,
	}),
	actions: {
		setSharedData(data) {
			this.profession = data;
		},
		setCopyData(data) {
			this.shareCopy = data;
		},
		setResultData(data) {
			this.shareResult = data
		},
		setDetailData(data) {
			this.shareDetail = data
		}
	}
});