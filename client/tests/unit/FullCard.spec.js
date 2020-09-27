// test should be:
// sign up to meetup
// review a meetup
import{shallowMount} from "@vue/test-utils";
import FullCard from "@/components/FullCard.vue"

describe("FullCard", ()=>{
	let wrapper = shallowMount(FullCard)

	test("should check if signup button exist", () => {
		expect(wrapper.find(".signup").exists()).toBe(true);
	  });
	
})