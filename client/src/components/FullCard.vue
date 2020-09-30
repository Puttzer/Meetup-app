<template>
  <div class="main" v-if="featured">
    <div class="upper">
      <img :src="require('../assets/' + featured.image + '.jpg')" />
      <h1 class="title">{{ featured.title }}</h1>
      <h4>{{ featured.venue }}</h4>
      <button class="signup">Attend</button>
    </div>

    <div class="lower">
      <p class="details">{{ featured.details }}</p>

      <form @submit.prevent="addReview">
        <textarea
          id="review-field"
          cols="30"
          rows="10"
          v-model="review"
          placeholder="Whats yer review mate?"
        ></textarea
        ><button class="review">Review this event!</button>
        <h5>Reviews:</h5>
        <ul>
          <li
            class="review-item"
            v-for="(review, index) in reviews"
            :key="index"
          >
            <p>
              {{ review }}
            </p>
          </li>
        </ul>
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
.main {
  display: grid;
  width: 100%;
  max-width: 1250px;
  margin: auto;
}
img {
  width: 550px;
  display: block;
}
.title {
  font-size: 27px;
  margin: 1rem 0;
}
.upper h4 {
  display: inline-block;
  margin: 0rem 0;
}
h5 {
  margin: 1rem 0;
  font-size: 16px;
  font-weight: bold;
}

.signup {
  display: block;
  margin: 1rem 0;
  display: block;
  background: #494892;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 30px;
  text-align: center;
  border-radius: 5px;
  letter-spacing: 0.25px;
  font-size: 16px;
}

ul {
  list-style: none;
}
.review {
  display: block;
  background: #494892;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 30px;
  text-align: center;
  border-radius: 5px;
  letter-spacing: 0.25px;
  font-size: 16px;
}

.review-item {
  margin: 1rem 0;
}

textarea {
  margin: 2rem 0;
  resize: none;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  font-size: 16px;

  &:focus {
    color: #494892;
  }
}

.details {
  font-weight: bold;
}
.lower {
  max-width: 450px;
}

@media screen and (min-width: 1024px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
