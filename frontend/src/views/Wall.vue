<template>
    <div id="landingpage">
        <Header/>
        <div id="content">
        <div id="navigation"><NavSide/></div>
            <CreatePost/>
            <Allposts/>
        </div>
    </div>
</template>
<script>
import NavSide from '@/components/NavSide.vue'
import CreatePost from '@/components/CreatePost.vue'
import Header from '@/components/Header.vue'
import Allposts from '@/components/AllPost.vue'
export default {
  name: 'LandingPage',
  components: {
    Header, NavSide, CreatePost, Allposts
  },

}
</script>
<style scoped>
#content{
  display: flex;
  flex-direction: column;
  margin:50px
}
#navigation{
  padding: 10px;
  position: fixed;
  left:75%;
  top: 25%;
}
</style>
