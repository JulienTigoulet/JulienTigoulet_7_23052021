<template>
<div>
  <Search/>
  <b-navbar toggleable type="dark" variant="primary">
    <b-navbar-brand href="#">Option</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"><b-icon icon="person-fill"></b-icon> Mon profil</b-nav-item>
        <b-nav-item href="#">Mes publications</b-nav-item>
        <b-nav-item href="#">Toute les publications</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  components: {
     Search
  }
}
</script>
<style scoped>
.bg-primary{
  padding: 10px;
  border-radius: 10px;
}
.nav-link{
  padding-left:15px;
}
</style>
