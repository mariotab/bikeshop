<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="addProduct" ref="form">
      <h2 class="form-signin-heading">Введіть дані </h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      
      <input v-model="barcode" type="text" id="barcode" class="form-control" placeholder="barcode" required autofocus>
      
      <input v-model="title" type="text" id="title" class="form-control" placeholder="title" required>

      <input v-model="price" type="text" id="price" class="form-control" placeholder="price" required>

      <input v-model="discount" type="text" id="discount" class="form-control" placeholder="discount" required>

      <input v-model="vat" type="text" id="vat" class="form-control" placeholder="vat" required>

      <input @change="processFile($event)" type="file" id="addFile" class="form-control">
      

      <button class="btn btn-lg btn-primary btn-block" type="submit">add product</button>
      <input class="btn  btn-lg btn-primary btn-block " @click="previous" type="button" value="<-- previous">
      
      {{info}}
      
      
    </form>
    
    

    
  </div>
</template>

<script>
export default { 


  name: 'addProduct', 
  data () {
    return {
      barcode: '',
      title: '',
      price: '',
      discount: '',
      vat: '',
      imegeFile: '',
      error: false,
      info: null
      
    }
  },
  
  methods: {
    addProduct () {

        let newData = new FormData()
        newData.append('imageFile', this.imegeFile)
        newData.append('barcode', this.barcode)
        newData.append('title', this.title)
        newData.append('price', this.price)
        newData.append('discount', this.discount)
        newData.append('vat', this.vat),



      this.$http.post('//194.44.152.158:8121/index.php/api/v1/product', newData,
        {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                }
        }        
        )
        .then(request => {this.info = request.data
                          /*this.successRegister()*/})
        
    },

    /*formProduct(){
      const newData = new FormData(this.$refs.form)
        newData.append('imegeFile', this.imegeFile)
        newData.append('barcode', this.barcode)
        newData.append('title', this.title)
        newData.append('price', this.price)
        newData.append('discount', this.discount)
        newData.append('vat', this.vat)
    },*/



    /*successRegister () {
      this.$router.replace(this.$route.query.redirect || '/SuccessRegister')

    },*/
    previous: function(){
    this.$router.replace(this.$route.query.redirect || '/home')
  },
  processFile(event) {
    this.imegeFile = event.target.files[0]
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
  max-width: 630px;
  padding: 30px 15px;
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