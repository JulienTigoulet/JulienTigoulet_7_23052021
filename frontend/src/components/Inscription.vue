<template>
  <div>
    <b-form @submit.prevent="onSubmit">

      <b-form-group  label="Email :" >       
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          autocomplete="username"
        ></b-form-input>
        <span class="text-danger" v-if="!$v.email.required && $v.email.$dirty">
          Un Email est requis
        </span>
        <span class="text-danger" v-if="!$v.email.email && $v.email.$dirty">
          Un Email valide est requis
        </span>
      </b-form-group>

      <b-form-group label="Mot de passe :">
        <b-form-input
          id="password"
          class="form-control"
          type="password"
          v-model="password"
          placeholder="Mot de passe"
          autocomplete="current-password"
        ></b-form-input>
        <span class="text-danger" v-if="!$v.password.required | !$v.password.minLength && $v.password.$dirty">
          Le Mot de passe doit<br> faire au minimum 6 caractères
        </span>

      </b-form-group>

      <b-form-group label="Votre Nom et Prénom :">
        <b-form-input
          id="name"
          class="form-control"
          v-model="name"
          placeholder="Nom et Prénom"
        ></b-form-input>
        <span class="text-danger" v-if="!$v.name.required && $v.name.$dirty">
          Les Nom et prénoms sont requis
        </span>
        
      </b-form-group>

      <b-button class="m-2" type="submit" variant="primary">S'enregister</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data:() =>({
    email:'',
    name:'',
    password:''
  }),
validations : {
  email : {
    required,
    email
  },
  password : {
    required,
    minLength: minLength(6)
  },
  name : {
    required
  }
},
methods: {
  onSubmit(){
    this.$v.$touch();
    if(!this.$v.$invalid){
      axios.post('http://localhost:8080/api/auth/signup',{
        email : this.email,
        password : this.password,
        name : this.name
      })
      .then(() => {
        console.log('compte validé');
        localStorage.removeItem('token')
        localStorage.removeItem('userUuid')
        localStorage.removeItem('name')
        this.$router.push('/')
      })
      .catch(err =>{
      console.log(err);
      })
    }
  }
}
};
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