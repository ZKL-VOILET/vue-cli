/**手动安装vue-router时，其版本较低，没有下面两个方法，导致失败 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "",
		name: "default",
		redirect: "/home",
		component: () => import("views/home/Home.vue"),
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("views/home/Home.vue"),
	},
	{
		path: "/category",
		name: "Category",
		component: () => import("views/category/Category.vue"),
	},
	{
		path: "/cart",
		name: "Cart",
		component: () => import("views/cart/Cart.vue"),
	},
	{
		path: "/profile",
		name: "Profile",
		component: () => import("views/profile/Profile.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});
export default router;
