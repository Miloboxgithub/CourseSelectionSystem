import axios from "axios";

export const Login = async (name, number) => {
	try {
		let response = await axios.post('/baseurl/login/userlogin', {
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
		let res = await axios.get('/baseurl/student/getmyinfo', {
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
		let res = await axios.get('/baseurl/student/getoptionalcourses', {
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
		let res = await axios.get('/baseurl/student/getmycourse', {
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
//课题内容查询
export const getCourseContent = async () => {
	try {
		let res = await axios.post('/baseurl/student/getcoursecontent', {
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
//提交选课
export const submitSelectCourse = async () => {
	try {
		let res = await axios.post('/baseurl/student/submitselectcourse', {
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



//新建课题
export const setProject = async (params) => {
	console.log(params, 'Data to send');
	try {
		const res = await axios.post(
			'/baseurl/teacher/createnewtopic', // 请求的URL
			params, // 要POST的数据
			{
				headers: {
					'Authorization': localStorage.getItem("v_token"), // 请求头信息
					'Content-Type': 'application/json' // 确保服务器知道我们发送的是JSON数据
				}
			}
		);
		return res.data; // 返回响应数据
	} catch (error) {
		console.error("Error creating new project:", error.message); // 捕获并打印错误信息
		throw error; // 抛出错误以便调用者处理
	}
};
//创建题目副本
export const setCopyProject = async (p, t) => {
	let params = {
		projectpracticename: p,
		title: t
	}
	try {
		let res = await axios.post(
			'/baseurl/teacher/createtopiccopy',
			params, {

				headers: {
					'Authorization': localStorage.getItem("v_token"),
					'Content-Type': 'application/json' // 确保服务器知道我们发送的是JSON数据
				}
			}
		);
		return res.data; // 假设您想要返回响应数据
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return error.message;
	}
};
//查看所有项目实践
export const allProject = async () => {
	try {
		let res = await axios.get('/baseurl/teacher/getallpropractice', {
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
//切换项目实践
export const changeProject = async (p, id) => {
	try {
		let res = await axios.get('/baseurl/teacher/getseppropractice', {
			params: {
				projectpracticename: p,
				id,
			},
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
//查看出题详情
export const checkDetail = async (p, t) => {
	try {
		let res = await axios.get('/baseurl/teacher/gettopicdetails', {
			params: {
				projectpracticename: p,
				title: t,
			},
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
//查看选题结果
export const checkResult = async (p, t) => {
	try {
		let res = await axios.get('/baseurl/teacher/gettopicresults', {
			params: {
				projectpracticename: p,
				title: t,
			},
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
//选择指定学生
export const sepStudent = async (n) => {
	try {
		let res = await axios.get('/baseurl/teacher/getsepstudents', {
			params: {
				name: n
			},
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
//删除题目
export const deleteProject = async (p, t) => {
	try {
		let res = await axios.delete('/baseurl/teacher/deletetopics', {
			params: {
				projectpracticename: p,
				title: t,
			},
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