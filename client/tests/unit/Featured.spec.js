import Featured from "@/components/Featured.vue"
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import axios from 'axios'


const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store({
	state: {
		events: [

			{
				id: 1,
				title: "RTX @ Home!",
				details: "RTX is the world’s greatest celebration of animation, gaming, comedy, and internet culture, where amazing entertainment and the best fans in the world meet up for the best weekend of the year.",
				venue: "At your very own home, Start September 15th! ends on the 25th.",
				image: "rtx@home"
			},
			{
				id: 2,
				title: "Spring here it cometh!",
				details: "Spring cleaning event",
				venue: "Closest park you can find",
				image: "springcleaning"
			},

		]
	},
	mutations: {
		SET_EVENTS_DATA(state, events) {
			state.events = events
		}
	},
	actions: {
		getEvents({ commit }) {
			return axios.get('/api/events')
				.then(({ data }) => {
					commit('SET_EVENTS_DATA', data.event)
				})
		}
	},
	getters: {
		getFeatured(state) {
			return state.events.slice(0, 2)
		}
	}
})


describe("Featured.vue", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Featured, {
			store,
			localVue,
			data() {
				return {
					featured: [{}, {}],
					isClicked: false
				};
			},
			stubs: ['router-link']
		})
	})



	test('should check if items in featured array appears', () => {
		expect(wrapper.vm.featured.length).toBe(2)
	});


	test('should check if user can interact with a featured meetups "Card" ', async () => {
		const event = wrapper.find('.featured-meetups')
		await event.trigger("click")
		console.log("Can a featured event be clicked? = ", wrapper.vm.isClicked)
		await wrapper.vm.$nextTick()
		expect(wrapper.vm.isClicked).toBe(true)

	});


})
