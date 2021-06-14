<template>
    <div class="userAccompt">
        <b-card variant="info" header="Mon profil" align="center">
            <b-card-text>{{name}}</b-card-text>
            <b-card-text>{{email}}</b-card-text>
            <div class="modification">
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
        },
        body:{
            type:String,
            default:""
        },
        imageUrl:{
            type:String,
            default:""
        },
        uuid:{
            type:String,
        },
 },
 methods : {
     deleteUser(){
        const userUuid = localStorage.getItem('userUuid');
        axios.get(`http://localhost:8080/api/auth/${userUuid}`,)
        .then(res=>{
            const user = res.data
            if (user.isAdmin == true) {
                const uuid = this.uuid
                axios.delete(`http://localhost:8080/api/auth/${uuid}`)
                .then(() =>{
                    this.$parent.allUsers()
                    console.log('Suppression de administrateur');
                })
                .catch(err =>{
                    console.log(err);
                })
            } else {
                const uuid = this.uuid
                axios.delete(`http://localhost:8080/api/auth/${uuid}`)
                localStorage.clear()
                this.$router.push('/')
            }
        })
        .catch(err =>{
            console.log(err);
        })
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
