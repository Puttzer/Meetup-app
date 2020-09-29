<template>
  <ul class="events">
    <li v-for="event in events" :key="event.id">
      <div class="eventsCard">
        <h3 class="title">{{ event.title }}</h3>
        <p class="venue">{{ event.venue }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Events",
  created() {
    this.$store.dispatch("getEvents");
  },

  computed: {
    ...mapState(["events"]),
  },
};
</script>

<style lang="scss" scoped>
.eventsCard {
  border: 2px black;
}
</style>
