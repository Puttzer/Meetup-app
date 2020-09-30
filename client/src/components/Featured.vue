<template>
  <div>
    <!--  @click="sendsTo = true"  TEST NEEDS TO BE SETUP-->
    <router-link
      :to="{ name: 'Event', params: { id: featured.id, featured } }"
      class="featured-meetups"
      @click.native="isClicked = true"
      v-for="(featured, index) in getFeatured"
      :key="index"
    >
      <div class="card">
        <img
          :src="require('../assets/' + featured.image + '.jpg')"
          alt="eventIMG"
        />
        <div class="text">
          <h1>{{ featured.title }}</h1>
          <p>{{ featured.venue }}</p>
        </div>
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
