<template>
<div>
  <b-jumbotron class="bandeau">
    <template #header id="header"> Intranet <img id="logo" alt="logo groupomania" src="../assets/icon-left-font-monochrome-black.png"> 
    </template>
    <img id="wave" src="../img/wave.svg" alt="fond vague dessinée">
  </b-jumbotron>

</div>
</template>
<script>

export default {
  name : "Header",
}
</script>
<style scoped>
#logo{
  height:120px;
}
#wave{
  position:sticky;
  top:100px
}
.bandeau{
  display: flex;
  flex-direction: column-reverse;
}
.display-3{
  position: absolute;
  left: 320px;
}
@media screen and (max-width: 1000px) {
.display-3{
  top:60px;
  left:250px
}
}
@media screen and (max-width: 425px) {

.display-3{
top : 0px;
left :120px;
width: 100px;
height: 20px;
font-size: 0;
}
}
</style>