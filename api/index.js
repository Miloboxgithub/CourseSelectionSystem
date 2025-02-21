import axios from "axios";

axios.defaults.baseURL = 'http://43.139.217.147/api'; // 替换为你的baseurl
export const Login = async (name, number) => {
	try {
		let response = await axios.post('/login/userlogin', {
			name: name,
			sno: number
			// 如果需要，可以在这里添加headers，例如：
			// headers: {
			//     'Content-Type': 'application/json',
			//     Authorization: localStorage.getItem("vuems_token"),
			// }
		});
		//console.log(response.data, 'res');
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
//获取模板
export const getTemplate = async (e) => {
	try {
		let res = await axios.get("/admin/getmodulefile", {
			params: {
				type: e,
			},
			headers: {
				Authorization: localStorage.getItem("v_token"),
			},
			responseType: "blob",
		});
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.error("Error fetching user data:", error);
		//返回登录页
		return error.message;
	}
};
//const v_token = localStorage.getItem('v_token');
//获取个人信息
export const myMsg = async () => {
	try {
		let res = await axios.get('/student/getmyinfo', {
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
		let res = await axios.get('/student/getoptionalcourses', {
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
		let res = await axios.get('/student/getmycourse', {
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
export const getCourseContent = async (code) => {
	try {
		let res = await axios.post('/student/getcoursecontent', {
			course_code: code, // 将code作为请求体的一部分发送
		}, {

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
export const submitSelectCourse = async (code) => {
	try {
		let res = await axios.post('/student/submitselectcourse', {
			course_code: code, // 将code作为请求体的一部分发送
		}, {
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
//取消选课
export const cancalSelectCourse = async (code) => {
	try {
		let res = await axios.delete('/student/cancalselectcourse', {
			params: {
				course_code: code,
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


//新建课题
export const setProject = async (params) => {
	console.log(params, 'Data to send');
	try {
		const res = await axios.post(
			'/teacher/createnewtopic', // 请求的URL
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
//修改已发布课题
export const changePublishProject = async (params) => {
	console.log(params, 'Data to change');
	try {
		const res = await axios.put(
			'/teacher/updatetopic', // 请求的URL
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
export const setCopyProject = async (p, t, pcode, code) => {
	let params = {
		projectpractice_name: p,
		projectpractice_code: pcode,
		title: t,
		code: code,
	}
	try {
		let res = await axios.post(
			'/teacher/createtopiccopy',
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
		let res = await axios.get('/teacher/getallpropractice', {
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
		let res = await axios.get('/teacher/getseppropractice', {
			params: {
				projectpractice_name: p,
				projectpractice_code: id,
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
export const checkDetail = async (p, t, pcode, code, r) => {
	console.log(p, t, pcode, code)
	try {
		let res = await axios.get('/teacher/gettopicdetails', {
			params: {
				projectpractice_name: p,
				projectpractice_code: pcode,
				title: t,
				code: code,
				releasestatus: r
			},
			headers: {
				'Authorization': localStorage.getItem("v_token"),
			}
		});
		//console.log(res)
		return res.data; // 假设您想要返回响应数据
	} catch (error) {
		console.error("Error fetching user data:", error.message);
		return error.message;
	}
};
//查看选题结果
export const checkResult = async (p, t, pcode, code) => {
	try {
		let res = await axios.get('/teacher/gettopicresults', {
			params: {
				projectpractice_name: p,
				projectpractice_code: pcode,
				title: t,
				code: code,
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
		let res = await axios.get('/openuse/getsepstudents', {
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
export const deleteProject = async (p, t, pcode, code) => {
	try {
		let res = await axios.delete('/teacher/deletetopics', {
			params: {
				projectpractice_name: p,
				projectpractice_code: pcode,
				title: t,
				code: code,
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

//
export const getResultExecl = async (p, t, pcode, code) => {
	try {
		let response = await axios.get('/teacher/exporttopicresults', {
			params: {
				projectpractice_name: p,
				projectpractice_code: pcode,
				title: t,
				code: code,
			},
			headers: {
				Authorization: localStorage.getItem("v_token"),
				Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
			},
			responseType: 'blob' // 指定响应类型为 blob
		});

		// 创建一个隐式 A 标签用于下载文件
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', `${p+'-' + t +'-'+ code}.xlsx`); // 设置下载的文件名

		// 添加到 DOM 中并点击以触发下载
		document.body.appendChild(link);
		link.click();

		// 下载完成后移除链接
		link.remove();
		window.URL.revokeObjectURL(url); // 释放 URL 对象

		return 'File downloaded successfully';
	} catch (error) {
		console.error("Error fetching Excel file:", error.message);
		return error.message;
	}
};