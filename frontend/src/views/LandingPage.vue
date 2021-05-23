<template>
    <div id="landingpage">
        <Jumbotron/>
        <NavSide/>
    </div>
</template>

<script>
import NavSide from '@/components/NavSide.vue'
import Jumbotron from '@/components/Jumbotron.vue'
export default {
  name: 'LandingPage',
  components: {
    Jumbotron, NavSide
  }
}
</script>
