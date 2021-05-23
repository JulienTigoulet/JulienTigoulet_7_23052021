<template>
  <div class="sidebar">
    <b-nav vertical class="w-25">
      <b-nav-item>Publications<div class="ligne"></div></b-nav-item>
      <b-nav-item>Mon profil<div class="ligne"></div></b-nav-item>
      <b-nav-item>Mes publications<div class="ligne"></div></b-nav-item>
    </b-nav>
</div>
</template>
<script>
export default {
    name :"NavSide"
}
</script>
<style scoped>
.sidebar{
  padding: 20px;
  width: 250px;
  height: 600px;
  background: #086788;
}
.nav-item{
  width: 160px;
  border-radius: 9px;
  margin: 4px;
  background:white;
  height: 42px;
}
.nav-item a{
  color: black;
}
.ligne{
  background: rgb(8,103,136);
  background: linear-gradient(90deg, rgba(8,103,136,1) 0%, rgba(255,255,255,1) 100%);
  position: relative;
  margin: 4px;
  right: 4px;
  width: 60px;
  height: 1px;
}
</style>