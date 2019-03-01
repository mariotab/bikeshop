<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Введіть дані для реєстрації</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="username" class="sr-only">username</label>
      <input v-model="username" type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">register</button>
      {{info}}
      
      
    </form>
    

    
  </div>
</template>

<script>
export default { 


  name: 'Register', 
  data () {
    return {
      username: '',
      password: '',
      error: false,
      info: null
      
    }
  },
  
  methods: {
    register () {
      this.$http.post('//194.44.152.158:8121/index.php/register', { _username: this.username, _password: this.password })
        .then(request => {this.info = request.data
                          this.successRegister()})
        
    },
    successRegister () {
      this.$router.replace(this.$route.query.redirect || '/SuccessRegister')

    }
  },
}
</script>

<style lang="css">
body {
  background: #605B56;
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>