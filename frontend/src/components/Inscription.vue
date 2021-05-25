<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Mot de passe :" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Mot de passe"
          :options="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Votre Nom et Prénom :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Nom et Prénom"
          required
        ></b-form-input>
      </b-form-group>
      <b-button class="m-2" type="submit" variant="primary">S'enregister</b-button>
    </b-form>
  </div>
</template>

<script>
// import axios from "axios";
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password:'',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>
<style scoped>
input{
  width: 300px;
  margin: 5px;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>