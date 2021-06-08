<template>
<div>
  <b-button v-b-toggle.collapse variant="primary" class="btn-post">Créer une publication<b-icon class="icon" icon="pencil-fill"></b-icon></b-button>
  <b-collapse id="collapse" class="mt-2">
        <form v-on:submit.prevent="userPost" class="createPost" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <b-form-textarea name="content" type="text" v-model="body" required id="post"></b-form-textarea>
          </div>
          <div class="form-group">
            <b-button variant="success" type="sumbit" class="btn-publish">Publier</b-button>
          </div>
          <div class="form-group">
            <input type="file" name="image" id="image" ref="image" v-on:change="changeImg()"/>
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
        image:''
      }
    },
  methods:{
    changeImg(){
      this.image = this.$refs.image.files[0];
      console.log(this.image);
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
        formData.append('image', this.image);
      }
      const token =localStorage.getItem('token')
      axios.post('http://localhost:8080/api/posts/',formData, {
      headers : {
        'Content-Type': 'application/json',
        Authorization : 'Bearer ' + token
      }
      })
      .then(res =>{
        console.log(res);
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
.createPost{
  width: 50%;
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
</style>