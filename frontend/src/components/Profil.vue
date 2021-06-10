<template>
    <div class="userAccompt">
    <b-card variant="info" header="Mon profil" align="center">
        <b-card-text>{{name}}</b-card-text>
        <b-card-text>{{email}}</b-card-text>
        <div class="modification">
            <b-button>Modifier</b-button>
            <b-button v-on:click="deleteUser" variant="danger" >Supprimer</b-button>
        </div>    
      </b-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
     props:{
    email: {
        type: String,
        default: ""
    },
    name:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    }

 },
 methods : {
     deleteUser(){
        try {
            const uuid = localStorage.getItem('userUuid')
            axios.delete(`http://localhost:8080/api/auth/${uuid}`)
            console.log('compte supprimé');
            localStorage.clear()
            this.$router.push('/') 
        } catch (error) {
            console.log(error);
        }
     }
 }
}
</script>
<style scoped>
.userAccompt{
    display: flex;
    flex-direction: column;
    align-content: flex-start;
}
.card-text{
    display: flex;
    margin-left:50px
}
.btn{
    margin:10px
}
</style>
