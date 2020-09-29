import Events from "@/views/Events.vue";
import { shallowMount } from "@vue/test-utils";
import vuex from "vuex"

jest.mock("axios", () => ({
	get: () => Promise.resolve({ data: [{ title: "RTX @ Home!" }] }),
}));


describe("Events.vue", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(Events, {
			vuex,
			stubs: ["router-link"]
		});
	})

	test('should mock an axios call so that we get the title of the first listed meetup', async () => {
		await wrapper.vm.$nextTick(() => {
			expect(wrapper.vm.items).toEqual([{ title: "RTX @ Home!" }])
		})
	});


})
