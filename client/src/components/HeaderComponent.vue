<template>
  <nav class="navbar">
    <img src="../assets/logo.png" alt="logo" class="logo" />
      <ul class="nav-links">
        <router-link class="home-route" to="/">Home</router-link>
        <router-link class="events-route" to="/events">Events</router-link>
      </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>

</style>