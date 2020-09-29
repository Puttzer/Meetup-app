<template>
  <div class="main">
    <h1 class="title">{{ this.title }}</h1>

    <div class="upper">
      <!-- placeholder image -->
      <img src="../assets/rtx@home.png" alt="rtx@home" />
      <p>{{ this.details }}</p>
    </div>

    <div class="lower">
      <h4>{{ this.venue }}</h4>
      <textarea id="review-field" cols="30" rows="10"></textarea>
    </div>

    <div class="bottom">
      <button class="signup">Attend</button>
      <button class="review">Review this event!</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get(`http://localhost:1234/api/events/${this.$route.params.id}`)
      .then(({ data }) => {
        this.title = data.title;
        this.details = data.details;
        this.venue = data.venue;
      });
  },
  data() {
    return {
      title: "",
      details: "",
      venue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

.main {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  background-color: rgba(0, 0, 255, 0.281);
  height: 100%;
  width: 100%;
}
h1 {
  font-size: 27px;
  font-family: "Fira Code", monospace;
}


</style>
