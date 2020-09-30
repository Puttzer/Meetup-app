// test should be:
// sign up to meetup
// review a meetup
import { shallowMount, createLocalVue } from "@vue/test-utils";
import FullCard from "@/components/FullCard.vue"
import VueRouter from 'vue-router'

jest.mock("axios", () => ({
	get: () => Promise.resolve({ data: [{ title: "RTX @ Home!" }] }),
}));

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


describe("FullCard", () => {
	let wrapper = shallowMount(FullCard, {
		localVue,
		router
	})

	test("should check if signup button exist", () => {
		expect(wrapper.find(".signup").exists()).toBe(true);
	});

	// test('should respond with a confirmation that youve been added to attendees, when clicking on attend button', () => {

	// });

	// test("should replace the text on the button when clicking on it to: You've already signed up! ", () => {

	// });

	test('should check if a review button exists', () => {
		expect(wrapper.find(".review").exists()).toBe(true);
	})


	test('should check if a text area exists', () => {
		expect(wrapper.find("#review-field").exists()).toBe(true)
	});

})