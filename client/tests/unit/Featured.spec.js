import Featured from "@/components/Featured.vue"
import { shallowMount } from "@vue/test-utils";


describe("Featured.vue", () =>{
	let wrapper;

	beforeEach(() =>{
		wrapper = shallowMount(Featured)
	})

	test('should display the top 2 events', () => {
		
	});

	
})