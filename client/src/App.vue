<template>
  <div id="app">
    <HeaderComponent />

    <router-view />
  </div>
</template>
<script>
import HeaderComponent from "./components/HeaderComponent";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Fira Code", monospace;
}
button {
  font-family: "Fira Code", monospace;
}
</style>
