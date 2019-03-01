<template>
  <div class=" container ">
      <img :src="'http://194.44.152.158:8121/data/products/'+dataProduct.id+'/'+dataProduct.path" alt="this is img" class="productSrc m-3"  v-if="dataProduct.id != undefined">
      <p class="productP">
        id: {{dataProduct.id}} <br>
        barcode: {{dataProduct.barcode}} <br>
        title: {{dataProduct.title}} <br>
        price: {{dataProduct.price}} <br>
        discount: {{dataProduct.discount}} <br>
        vat: {{dataProduct.vat}} <br>
      </p>
  </div>
</template>


<script>
export default {
 name: 'product', 
  data () {
    return {
      id: this.$router.currentRoute.params['id'],
      dataProduct:{}
    } 
  },
  created() {   
      this.$http.get('//194.44.152.158:8121/index.php/api/v1/product/' + this.id )
        .then(request => {this.dataProduct = request.data
            })
  },
}
</script>

<style lang="css" >
  .productSrc{
    width: 430px;
    float: left;
  }
  .productP{
    padding-top: 80px;
    padding-left: 530px;
    line-height:2;
  }

</style>
