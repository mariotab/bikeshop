<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="username" class="sr-only">username</label>
      <input v-model="username" type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <input class="btn  btn-lg btn-primary btn-block " @click="register" type="button" value="Registration">
      
    </form>
    

    
  </div>
</template>

<script>
export default { 


  name: 'Login', 
  data () {
    return {
      username: '',
      password: '',
      error: false,
      
    }
  },
  updated () {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || '/home')
    }
  },
  methods: {
    login () {
      this.$http.post('//194.44.152.158:8121/index.php/login_check', { username: this.username, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.commit("sucToken")
      /*this.$store.getters.token = req.data.token
      console.log(localStorage.token)*/
      this.$router.replace(this.$route.query.redirect || '/home')
    },
    loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
    },
  register: function(){
    this.$router.replace(this.$route.query.redirect || '/register')
  },
  },
 /* computed: {
    //
    token: function(){
        return this.$store.getters.token
      }
//
}*/
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