<template>
  <div >
     
      
   <div class=" row mt-2"> 
    <div class="  col-md-4 noPading" v-for="product in info" >
      
        <div class="col-12 product m-1 card">
          <router-link
            :to = "'/product/'+product.id" 
            class = "aNoStyle"
            
            >
              <img class="card-img-top" :src="'http://194.44.152.158:8121/data/products/'+product.id+'/'+product.path" alt="Card image cap" v-if=" product.path!=null ">           
          </router-link>    
        <div class="card-body">
          <router-link
            :to = "'/product/'+product.id"
            class = "aNoStyle"
            >
          <p class="card-text">product id: {{ product.id }}; <br> Barcode : {{ product.barcode }}; <br> title {{product.title}}; <br> price {{product.price}}; <br> discount {{product.discount}} <br>
        vat {{product.vat}}</p>
        <br>
        </router-link>
        <input class="btn btn-info  " @click="addShoppingcart(product.id, product.title , product.price, product.path)" type="button" value="Add from shoppingcart" v-if="token4" >
        <input class="btn btn-info  w-btn" @click="deleteProduct(product.id)" type="button" value="Delete" v-if="token4" >
       
        </div>
       </div>
      
    </div>  
   </div> 
     

      <nav  aria-label="Page navigation example" class=" d-flex  justify-content-center mt-3"> 
        <ul class="pagination">
          <li class="page-item" v-if="this.numbersList != this.numberPagination" >
            <a class="page-link castom-link" href="#" @click="lazy(numberPagination+1)" >more</a>
          </li>
        </ul>  
       </nav> 
     
      <nav aria-label="Page navigation example" class=" d-flex  justify-content-center">
        <ul class="pagination">
          <li class="page-item" v-if=" 1 != this.numberPagination"><a class="page-link" href="#" @click="pagination(numberPagination-1)">Previous</a></li>
          <li class="page-item" v-for = "number of numbersList">
            <a class="page-link" href="#" @click="pagination(number)" >{{number}}
            </a>
          </li>
          <li class="page-item" v-if="this.numbersList != this.numberPagination" ><a class="page-link" href="#" @click="pagination(numberPagination+1)" >Next</a></li>
          
        </ul>
      </nav>  
      
  

    <form class="form-signin" @submit.prevent="deleteProduct">
     <!-- <input v-model="id" type="text" id="discount" class="form-control" placeholder="id" required>
      <input class="btn  btn-lg btn-primary btn-block " @click="deleteProduct" type="button" value="deleteProduct">-->
      <input class="btn  btn-lg btn-primary btn-block " @click="previous" type="button" value="<-- previous">
    </form>
   

    
  </div>
</template>

<script>
export default { 


  name: 'allProduct', 
  data () {
    return {
      id:null,
      info: null,
      numbersList: null,
      numberPagination: 1,
      shoppingcart: JSON.parse(localStorage.getItem("myBac")) || [],
    }
  },

  mounted() {   
      this.$http.get('//194.44.152.158:8121/index.php/api/v1/products/1/9/created_at/asc')
        .then(request => {this.info = request.data.items
                          this.numbersList = Math.ceil((request.data.total_count)/9)
            })
  },

  methods: {
  previous: function(){
    this.$router.replace(this.$route.query.redirect || '/home')
  },
  deleteProduct: function(id){
    this.$http.delete('//194.44.152.158:8121/index.php/api/v1/product/' +id)
    this.$http.get('//194.44.152.158:8121/index.php/api/v1/products/1/9/created_at/asc')
        .then(request => {this.info = request.data.items
                          this.numbersList = Math.ceil((request.data.total_count)/9)
            })
  
  },
  pagination: function(number){
    this.numberPagination = number
    this.$http.get('//194.44.152.158:8121/index.php/api/v1/products/'+number+'/9/created_at/asc')
        .then(request => {this.info = request.data.items});
  },
  lazy: function(number) {
    this.$http.get('//194.44.152.158:8121/index.php/api/v1/products/'+number+'/9/created_at/asc')
        .then(request => {this.info = this.info.concat(request.data.items)});
        this.numberPagination +=1
  },
    addShoppingcart: function(id , title , price,path) {
      this.shoppingcart = JSON.parse(localStorage.getItem("myBac")) || []
      if(this.shoppingcart.length != 0 ){
          if(this.shoppingcart.some(r => r.some(i => i == id))){           
            for(let i = 0; i < this.shoppingcart.length; i++){
              if (this.shoppingcart[i].some(i => i == id) ) {
            this.shoppingcart[i][4] += 1
                }
              }
            }
            else {
            this.shoppingcart.push([id,title,price,path,1])
            }
          } 
          else {
            this.shoppingcart.push([id,title,price,path,1])
         }
      let serialObj = JSON.stringify(this.shoppingcart);
      localStorage.setItem("myBac", serialObj)
  },
  },
  computed: {
  token4: function(){
    return this.$store.getters.getToken
  }
}

}
</script>

<style lang="css">
body {
  background: #605B56;
}


.product img {
    float: left;
    width: 140px;
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 730px;
  padding: 10px 15px;
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
nav {
  
}
.castom-link{
  padding: 15%!important;
    font-size: x-large;
    height: 60px;
    text-align: center;
    vertical-align: bottom;
    width: 94px;
}
.product img {
    width: 290px;
}
.w-btn{
  width:27%;
  margin-top:2px;
}
.card {
  padding-right: 1px!important; 
  padding-left: 1px!important;
  height:100%;
  margin-bottom:3px;
}
.noPading{
  padding-right: 2px!important; 
  padding-left: 2px!important; 
  margin-bottom:5px;

}
@media only screen and (max-width : 991px) and (min-width : 768px) {

.card-img-top{
  width:200px!important;
}
.w-btn{
  width:40%;
 
}
}
@media only screen  and (min-width : 1200px) {

.card-img-top{
  width:333px!important;
  margin-left:20px;
}
.w-btn{
  margin-left:2px;
  margin-top:0;

 
}
.aNoStyle{
  color:#000!important;
}

}

</style>