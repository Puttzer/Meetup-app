import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import HeaderComponent from '@/components/HeaderComponent.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"

describe('HeaderComponent.vue', ()=> {
	let wrapper;

	beforeEach(()=>{
		wrapper = shallowMount(HeaderComponent)
	})

	test('should should check if "navbar" is visible', () => {
		expect(wrapper.find(".navbar").exists()).toBe(true)
	});

	test('should check if pressing "home" in navbar takes you to Home "/"', async () => {
		const localVue = createLocalVue();
		localVue.use(VueRouter);

		const routes =[{path: "/", name:"Home"}];

		const router = new VueRouter({
			routes,
		})

		const wrapper = shallowMount(HeaderComponent, {
			localVue,
			router,
			stubs:{
				RouterLink: RouterLinkStub,
			},
		})

		await wrapper.findAll(".home-route").trigger("click",{
			button: 1,
		})
		
		expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/")
	});
})