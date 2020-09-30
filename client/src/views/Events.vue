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
.events {
  max-width: 1200px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
}

li {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgb(216, 216, 216);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}

.text {
  padding: 1rem 12px;
}

.eventsCard {
  border: 2px black;
}

img {
  width: 100%;
  display: block;
  height: 260px;
  object-fit: cover;
}
</style>
