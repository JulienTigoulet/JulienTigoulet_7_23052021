<template>
    <div id="landingpage">
        <Header/>
        <div id="content">
        <div id="navigation"><NavSide/></div>
        <ul id="liste_post">
          <li>
            <Post/>
            <ul id="liste_comment">
              <li>
                <Comment/>
              </li>
            </ul>
          </li>
        </ul>
        </div>
    </div>
</template>

<script>
import NavSide from '@/components/NavSide.vue'
import Post from '@/components/Post.vue'
import Comment from '@/components/Comment.vue'
import Header from '../components/Header.vue'
export default {
  name: 'LandingPage',
  components: {
    Header, NavSide, Post, Comment
  }
}
</script>
<style scoped>
#content{
  display: flex;
}
#liste_post{
  padding: 30px;
  margin-left: 10px;
  width: 60%;
  color:crimson
}
#liste_comment{
  color:coral
}
#navigation{
  padding: 10px;
  position: fixed;
  left:75%;
  top: 25%;
}
</style>
