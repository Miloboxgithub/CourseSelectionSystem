import axios from "axios";

export const Login = async (name, number) => {
	try {
		let response = await axios.post('/api/login/userlogin', {
			name: name,
			sno: number
			// 如果需要，可以在这里添加headers，例如：
			// headers: {
			//     'Content-Type': 'application/json',
			//     Authorization: localStorage.getItem("vuems_token"),
			// }
		});
		console.log(response.data, 'res');
		if (response.data.data.message == 'success')
			localStorage.setItem('v_token', response.data.data.token);
		if (response.data.data.role == 'student')
			return 1; // 假设您想要返回响应数据
		else if (response.data.data.role == 'teacher')
			return 2;
		else return 0;
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return 0;
	}
};
//const v_token = localStorage.getItem('v_token');
//获取个人信息
export const myMsg = async () => {
	try {
		let res = await axios.get('/api/student/getmyinfo', {
			headers: {
				'Authorization': localStorage.getItem("v_token"),
			}
		});
		//console.log(res.data, 'ress');

		return res.data; // 假设您想要返回响应数据
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return error.message;
	}
};
//获取可选课程列表
export const getCourse = async () => {
	try {
		let res = await axios.get('/api/student/getoptionalcourses', {
			headers: {
				'Authorization': localStorage.getItem("v_token"),
			}
		});
		return res.data; // 假设您想要返回响应数据
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return error.message;
	}
};
//获取已选课题
export const getRecord = async () => {
	try {
		let res = await axios.get('/api/student/getmycourse', {
			headers: {
				'Authorization': localStorage.getItem("v_token"),
			}
		});
		return res.data; // 假设您想要返回响应数据
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return error.message;
	}
};