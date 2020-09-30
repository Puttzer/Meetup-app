<template>
  <div>
    <ul class="events">
      <li v-for="event in events" :key="event.id">
        <div
          class="eventsCard"
          @click="
            $router.push({
              name: 'Event',
              params: { id: event.id, featured: event },
            })
          "
        >
          <img :src="require('../assets/' + event.image + '.jpg')" alt="" />
          <div class="text">
            <h3 class="title">{{ event.title }}</h3>
            <p class="venue">{{ event.venue }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Events",
  created() {
    this.$store.dispatch("getEvents");
  },

  data() {
    return {
      events: this.$store.state.events,
    };
  },
};
</script>

<style lang="scss" scoped>
.eventsCard {
  border: 2px black;
}

img {
  width: 300px;
}
</style>
