import axios from "axios";
// 封装网络请求模块
export function request(config) {
	const instance = axios.create({
		baseURL: "http://123.207.32.32:8000",
		timeout: 5000,
	});

	instance.interceptors.request.use(
		(config) => {
			return config;
		},
		(err) => {
			console.log(err);
		}
	);
	instance.interceptors.response.use(
		(res) => {
			return res.data;
		},
		(err) => {
			console.log(err);
		}
	);
	// promise对象
	return instance(config);
}
