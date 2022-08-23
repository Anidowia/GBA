<template>
      <div class="pagesearch">
        <img src="@/static/logo2.png">
        <div class="pagesearch-login">
            <img src="@/static/login.png">
            <nuxt-link class="pagesearch-login-link" to="/profile">Логин</nuxt-link>
        </div>
      </div>
</template>

<style scoped> 
   .pagesearch>img {
    width: 178px;
    height: 76px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;  
   }
   .pagesearch-login{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 152px;
    margin-top: 20px;
   }
   .pagesearch-login img{
    width: 47px;
    height: 46px;
   }
   .pagesearch-login-link{
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
    margin: 0;
    text-decoration: none;
   }
   .pagesearch{
    display: flex;
    justify-content: right;
    align-items: center;
    padding-left: 250px;
   }

</style>