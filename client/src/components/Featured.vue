<template>
  <div>
    <div class="featured-meetups" @click="isClicked=true" v-for="(featured, index) in getFeatured" :key="index" ><h1>{{featured.title}}</h1>
		<p>{{featured.venue}}</p>
	</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Featured",
  
  computed: {
	...mapState(["events"]),
	...mapGetters(['getFeatured'])
  },
  created() {
    this.$store.dispatch("getEvents");
  },
};
</script>

<style lang="scss" scoped>
</style>