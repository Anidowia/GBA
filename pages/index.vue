<template>
  <div class="body">
    <nuxt-link to="/login"><img  src="@/static/logo1.png" class = "logo"/></nuxt-link>
  </div> 
</template>

<script>
export default {
}
</script>

<style scoped>
img{
  position: fixed;
  top:10%;
  left: 33%;
  width: 450px;
  height: 611px;
}
</style>

<style>
@font-face {
    font-family: 'Gilroy-Bold ☞';
    font-style: normal;
    font-weight: normal;
    src: local('Gilroy-Bold ☞'), url('static/font/Gilroy-Bold.woff') format('woff');
}
.body{
     font-family: 'Gilroy-Bold ☞';
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(360deg);
  }
}
.logo {
  animation-name:            rotate; 
    animation-duration:        1s; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>
