
<template>
<div>
  <b-jumbotron>
    <template #header> Intranet <img alt="logo groupomania" src="../assets/icon-left-font-monochrome-black.png"> </template>
    <template #lead>
        Bienvenue sur votre espace d'échange
    </template>
    <div>
    <b-nav class="navigation">
        <b-nav-item active class="m-2"><router-link to="/inscription">Inscription</router-link></b-nav-item>
        <b-nav-item active class="m-2"><router-link to="/">Connexion</router-link></b-nav-item>
        <router-link to="/LandingPage"><b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill></router-link>
    </b-nav>
    </div>
  </b-jumbotron>
</div>
</template>
<script>
export default {
    name : "NavLogSign"
}
</script>
<style scoped>
*{
    text-align: center;
}
.navigation{
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 200px;
    height: 100%;
}
</style>