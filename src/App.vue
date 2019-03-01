<template>
  <div id="app">
    <div class="container-fluid">
      <navbar></navbar>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <vfooter></vfooter>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>


