<template>
  <div class="wrapper">
    <!--  @click="sendsTo = true"  TEST NEEDS TO BE SETUP-->
    <router-link
      :to="{ name: 'Event', params: { id: featured.id, featured } }"
      class="featured-meetups"
      @click.native="isClicked = true"
      v-for="(featured, index) in getFeatured"
      :key="index"
      style="text-decoration: none"
    >
      <div class="card">
        <img
          :src="require('../assets/' + featured.image + '.jpg')"
          alt="eventIMG"
        />
        <div class="text">
          <h3>{{ featured.title }}</h3>
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
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: auto;
}

a {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgb(216, 216, 216);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}

.card {
  border-top: none;
  width: 300px;
  border-radius: 4px;

  img {
    display: block;
    width: 100%;
    border-radius: 4px 4px 0 0;
  }
}

.text {
  padding: 1rem 12px;
  border-radius: 0 0 4px 4px;

  h3,
  p {
    color: #000;
  }

  h3 {
    margin-bottom: 6px;
  }
}
</style>
