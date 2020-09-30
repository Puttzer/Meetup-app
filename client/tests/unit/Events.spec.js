import Events from "@/views/Events.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import axios from 'axios'

jest.mock("axios", () => ({
	get: () => Promise.resolve({ data: [{ title: "RTX @ Home!" }] }),
}));
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
			}
		]
	},
	mutations: {
		SET_EVENTS_DATA(state, events) {
			state.events = events
		}
	},
	actions: {
		getEvents({ commit }) {
			return axios.get('http://localhost:1234/api/events')
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


describe("Events.vue", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(Events, {
			stubs: ["router-link"],
			store,
			localVue
		});
	})

	test('should mock an axios call so that we get the title of the first listed meetup', async () => {
		await wrapper.vm.$nextTick(() => {
			const expectedValue = [{
				id: 1,
				title: "RTX @ Home!",
				details: "RTX is the world’s greatest celebration of animation, gaming, comedy, and internet culture, where amazing entertainment and the best fans in the world meet up for the best weekend of the year.",
				venue: "At your very own home, Start September 15th! ends on the 25th.",
				image: "rtx@home"
			}]
			expect(wrapper.vm.events).toEqual(expectedValue)
		})
	});


})
