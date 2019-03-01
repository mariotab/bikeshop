<template>
  <div class=" container hello helloWidth">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
       <ol class="carousel-indicators">
         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
       </ol>
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img class="d-block  imgHeight" src="http://194.44.152.158:8121/data/products/115/5c0fa04f999c7235009324.jpeg" alt="First slide">
         </div>
         <div class="carousel-item">
           <img class="d-block  imgHeight" src="http://194.44.152.158:8121/data/products/116/5c0fa0bb59aa7828301912.jpg" alt="    Second slide">
        </div>
         <div class="carousel-item">
           <img class="d-block imgHeight " src="http://194.44.152.158:8121/data/products/121/5c0fa36803476906210540.jpg" alt="     Third slide">
         </div>
       </div>
       <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
       </a>
      </div> 
        <div class="container">
          <div class="row">
            <div class="col-md-4 wraperImgBlock4 " >
              <div class="col-12  wraperImgBlock">
                <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/116/5c0fa0bb59aa7828301912.jpg" alt="    Second slide"><p>Propel Advances SL Disc</p>
              </div>  
            </div>
            <div class="col-md-4 wraperImgBlock4">
              <div class="col-12  wraperImgBlock">
              <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/121/5c0fa36803476906210540.jpg" alt="     Third slide"><p>Propel Advances SL Disc</p>
            </div>
            </div>
            <div class="col-md-4 wraperImgBlock4">
              <div class="col-12  wraperImgBlock">
              <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/115/5c0fa04f999c7235009324.jpeg" alt="First slide"><p>Propel Advances SL Disc</p>
            </div>
            </div>
        </div>
       <div class="row">
            <div class="col-md-4 wraperImgBlock4 " >
              <div class="col-12  wraperImgBlock">
                <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/116/5c0fa0bb59aa7828301912.jpg" alt="    Second slide"><p>Propel Advances SL Disc</p>
              </div>  
            </div>
            <div class="col-md-4 wraperImgBlock4">
              <div class="col-12  wraperImgBlock">
              <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/121/5c0fa36803476906210540.jpg" alt="     Third slide"><p>Propel Advances SL Disc</p>
            </div>
            </div>
            <div class="col-md-4 wraperImgBlock4">
              <div class="col-12  wraperImgBlock">
              <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/116/5c0fa0bb59aa7828301912.jpg" alt="First slide"><p>Propel Advances SL Disc</p>
            </div>
            </div>
        </div><div class="row">
            <div class="col-md-4 wraperImgBlock4 " >
              <div class="col-12  wraperImgBlock">
                <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/115/5c0fa04f999c7235009324.jpeg" alt="    Second slide"><p>Propel Advances SL Disc</p>
              </div>  
            </div>
            <div class="col-md-4 wraperImgBlock4">
              <div class="col-12  wraperImgBlock">
              <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/116/5c0fa0bb59aa7828301912.jpg" alt="     Third slide"><p>Propel Advances SL Disc</p>
            </div>
            </div>
            <div class="col-md-4 wraperImgBlock4">
              <div class="col-12  wraperImgBlock">
              <img class="d-block m-3 imgBlock" src="http://194.44.152.158:8121/data/products/121/5c0fa36803476906210540.jpg" alt="First slide"><p>Propel Advances SL Disc</p>
            </div>
            </div>
        </div>
        </div>  
    </div>
  
</template>


<script>
export default {
 name: 'Home', 
  data () {
    return {
      some: ""
    }
  },
  methods: {
  },

  computed: {
  
},
}
</script>

<style lang="css" >

#carouselExampleIndicators{
   width: fit-content;
}
.imgHeight{
   height: 500px;
}
.helloWidth{
  /*width: fit-content!important;*/
}
#carouselExampleIndicators{
  left:15%;
}
.imgBlock{
  
  width:300px;
}
 .wraperImgBlock{
  border: solid 1px;
  border-radius: 15px;
  width:300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.carousel-control-prev-icon {
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")!important;
}
.carousel-control-next-icon{
  background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")!important;
}
.carousel-indicators li {
    background-color: rgba(0,0,0,.5)!important;
}
.carousel-indicators .active {
    background-color: rgb(0,0,0)!important;
}
.wraperImgBlock4{
    padding-right: 2px!important;
    padding-left: 2px!important;
    padding-bottom: 2px!important;
}
@media only screen and (max-width : 1199px) {
 .imgBlock{
  
  width:280px;
}
.imgHeight{
   height:400px;
}

}
@media only screen and (max-width : 991px) {
 .imgBlock{
  width:200px;
}
.imgHeight{
   height: 340px;
}


}
@media only screen and (max-width : 767px) {

.imgHeight{
   height: 250px;
}
.imgBlock{
  width:300px;
}
}
@media only screen and (max-width : 540px) {

#carouselExampleIndicators{
  display:none;
}
.imgBlock{
  width:200px;
}
}

</style>
