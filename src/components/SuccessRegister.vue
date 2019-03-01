<template>
    <div class="login-wrapper border border-light">
      <form class="form-signin" >
      <h2 class="form-signin-heading">{{msg}}</h2>
      <label for="inputPassword" class="sr-only">Password</label>
      <input class="btn  btn-lg btn-primary btn-block " @click="goHome" type="button" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SuccessRegister',
  data () {
    return {
      msg: "Success register"
    }
  },
  methods: {
  goHome: function(){
    this.$router.replace(this.$route.query.redirect || '/login')
  }
  },
}
</script>

<style >

</style>
