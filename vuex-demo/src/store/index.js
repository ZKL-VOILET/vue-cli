import { createStore } from "vuex";

const moduleA = {
	state: {
		name: "moduleA",
	},
	mutations: {
		updateName(state) {
			state.name = "editModuleA";
		},
	},
	getters: {
		// 使用rootState可访问根state里的数据
	},
	actions: {},
};

// Store对象，建议使用一个，即单一状态树
export default createStore({
	// 共享变量
	state: {
		counter: 100,
		people: [
			{ name: "zkl", age: 24 },
			{ name: "wzj", age: 23 },
			{ name: "hhh", age: 30 },
		],
		info: { name: "kobe", height: 1.98 },
	},
	// 方法，参数state. vuex状态改变的唯一方法：提交mutations
	mutations: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		// 参数被称为mutation的载荷(payload)
		incCount(state, payload) {
			console.log(payload);
			state.counter += payload.count;
		},
		addPeople(state, obj) {
			state.people.push(obj);
		},
		updateInfo(state, payload) {
			state.info.name = "zkl";
			console.log(state.info.name);
		},
	},
	// 异步操作
	actions: {
		// context是一个store对象
		asyncUpdate(context, payload) {
			setTimeout(() => {
				console.log(payload);
				context.commit("updateInfo");
			}, 1000);
		},
	},
	// 模块用于存储很多store,避免单一状态树臃肿
	// 每个模块可以拥有自己的state、mutations、getters、actions等
	modules: {
		a: moduleA,
	},
	// 计算属性
	getters: {
		powerCounter(state) {
			return state.counter * state.counter;
		},
		over23peo(state) {
			return state.people.filter((p) => p.age > 23);
		},
		// 传入参数getters可以调用其他getter
		over23peoLength(state, getters) {
			return getters.over23peo.length;
		},
		// 传入参数！！！计算属性不是函数无法传入参数，可以在内部返回一个函数，以此传参
		overAgePeo(state) {
			return function(age) {
				return state.people.filter((p) => p.age > age);
			};
		},
	},
});
