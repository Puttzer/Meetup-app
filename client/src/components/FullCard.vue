<template>
  <div class="main" v-if="featured">
    <div class="upper">
      <h1 class="title">{{ featured.title }}</h1>

      <img :src="require('../assets/' + featured.image + '.jpg')" />
      <h4>{{ featured.venue }}</h4>
      <button class="signup">Attend</button>
    </div>

    <div class="lower">
      <p>{{ featured.details }}</p>
      <ul>
        <li class="review-item" v-for="(review, index) in reviews" :key="index">
          <p>
            {{ review }}
          </p>
        </li>
      </ul>
      <form @submit.prevent="addReview">
        <textarea
          id="review-field"
          cols="30"
          rows="10"
          v-model="review"
        ></textarea>
        <button class="review">Review this event!</button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: ["featured"],
  // created() {
  //   axios
  //     .get(`http://localhost:1234/api/events/${this.$route.params.id}`)
  //     .then(({ data }) => {
  //       this.title = data.title;
  //       this.details = data.details;
  //       this.venue = data.venue;
  //       this.image = data.image;
  //     });
  // },
  data() {
    return {
      review: "",
      reviews: [],
    };
  },

  methods: {
    addReview() {
      this.reviews.push(this.review);
      this.review = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

.main {
  padding: 2rem 1rem;
  display: grid;
  width: 100%;
}
img {
  width: 550px;
  display: block;
}
.title {
  font-size: 27px;
  font-family: "Fira Code", monospace;
}
.upper h4 {
  background-color: rgba(128, 128, 128, 0.274);
  display: inline-block;
}

.signup {
  display: block;
}

ul {
  list-style: none;
}
.review {
  display: block;
}

.review-item {
  margin: 1rem 0;
}

textarea {
  margin: 2rem 0;
}

@media screen and (min-width: 1024px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
