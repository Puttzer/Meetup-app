import { shallowMount, createLocalVue } from "@vue/test-utils";
import FullCard from "@/components/FullCard.vue"
import VueRouter from 'vue-router'
import Vuex from 'vuex'

jest.mock("axios", () => ({
	get: () => Promise.resolve({ data: [{ title: "RTX @ Home!" }] }),
}));

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter()

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


describe("FullCard", () => {
	let wrapper = shallowMount(FullCard, {
		localVue,
		router,
		store,
		propsData: {
			featured: {
				id: 1,
				title: "RTX @ Home!",
				details: "RTX is the world’s greatest celebration of animation, gaming, comedy, and internet culture, where amazing entertainment and the best fans in the world meet up for the best weekend of the year.",
				venue: "At your very own home, Start September 15th! ends on the 25th.",
				image: "rtx@home"
			}
		}
	})

	test("should check if signup button exist", () => {
		expect(wrapper.find(".signup").exists()).toBe(true);
	});


	test('should check if a review button exists', () => {
		expect(wrapper.find(".review").exists()).toBe(true);
	})


	test('should check if a text area exists', () => {
		expect(wrapper.find("#review-field").exists()).toBe(true)
	});

})