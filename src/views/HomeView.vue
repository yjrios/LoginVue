<template>
  <div class="home">
    <ScreenFondo />
    <LogIn />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ScreenFondo from '@/components/ScreenFondo.vue'

export default {
  name: 'HomeView',

  components: {
    LogIn,
    ScreenFondo,
  }
}
</script>