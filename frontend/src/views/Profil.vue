<template>
  <div class="allProfil">
    <div id="navigation">
      <NavSide/>
    </div>
    <div class="container mt-5">
      <div v-if="isAdmin == false">
        <Profil
          :name="user.name"
          :email ="user.email"
          :uuid ="user.uuid">
        </Profil>
      </div>
      <div v-if="isAdmin">
        <Profil
          v-for="user in users"
          :key="user.id"
          :name="user.name"
          :uuid ="user.uuid"
          :email ="user.email"> 
        </Profil>
      </div>
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
      user: "",
      users: "",
      isAdmin : false
  }),
  mounted(){
    this.allUsers()
  },
  methods : {
    allUsers() {
      const uuid = localStorage.getItem('userUuid');
      axios.get(`http://localhost:8080/api/auth/${uuid}`,)
      .then(res =>{
          this.user = res.data
        if (this.user.isAdmin == true) {
          axios.get('http://localhost:8080/api/auth/')
          .then(res=>{
            this.users = res.data
            this.isAdmin = true
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.allProfil{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#navigation{
  margin-top:30px;
  max-width: 300px;
}
.container{
  width: 500px;
  padding: 30px;
}
</style>
