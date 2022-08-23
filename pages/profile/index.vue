<template>
   <div class="body">
      <Navbar/>
      <div class="pagecontent">
        <nuxt-link to="/page2"><img src="@/static/long_left.png"></nuxt-link>
       <form>
        <div class="loginpage">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Наименование">
            </div>
             <div class="form-group">
                <input type="text" class="form-control" placeholder="ИИН/БИН">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="E-mail">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Логин">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder=".">
            </div>
            <div >
                <nuxt-link class='loginerror' to="/password">Изменить пароль</nuxt-link>
                <nuxt-link class='loginerror loginerror1' to="/">Выход</nuxt-link>
            </div>
        </div>
       </form>
         <div>
            <nuxt-link  to="/page1"><button type="submit">Сохранить</button></nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../../components/navbar.vue';
export default {
  components: {
    Navbar
  },
}
</script>

<style scoped>
   .pagecontent{
    position: fixed;
    top: 156px;
    left: 150px;
    width: 1236px;
    height: 548px;
    background: #007B7F;
    box-shadow: -1px 4px 69px rgba(0, 0, 0, 0.25);
   }
   button {
      position: fixed;
      top: 600px;
      left: 450px;
      background-color: #FBAA49;
      border-radius:50px;
      width: 223px;
      height: 53px;
      color: #fff;
      border: none;
      margin: 0 170px ;
   }
    img{
        position: fixed;
        top: 170px;
        left: 200px;
        width: 71px;
        height: 66px;
    }
    .loginpage{
        position: fixed;
        left: 30%;
        top: 25%;
        width: 600px;
        height: 450px;
    }
    input {
        border: none;
        border-bottom: 2px solid #fff;
        background-color: transparent;
        width: 466.03px;
        box-shadow: none;
    }
    .form-group{
        margin: 30px 60px;
    }
    button,::-webkit-input-placeholder,.loginerror{
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
    }
    ::-webkit-input-placeholder { 
        color: rgba(255, 255, 255, 0.5);
    }
    .loginerror{
        color:#FBAA49;
        margin-left: 60px;
    }
    .loginerror1{
        margin-left: 200px;
    }
</style>