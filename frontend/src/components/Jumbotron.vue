<template>
<div>
  <b-jumbotron class="bandeau">
    <template #header> Intranet <img alt="logo groupomania" src="../assets/icon-left-font-monochrome-black.png"> </template>
  </b-jumbotron>

</div>
</template>
<script>
export default {
    name : "Jumbotron"
}
</script>
<style scoped>
img{
  height:120px;
}
.bandeau{
  padding-left: 35px;
}
.jumbotron{
  background-color:white;
  border-bottom: solid  #086788 3px;
}
</style>