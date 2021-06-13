
<template>
<header id="background">
  <b-jumbotron>
    <template #header> Intranet <img alt="logo groupomania" src="../assets/icon-left-font-monochrome-black.png"> </template>
    <template #lead>
        Bienvenue sur votre espace d'échange
    </template>
    <div>
    <b-nav class="navigation">
        <b-nav-item v-b-tooltip.hover.bottom title="Si vous n'avez pas de compte"  active class="m-2"><router-link to="/inscription">Inscription</router-link></b-nav-item>
        <b-nav-item v-b-tooltip.hover.bottom title="Pour vous connecter" active class="m-2"><router-link to="/">Connexion</router-link></b-nav-item>
    </b-nav>
    </div>
  </b-jumbotron>
</header>
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
    padding-bottom:30px;
}
img{
    width: 200px;
    height: 100%;
}
#background{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='310' preserveAspectRatio='none' viewBox='0 0 1440 310'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2136%26quot%3b)' fill='none'%3e%3crect width='1440' height='310' x='0' y='0' fill='url(%23SvgjsLinearGradient2137)'%3e%3c/rect%3e%3cpath d='M1114.6021603748225 198.77030752325652L1193.2445427649131 219.84247037554087 1135.674323227107 120.1279251331659z' fill='rgba(64%2c 160%2c 188%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M942.3754539945596 124.978658908022L1022.3499320861081 85.97249968922725 903.3692947757648 45.00418081647352z' fill='rgba(64%2c 160%2c 188%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M73.59908552087121 62.094747959229714L105.73899533616819 155.7256028861654 163.64280012289862 91.41691263379596z' fill='rgba(64%2c 160%2c 188%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1269.8185998494894 229.7945328923349L1310.1203349454531 299.59918571172557 1339.62325266888 189.49279779637126z' fill='rgba(64%2c 160%2c 188%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1309.2472467520752 44.76358648289235L1231.2557674614584 67.12728329798037 1331.610943567163 122.75506577350923z' fill='rgba(64%2c 160%2c 188%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2136'%3e%3crect width='1440' height='310' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2137'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(251%2c 253%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}
a{
    text-decoration: none;
}
.nav-link{
    margin: 0px;
}
</style>