import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import("../views/Home.vue")
	},

	{
		path: '/events',
		name: "Events",
		component: () => import("../views/Events.vue")
	},
	{
		path: '/events/:id',
		name: "Event",
		props: true,
		component: () => import("../components/FullCard.vue")
	}

]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router
