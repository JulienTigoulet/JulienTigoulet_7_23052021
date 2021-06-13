<template>
    <div class="container">   
        <CreatePost/>
        <div class="allposts">
            <Post
            v-for="post in posts"
            :key="post.id"
            :body="post.body"
            :name="post.user.name"
            :postUuid="post.uuid"
            :imageUrl ="post.imageUrl">
            </Post>
        </div>
    </div>
</template>
<script>
import Post from '@/components/Post.vue'
import CreatePost from '@/components/CreatePost.vue'
import axios from 'axios'
export default {
    components:{
        Post, CreatePost
    },
    data() {
        return {
            posts:"",
            uuid:"",
            comments:""
        }
    },
    mounted() {
        this.allPosts()
    },
    methods :{
        allPosts() {
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
}
</script>
<style scoped>
.allposts{
    width: 45%;
    display: flex;
    flex-direction: column-reverse;
    margin-top:50px;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width: 425px) {
.allposts{
    width: 100%;
}
}
@media screen and (max-width: 100px) {
.allposts{
    width: 100%;
}
}
</style>