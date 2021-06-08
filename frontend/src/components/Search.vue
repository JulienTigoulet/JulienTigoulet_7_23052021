<template>
    <div>
  <b-navbar type="white" variant="white">
    <b-nav-form>
      <b-icon icon="search" class="h4"></b-icon>
      <b-form-input type="text" v-b-tooltip.hover v-model="search" title="Chercher sur la page" class="mr-sm-2" placeholder="Rechercher"></b-form-input>
    </b-nav-form>
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      search:''
    }
  },
}
</script>

<style scoped>
.form-inline{
    list-style: none;
}
.navbar{
padding: 10px;
}
.form-inline{
  display: flex;
  align-items: center;
}
.bi-search{
  margin-right: 5px;
}
</style>