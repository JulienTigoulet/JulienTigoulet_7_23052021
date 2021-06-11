<template>
  <div class="comment">
      <div class="header-comment">
      <p class="name">{{name}} : {{body}}</p>
      <b-dropdown no-caret size="lg" v-if="validated" variant="link" toggle-class="text-decoration-none">
        <template #button-content>
          <b-icon icon="three-dots"></b-icon>
        </template>
          <b-dropdown-item-button primary="danger">
          <b-icon icon="vector-pen" aria-hidden="true"></b-icon>
          Modifier
        </b-dropdown-item-button>
        <b-dropdown-item-button variant="danger" v-on:click="deleteComment">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Supprimer
        </b-dropdown-item-button>
      </b-dropdown>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      validated : false
    }
  },
 props:{
    body: {
        type: String,
        default: ""
    },
    name: {
      type: String,
      default:""
    },
    commentUuid:{
      type: String,
      default:""
    }
 },
 mounted(){
   this.btnModificationDeleteValidator()
 },
  methods: {
        btnModificationDeleteValidator(){
      const userUuid = localStorage.getItem('userUuid')
      axios.get(`http://localhost:8080/api/auth/${userUuid}`)
      .then(res=>{
        if(res.data.isAdmin == true){
          this.validated = true
        }
        if (res.data.name === this.name) {
          this.validated = true
        }
      })
      .catch(err =>{
        console.log(err);
      })
    },
    deleteComment(){
      axios.delete(`http://localhost:8080/api/comments/${this.commentUuid}`,{
        headers : {
        'content-type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(() =>{
        this.$parent.$parent.showComments()
      })
      .catch(err => {
      console.log(err);
      })
    },
  }
  }
</script>
<style scoped>
.comment{
  border: 1px solid #007bff;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  margin-left: 20px;
}
.header-comment{
  display: flex;
  justify-content: space-between;
}
.name{
  font-size: 18px;
}
</style>