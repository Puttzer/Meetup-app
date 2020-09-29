// test should be:
// sign up to meetup
// review a meetup
import{shallowMount} from "@vue/test-utils";
import FullCard from "@/components/FullCard.vue"
jest.mock("axios", () => ({
	get: () => Promise.resolve({ data: [{ title: "RTX @ Home!" }] }),
}));

describe("FullCard", ()=>{
	let wrapper = shallowMount(FullCard)

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