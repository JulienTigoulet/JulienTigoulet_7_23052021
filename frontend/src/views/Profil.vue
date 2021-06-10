<template>
<div>
  <div id="navigation">
    <NavSide/>
  </div>
  <div class="container mt-5">
  <Profil
  :name="user.name"
  :email ="user.email"> </Profil>
  </div>


</div>
</template>
<script>
import axios from 'axios'
import Profil from '@/components/Profil.vue'
import NavSide from '@/components/NavSide.vue'
export default {
  components : {
    Profil, NavSide
  },
  data:() =>({
      user : ""

  }),
  created() {
      const uuid = localStorage.getItem('userUuid');
      axios.get(`http://localhost:8080/api/auth/${uuid}`,)
      .then(res =>{
          console.log(res);
          this.user = res.data
      })  
  }
}

</script>
<style scoped>
#navigation{
  padding: 10px;
  position: fixed;
  left:75%;
  top: 25%;
}
.container{
  width: 500px;
  padding: 30px;
}
</style>
