<template>
  <div class="container">
    <div>
    <h1 class="title">All Products</h1>
      
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>title</th>
            <th>Price</th>
            <th>how much</th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in shoppingcart" track-by="id" v-if="product[4] != 0">
            <td>id:{{product[0]}}
              <img :src="'http://194.44.152.158:8121/data/products/'+product[0]+'/'+product[3]"  v-if=" product[3]!=null " alt="" class="imgSh" @mouseover="start(index)" @mouseleave="hoverEnd()">
              <transition
               enter-active-class = "animated bounceInLeft"
               leave-active-class = "animated bounceOutRight"
              > 
                <img :src="'http://194.44.152.158:8121/data/products/'+product[0]+'/'+product[3]"  v-if=" product[3]!=null && hoverEfect && index == hoverId" alt="" class="imgSh1">
              </transition>  
            </td>
            <td>{{product[1]}}</td>
            <td>{{product[2]}}</td>
            <td class="totalCount">
              <input class="btn   btn-info "  @click='less(index)'  type="button" value="-" > {{product[4]}} 
              <input class="btn   btn-info "  @click='more(index)'  type="button" value="+" ></td>
            <td><input class="btn   btn-info btn-block "  @click='add(index)'  type="button" value="delete" ></td>
          </tr>
           <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th class="totalCount">Total count = {{total()}}</th>
            <th>
            </th>
          </tr>
            </th>
        </tbody>
    </table>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shoppingcart: [],
      hoverEfect: false,
      hoverId: false,
    }
  },
  mounted () {
   this.shoppingcart = JSON.parse(localStorage.getItem("myBac")) || []  
  },
  methods: {
    add: function(ind){
     this.shoppingcart.splice(ind, 1)
     let serialObj = JSON.stringify(this.shoppingcart);
     localStorage.setItem("myBac", serialObj)
   },
   less: function(ind){
     this.shoppingcart[ind][4] -= 1
     let serialObj = JSON.stringify(this.shoppingcart);
     localStorage.setItem("myBac", serialObj)
     this.shoppingcart = JSON.parse(localStorage.getItem("myBac"))
   },
   more:function(ind){
     this.shoppingcart[ind][4] += 1
     let serialObj = JSON.stringify(this.shoppingcart);
     localStorage.setItem("myBac", serialObj)
     this.shoppingcart = JSON.parse(localStorage.getItem("myBac")) 
   },
   total: function(){
     let total = 0
    
     for (let i=0;i < this.shoppingcart.length; i++) {
      total += this.shoppingcart[i][2]*this.shoppingcart[i][4]
      }
    return total.toFixed(2)
    },
    start:function(id){
     this.hoverEfect = true;
     this.hoverId=id;
   },
    hoverEnd:function(){
     this.hoverEfect = false  
   },
  
  },
  
}
</script>
<style >
.totalCount{
  max-width: 40px;
}
.imgSh{
  width:100px;
}
.imgSh1{
  width: 600px;
  position: fixed;
  top: 15%;
  border: 5px solid;
  border-radius: 11px;

}
</style>