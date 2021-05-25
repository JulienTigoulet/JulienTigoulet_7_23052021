<template>
  <div>
    <b-form-textarea
      id="post"
      v-model="text"
      placeholder="Publication..."
      rows="3"
    ></b-form-textarea>
    <div v-if="Publish">
      <b-button variant="primary">Publier</b-button>
    </div>
    <div v-else class="commentbtn">
      <b-button variant="primary">Commenter</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        Publish: true,
      }
    }
  }
</script>
<style scoped>
#post{
    resize: none;
}
.commentbtn{
  display: flex;
  margin-left: 10px;
  align-content: center;
}
</style>