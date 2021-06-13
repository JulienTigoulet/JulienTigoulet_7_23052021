<template>
<div>
  <b-button v-b-toggle.collapse variant="primary" class="btn-post">Créer une publication<b-icon class="icon" icon="pencil-fill"></b-icon></b-button>
  <b-collapse id="collapse" class="mt-2" v-model="collapse">
        <form v-on:submit.prevent="userPost" ref="file-input" class="createPost" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <b-form-textarea aria-label="Texte" rows="3" name="content" type="text" v-model="body" id="post"></b-form-textarea>
          </div>
          <div class="form-group" ref="reset">
            <input aria-label="bouton envoyé image" type="file" name="image" id="image" ref="image" v-on:change="changeImg()"/>
          </div>
          <div class="form-group">
            <b-button variant="success" type="sumbit" class="btn-publish">Publier</b-button>
          </div>
        </form>
  </b-collapse>
 </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        body: '',
        image:'',
        collapse:false,
      } 
    },
  methods:{
    changeImg(){
      this.image = this.$refs.image.files[0];
    },
    userPost(){
      const formData = new FormData();
      if (this.image !== null) {
        formData.append('image', this.image);
        formData.append('body', this.body);
        formData.append('userUuid', localStorage.getItem('userUuid'));
      } else {
        formData.append('body', this.body);
        formData.append('userUuid', localStorage.getItem('userUuid'));
      }
      axios.post('http://localhost:8080/api/posts/',formData, {
      headers : {
        'Content-Type': 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
      })
      .then(res =>{
        console.log(res);
        this.$parent.allPosts()
        this.body = "",
        this.$refs['file-input'].reset()
        this.image = null
        this.collapse= false
      })
      .catch(err =>{
      console.log(err)
      })
    }
  }
  }
</script>
<style scoped>
#post{
  resize: none;
}
.btn-post{
  display: flex;
  align-items: center;
}
.icon{
  margin-left:10px;
}
.btn-publish{
  margin-top:5px;
  margin-left: 5px;
}
@media screen and (max-width: 425px) {
.btn-post{
  margin-top:5px;
}
}
</style>