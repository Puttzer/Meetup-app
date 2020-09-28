<template>
  <div>
    <div class="featured-meetups"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Featured",
  
  computed: {
    ...mapState(["events"]),
  },
  created() {
    this.$store.dispatch("getEvents");
  },
};
</script>

<style lang="scss" scoped>
</style>