<template>
  <div>
    <b-navbar toggleable type="dark" variant="primary">
      <b-navbar-brand href="#">{{name}}</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/#/wall">Toute les publiations</b-nav-item>
          <b-nav-item href="/#/profil"><b-icon icon="person-fill" variant="success"></b-icon> Mon profil</b-nav-item>
          <b-nav-item href="/#/" v-on:click="disconnect" ><b-icon icon="power" variant="danger"></b-icon>Deconnexion</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
    data() {
      return {
        name: localStorage.getItem('name')
      }
    },
  methods: {
    disconnect(){
      localStorage.clear()
      return console.log('storage clear');
    }
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
.b-icon{
  margin-right:5px;
}
</style>
