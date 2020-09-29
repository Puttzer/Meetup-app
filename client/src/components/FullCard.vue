<template>
  <div>
	<h1>{{ this.title }}</h1>
	<img src="../assets/rtx@home.png" alt="rtx@home">
	<h4></h4>
    <button class="signup">Attend</button>
    <textarea id="review-field" cols="30" rows="10"></textarea>
    <button class="review">Review this event!</button>
    
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
      venue: ""
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
