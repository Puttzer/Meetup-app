<template>
	<ul class="events">
        <li
          v-for="item in items.event"
          :key="item.id"
        >
          <div class="events-Item" >
            <h3 class="title">{{ item.title }}</h3>
            <h4 class="details">{{ item.details }}</h4>
            <p class="venue">{{ item.venue }}</p>
          </div>
        </li>
    </ul>
</template>

<script>
	import axios from "axios";
	export default {
		name:"Events",
		async created() {
			const result = await axios.get("http://localhost:1234/api/events");
			this.items = result.data;
		},
		data() {
			return {
				items: {}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
