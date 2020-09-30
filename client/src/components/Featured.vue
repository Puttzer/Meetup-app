<template>
  <div>
    <!--  @click="sendsTo = true"  TEST NEEDS TO BE SETUP-->
    <router-link
      :to="{ name: 'Event', params: { id: featured.id } }"
      class="featured-meetups"
      @click.native="isClicked = true"
      v-for="(featured, index) in getFeatured"
      :key="index"
    >
      <div class="card">
        <h1>{{ featured.title }}</h1>
        <p>{{ featured.venue }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Featured",

  computed: {
    ...mapState(["events"]),
    ...mapGetters(["getFeatured"]),
  },
  created() {
    this.$store.dispatch("getEvents");
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(146, 126, 96);
}
</style>
