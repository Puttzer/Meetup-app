<template>
  <nav class="navbar">
    <img src="../assets/logo.png" alt="logo" class="logo" />
    <div class="links">
      <router-link class="home-route" to="/" style="text-decoration: none"
        >Home</router-link
      >
      <router-link
        class="events-route"
        to="/events"
        style="text-decoration: none"
        >Events</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
.navbar {
  display: flex;
  align-items: center;
  margin-right: auto;
  color: #494892;
  font-size: 20px;
  font-family: "Fira Code", monospace;
  background-color: blanchedalmond;

  &:link {
    color: #494892;
  }
}

.links {
  padding: 70px;
  text-decoration: none;
}

.events-route {
  padding: 110px;
}
</style>
