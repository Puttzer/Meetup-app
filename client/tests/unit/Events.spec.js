import Events from "@/views/Events.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import axios from'axios'

jest.mock("axios", () => ({
	get: () => Promise.resolve({ data: [{ title: "RTX @ Home!" }] }),
}));
const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
	state: {
		events: [{ title: "RTX @ Home!" }]
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
			Vuex,
			stubs: ["router-link"],
			store,
			localVue
		});
	})

	test('should mock an axios call so that we get the title of the first listed meetup', async () => {
		await wrapper.vm.$nextTick(() => {
			expect(wrapper.vm.events).toEqual([{ title: "RTX @ Home!" }])

			
		})
	});


})
