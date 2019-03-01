<template>
  <div class="hello">
   
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
    <div class="container">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
           <a class="nav-link" href="#" @click="home" >Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="allProduct" >All Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="addProduct" v-if="token4">Add Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="shoppingCart" v-if="token4">Shopping Cart</a>
          </li>
          <li class="nav-item ">
            <input class="btn   btn-info btn-block widthLogin" @click="login" type="button" value="Login" v-if="!token4">
          </li>
          <li class="nav-item ">
            <input class="btn   btn-info btn-block widthLogin " @click="logout" type="button" value="logout" v-if="token4">    
          </li>
        </ul>
      </div>
      </div>
   </nav>
  </div>
</template>
<script>
export default {
 name: 'navbar', 
  data () {
    return {
      msg: "Home"
    }
  },
   methods: {
  register: function(){
    this.$router.replace(this.$route.query.redirect || '/register')
  },
  login: function(){
    this.$router.replace(this.$route.query.redirect || '/login')
  },
  logout: function() {
     
    this.$store.commit('delToken')
    this.$router.replace(this.$route.query.redirect || '/login')
  },
  allProduct: function(){
    this.$router.replace(this.$route.query.redirect || '/allProduct')
  },
  home: function(){
    this.$router.replace(this.$route.query.redirect || '/home')
  },
  addProduct: function(){
    this.$router.replace(this.$route.query.redirect || '/addProduct')
  },
  shoppingCart: function(){
    this.$router.replace(this.$route.query.redirect || '/shoppingcart')
  },
  },
  computed: {
  token4: function(){
    return this.$store.getters.getToken
  }
},
}
</script>
<style  >
.navStyle{
  background-image: linear-gradient(#bfbfbf, #999 50%, #8f8f8f);
  padding: 5px;
  margin-left: -15px;
  margin-right: -15px;
}
.btn-no-style{
  border-color:none;
  border:none;
  background-color:rgba(0,0,0,0)!important;
  background-image: none;
}
.btn-no-style:hover{
  border-color:none!important;
  border:none!important;
}
.btn-no-style:focus{
  box-shadow: none;
}
.hello nav {
  border: none!important;
  margin-bottom: 0px;
  margin: 0 -15px 2px -15px;
}
.hello nav li{
  
  margin-left:7px;
 
}
.hello nav ul{
  margin-left: auto;
  margin-right: 0!important;
}

@media only screen and (max-width : 991px) {
 .widthLogin{
  width: 20%!important;
 }

}

</style>
