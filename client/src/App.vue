<template>
  <div id="app">
<HeaderComponent />

    <router-view/>
  </div>
</template>
<script>
import HeaderComponent from "./components/HeaderComponent"
export default {
	components:{
		HeaderComponent,
	}

}
</script>

<style lang="scss">


</style>
