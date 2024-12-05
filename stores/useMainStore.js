// stores/useMainStore.js
import {
	defineStore
} from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		sharedData: null,
		profession: null,
	}),
	actions: {
		setSharedData(data) {
			this.profession = data;
		}
	}
});