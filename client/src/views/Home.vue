<template>
  <div class="home">
    <HeaderComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'Home',
  components: {
    HeaderComponent,
  }
}
</script>
