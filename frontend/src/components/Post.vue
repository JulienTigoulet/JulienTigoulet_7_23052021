<template>
  <div class="posts">
    <div class="form-group post">
      <div class="header-post">
      <p class="name">{{name}}:</p>
      <b-dropdown no-caret size="lg" v-if="validated" variant="link" toggle-class="text-decoration-none">
        <template #button-content>
          <b-icon icon="three-dots"></b-icon>
        </template>
          <b-dropdown-item-button primary="danger">
          <b-icon icon="vector-pen" aria-hidden="true" ></b-icon>
          Modifier
        </b-dropdown-item-button>
        <b-dropdown-item-button variant="danger" v-on:click="deletePost">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Supprimer
        </b-dropdown-item-button>
      </b-dropdown>
      </div>
      <div class="bodyPost">
        <p>{{body}}</p>
        <div>
          <b-img id="img" center :src="imageUrl"></b-img>
        </div>

      </div>
    </div>
      <b-button v-b-toggle="`${uuid}`" variant="success" reset class="btn-answer">Répondre</b-button>
      <b-button v-b-toggle="`2${uuid}`" v-if="numberOfComments > 0" variant="primary" v-on:click="showComments" class="btn-comments"> Commentaires ({{numberOfComments}})</b-button>
      <b-collapse :id="`${uuid}`" class="mt-2 collapse-card" v-model="collapse">
          <b-card>
              <form v-on:submit.prevent="userComment" class="createComment">
                  <div class="form-group">
                    <b-form-textarea name="content" type="text" v-model="comment" required id="post"></b-form-textarea>
                  </div>
                  <div class="answer">
                      <b-button variant="success" type="sumbit" class="btn-send">Envoyer</b-button>
                  </div>
              </form>
          </b-card>
      </b-collapse>
      <b-collapse :id="`2${uuid}`" class="mt-2 showComments">
        <Comment
        v-for="comment in comments"
        :key="comment.uuid"
        :body="comment.body"
        :name="comment.userId"
        :commentUuid="comment.uuid">
        </Comment>
      </b-collapse>
  </div>
</template>
<script>
import axios from 'axios'
import Comment from '@/components/Comments.vue'
export default {
  components:{
    Comment
  },
  data() {
    return {
      comments:"",
      comment:"",
      collapse: false,
      numberOfComments:"",
      validated : false
    }
  },
 props:{
    body: {
        type: String,
        default: ""
    },
    name:{
        type:String,
        default:""
    },
    uuid:{
      type:String,
      default:""
    },
    imageUrl: {
    type: String
    },
 },
 mounted() {
   this.showComments()
   this.btnModificationDeleteValidator()
 },
  methods:{
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
    deletePost(){
    const postUuid = this.uuid
    axios.delete(`http://localhost:8080/api/posts/${postUuid}`, {
      headers : {
        'content-type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(()=>{
        this.$parent.allPosts()
      })
    .catch(err => {
    console.log(err);
    })   
    },
    userComment(){
      const userUuid = localStorage.getItem('userUuid')
      const body = this.comment
      const postUuid = this.uuid
      const formComment = {body,userUuid,postUuid}
      axios.post('http://localhost:8080/api/comments/',formComment, {
      headers : {
        'Content-Type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(res =>{
        console.log(res)
        this.comment = ""
        this.collapse = false
        this.showComments()
      })
      .catch(err =>{
        console.log(err)
      })
      },
    showComments(){
      const postUuid = this.uuid
      axios.get(`http://localhost:8080/api/posts/${postUuid}`, {
        headers : {
        'Content-Type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(res =>{
        this.comments=res.data.comments
        this.numberOfComments = this.comments.length
      })
      .catch(err =>{
      console.log(err)
      })
    },
  },
}
</script>
<style scoped>
.header-post{
  display: flex;
  justify-content: space-between;
}
.btn-answer, .btn-comments{
  padding:5px;
  margin:5px
}
.card{
  border: none;
}
#post{
  resize: none;
}
.btn-send{
  margin-top:5px;
  margin-left: 5px;
}
.post{
  border: 1px solid #007bff;
  border-radius:5px;
  padding:10px;
}
.collapse-2{
  display: flex;
  flex-direction: column-reverse;
}
.btn-secondary{
    color: rgb(12, 11, 11);
    background-color: #6c757d;
    border-color: #6c757d;
}
.name{
  font-weight: bold;
  font-size: 18px;
}
.bodyPost{
align-items: center;
}
#img {
 max-width: 300px;
 max-height: 300px;
}
</style>