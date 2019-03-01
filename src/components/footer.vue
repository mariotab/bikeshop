<template>
  <div >
   <footer><p> &copy; 2018 Copyright: mario_tab</p></footer>
  </div>
</template>
<script>
export default {
 name: 'vfooter', 
}
</script>
<style  >
footer{
  background-color: dimgrey;
  
}
footer p {
    text-align: center;
    font-family: serif;
    color:#000;
    margin-bottom:0;
}
body {
  box-sizing: border-box;
  min-height: 100%;
  width:100%; 
  position:absolute;
  overflow-y: auto;
  overflow-x: hidden;
}
footer  {
    bottom: 0;
    position: absolute;
    width:100%;
    margin-bottom: -32px;
}

</style>
