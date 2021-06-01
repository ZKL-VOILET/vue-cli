import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

createApp(App).mount("#app");
// 1、axios的基本使用
/* axios({
	url: "http://123.207.32.32:8000/home/multidata",
	//"https://www.w3school.com.cn/",
	//"https://es6.ruanyifeng.com/",
	//"https://cn.vuejs.org/index.html",
	method: "get",
	// 针对get请求的参数拼接
	params: {},
}).then((res) => {
	console.log(res);
}); */

/* axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
	console.log(res);
}); */

// 2、发送并发请求
/* axios
	.all([
		axios.get("http://123.207.32.32:8000/home/multidata"),
		axios.get("https://cn.vuejs.org/index.html"),
	])
	.then(
		// 返回一个数组[res1, res2]，包括两个请求的返回数据；也可用spread划分参数
		axios.spread((res1, res2) => {
			console.log(res1, res2);
		})
	); */

// 3、以上都是使用的全局的axios，接下来创建axios实例
const interface1 = axios.create({
	baseURL: "http://123.207.32.32:8000",
	timeout: 5000,
});

// 4、axios拦截器
// 请求成功或失败拦截
// 拦截器需要放在请求前面才能生效
interface1.interceptors.request.use(
	(config) => {
		console.log(config);
		return config;
	},
	(err) => {
		console.log(err);
		return Promise.reject(error);
	}
);
// 实例请求
interface1
	.get("/home/multidata")
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
