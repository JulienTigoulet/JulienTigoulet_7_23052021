<template>
<div class="allpost">
    <Post
    v-for="post in posts"
    :key="post.id"
    :body="post.body"
    :name="post.user.name"
    :uuid="post.uuid"
    :imageUrl ="post.imageUrl">
    </Post>
</div>
</template>
<script>
import Post from '@/components/Post.vue'
import axios from 'axios'
export default {
    components:{
        Post
    },
    data() {
        return {
            posts:"",
            uuid:"",
            comments:""
        }
    },
    created() {
        axios.get('http://localhost:8080/api/posts/',{
            headers : {
            'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res =>{
            this.posts=res.data
        })
        .catch(err=> {
            console.log(err);
        })
    },
}
</script>
<style scoped>
.allpost{
    width: 50%;
    display: flex;
    flex-direction: column-reverse;
    margin-left:50px
}
</style>