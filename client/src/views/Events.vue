<template>
	<ul class="events">
        <li
          v-for="event in events"
          :key="event.id"
        >
          <div class="events-event" >
            <h3 class="title">{{ event.title }}</h3>
            <h4 class="details">{{ event.details }}</h4>
            <p class="venue">{{ event.venue }}</p>
          </div>
        </li>
    </ul>
</template>

<script>
	// import axios from "axios";
	import {mapState} from 'vuex'
	export default {
		name:"Events",
		created() {
			
			this.$store.dispatch('getEvents')
		},
		
		computed: {
			...mapState(['events'])
		}
	}
</script>

<style lang="scss" scoped>

</style>
