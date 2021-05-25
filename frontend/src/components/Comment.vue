<template>
  <div>
    <b-form-textarea
      id="comment"
      v-model="text"
      placeholder="Répondre..."
      rows="3"
      max-rows="2"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>
<style scoped>
#comment {
    width: 50%;
    resize: none;
}
</style>