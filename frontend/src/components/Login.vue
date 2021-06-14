<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Email :">
        <b-form-input
          aria-label="email"
          autocomplete="email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
        <span class="text-danger" v-if="!$v.email.required && $v.email.$dirty">
          Votre Email est requis
        </span>
        <span class="text-danger" v-if="!$v.email.email && $v.email.$dirty">
          Votre Email valide est requis
        </span>
      </b-form-group>
      <b-form-group label="Mot de passe :">
        <b-form-input
          aria-label="mot de passe"
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          autocomplete="current-password"
          required
        ></b-form-input>
        <span class="text-danger" v-if="!$v.password.required && $v.password.$dirty">
        Le Mot de passe n'est pas bon 
        </span>
      </b-form-group>
      <b-button class="m-2" type="submit" variant="primary">Connexion</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
import { required, email } from 'vuelidate/lib/validators';
export default {
  data:() =>({
    email:'',
    password:'',
  }),
  validations : {
    email : {
      required,
      email
    },
    password : {
      required
    }
  },
  methods: {
     onSubmit(){
      this.$v.$touch();
      if(!this.$v.$invalid){
        axios.post('http://localhost:8080/api/auth/login',{
          email : this.email,
          password : this.password
        })
        .then(res => {
          const token = res.data.token
          const userUuid = res.data.uuid
          const name = res.data.name
          localStorage.setItem('token', token)
          localStorage.setItem('userUuid', userUuid)
          localStorage.setItem('name', name)
          this.$router.push('/wall')
        })
        .catch(err =>{
        localStorage.removeItem('token')
        localStorage.removeItem('userUuid')
        localStorage.removeItem('name')
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