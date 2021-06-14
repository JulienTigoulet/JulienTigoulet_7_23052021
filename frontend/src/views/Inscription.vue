<template>
  <div class="home">
    <NavLogSign/>
    <Inscription/>
  </div>
</template>
<script>
// @ is an alias to /src
import Inscription from '@/components/Inscription.vue'
import NavLogSign from '@/components/NavLogSign.vue'
export default {
  name: 'Home',
  components: {
    Inscription, NavLogSign
  }
}
</script>