<template>
   <div class="body">
       <div>
          <nuxt-link class='nuxt-link' to="/login">Вход</nuxt-link>
          <nuxt-link class='nuxt-link' to="/register">Регистрация</nuxt-link>
       </div>
       <form>
        <div class="loginpage">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Логин">
            </div>

            <div class="form-group">
                <input type="password" class="form-control" placeholder="Пароль">
            </div>

            <div>
                <nuxt-link  to="/page1"><button type="submit">Вход</button></nuxt-link>
                <nuxt-link class='loginerror' to="/">Забыли пароль?</nuxt-link>
            </div>
        </div>
       </form>
   </div>
</template>


<style scoped>
.loginpage{
    position: fixed;
    left: 30%;
    top: 25%;
    width: 600px;
    height: 450px;
    background: rgba(0, 123, 127, 0.8);
    box-shadow: -1px 3px 69px rgba(0, 0, 0, 0.25);
}
.nuxt-link{
    position: fixed;
    left: 44%;
    top: 15%;
    font-weight: 700;
    font-size: 46px;
    line-height: 58px;
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
}
.nuxt-link:first-child{
    color: #FBAA49;
    text-shadow: 2px 0px 9px #FBAA49;
    left: 32%;
}
.nuxt-link:last-child{
    transition: .2s;
}
.nuxt-link:last-child:hover{
    border-bottom: 4px solid rgba(255, 255, 255, 0.5);
}
input {
  border: none;
  border-bottom: 2px solid #fff;
  background-color: transparent;
  width: 466.03px;
  box-shadow: none;
}
.form-group{
    margin: 70px 60px;
}

button {
    background-color: #FBAA49;
    border-radius:50px;
    width: 223px;
    height: 53px;
    color: #fff;
    border: none;
    margin: 0 55px;
    margin-right: 80px;
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

}
</style>