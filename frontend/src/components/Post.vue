<template>
  <div class="posts">
    <div class="form-group post">
      <div class="header-post">
      <p class="name">{{name}}:</p>
      <b-dropdown no-caret size="lg" v-if="validated" variant="link" toggle-class="text-decoration-none">
        <template #button-content>
          <b-icon icon="three-dots"></b-icon>
        </template>
          <b-dropdown-item-button primary="danger" v-on:click="showModifyPost">
          <b-icon icon="vector-pen" aria-hidden="true"></b-icon>
          Modifier
        </b-dropdown-item-button>
        <b-dropdown-item-button variant="danger" v-on:click="deletePost">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Supprimer
        </b-dropdown-item-button>
      </b-dropdown>
      </div>
      <div class="bodyPost container">
        <div class="content row">
          <div class="body col" v-if="modification">
            <p class="wrap">{{body}}</p>
            <div class="img">
              <b-img id="img" center :src="imageUrl" alt=""></b-img>
            </div>
          </div>
          <div v-else id="modificationContentPost" class="col">
          <div class="form-group" ref="reset">
            <input aria-label="bouton envoyé image" type="file" name="image" id="image" ref="image" v-on:change="changeImg()"/>
          </div>
            <textarea id="textModification" name="newBody" v-model="newBody" cols="30" rows="5" required></textarea>
            <div class="container" id="containerImg" v-if="this.imageUrl != null">
              <img :src="imageUrl" center id="img" alt="imageUrl">
              <b-button v-b-tooltip.hover.bottom title="Supprimer votre image" v-on:click="deleteImg" id="deleteImg">
                <b-icon  icon="trash-fill" variant="danger" aria-hidden="true"></b-icon>
              </b-button>
            </div>
            <b-button variant="success" v-on:click="sendModifyPost">Modifier</b-button>
          </div>
        </div>
      </div>
    </div>
      <b-button v-b-toggle="`${postUuid}`" variant="success" reset class="btn-answer">Répondre</b-button>
      <b-button v-b-toggle="`2${postUuid}`" v-if="numberOfComments > 0" variant="primary" v-on:click="showComments" class="btn-comments"> Commentaires ({{numberOfComments}})</b-button>
      <b-collapse :id="`${postUuid}`" class="mt-2 collapse-card" v-model="collapse">
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
      <b-collapse :id="`2${postUuid}`" class="mt-2 showComments">
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
      validated : false,
      modification : true,
      newBody : this.body,
      image : ""
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
    postUuid:{
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
    changeImg(){
      this.image = this.$refs.image.files[0];
    },
    deleteImg(){
      const userUuid = localStorage.getItem('userUuid')
      let body = this.newBody
      const imageUrl = null
      if(!body){
        this.deletePost()
      }
      const formPost = {userUuid,body,imageUrl}
      axios.put(`http://localhost:8080/api/posts/${this.postUuid}`,formPost,{
        headers : {
        'content-type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(()=>{
        this.$parent.allPosts()
        this.image = null
        this.modification = true
      })
    },
    sendModifyPost(){
      const formData = new FormData();
      if(this.image !== null){
        formData.append('image', this.image);
        formData.append('body', this.newBody);
        formData.append('userUuid', localStorage.getItem('userUuid'));
      }
      else{
         this.image = this.imageUrl 
        formData.append('image', this.image)
        formData.append('body', this.newBody)
        formData.append('userUuid', localStorage.getItem('userUuid'))
      }
      console.log(formData);
      axios.put(`http://localhost:8080/api/posts/${this.postUuid}`,formData,{
        headers : {
        'content-type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(res=>{
        console.log(res);
        this.$parent.allPosts()
        this.modification = true
      })
      .catch(err =>{
        console.log(err);
      })
    },
    showModifyPost(){
      this.modification = false
      this.collapse= false
    },
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
      this.collapse= false
      axios.delete(`http://localhost:8080/api/posts/${this.postUuid}`, {
        headers : {
          'content-type': 'application/json',
          Authorization : 'Bearer ' + localStorage.getItem('token')
        }
        })
        .then(()=>{
          this.$parent.allPosts()
          this.image = null
        })
      .catch(err => {
      console.log(err);
      })   
    },
    userComment(){
      const userUuid = localStorage.getItem('userUuid')
      const body = this.comment
      const postUuid = this.postUuid
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
      axios.get(`http://localhost:8080/api/posts/${this.postUuid}`, {
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
#modificationContentPost{
  display: flex;
  flex-direction: column;
}
#post,#textModification{
  resize: none;
  border : 1px solid lightgray
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
#deleteImg{
background-color:white;

}
@media screen and (max-width: 1000px) {

#img {
 max-width: 200px;
 max-height: 200px;
}
}
</style>