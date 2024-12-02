import axios from "axios";

export const Login = async (name, number) => {
	try {
		let response = await axios.post('/api/login/userlogin', {
			name: name,
			number: number
			// 如果需要，可以在这里添加headers，例如：
			// headers: {
			//     'Content-Type': 'application/json',
			//     Authorization: localStorage.getItem("vuems_token"),
			// }
		});
		console.log(response.data, 'res');
		if (response.data.data.message == 'success')
			localStorage.setItem('v_token', response.data.data.token);
		return 1; // 假设您想要返回响应数据
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return 0;
	}
};