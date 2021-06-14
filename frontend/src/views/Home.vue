<template>
  <div id="background">
    <NavLogSign/>
    <Login/>
  </div>
</template>
<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import NavLogSign from '@/components/NavLogSign.vue'
export default {
  name: 'Home',
  components: {
    Login, NavLogSign
  }
}
</script>
