<template>
  <div class="comment">
      <div class="header-comment">
      <p class="name">{{name}} : {{body}}</p>
      <b-dropdown no-caret size="lg"  variant="link" toggle-class="text-decoration-none">
        <template #button-content>
          <b-icon icon="three-dots"></b-icon>
        </template>
          <b-dropdown-item-button primary="danger" v-on:click="modifyComment">
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
  methods: {
    modifyComment(){},
    deleteComment(){
      axios.delete(`http://localhost:8080/api/comments/${this.commentUuid}`,{
        headers : {
        'content-type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(res =>{
        console.log(res);
          console.log( 'post delete');
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