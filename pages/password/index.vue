 <template>
   <div class="body">
      <Navbar/>
      <div class="pagecontent">
        <nuxt-link to="/page2"><img src="@/static/long_left.png"></nuxt-link>
       <form>
        <div class="loginpage">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Старый пароль">
            </div>
             <div class="form-group">
                <input type="text" class="form-control" placeholder="Новый пароль">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Повторите пароль">
            </div>
        </div>
        <div class="pagecontent-text">
            <p>Для защиты ваших данных необходимо придумать безопасный пароль. Он должен содержать: </p>
            <ul>
                <li><span>8 и более символов</span></li>
                <li><span>цифры</span></li>
                <li><span>прописные латинские буквы</span></li>
                <li><span>строчные латинские буквы</span></li>
            </ul>
        </div>
       </form>
         <div>
            <nuxt-link  to="/profile"><button type="submit">Сохранить</button></nuxt-link>
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
      top: 550px;
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
        left: 25%;
        top: 40%;
        width: 500px;
        height: 350px;
    }
    input {
        border: none;
        border-bottom: 2px solid #fff;
        background-color: transparent;
        width: 300px;
        box-shadow: none;
    }
    .form-group{
        margin: 20px 60px;
    }
    button{
        font-size: 24px;
        line-height: 28px;
    }
    ::-webkit-input-placeholder { 
        color: rgba(255, 255, 255, 0.5);
        font-size: 20px;
    }
    .loginerror{
        color:#FBAA49;
        margin-left: 60px;
        font-size: 20px;
    }
    .pagecontent-text{
        width: 300px;
        color: #fff;
        margin: 160px 0 0 650px;
        line-height: 20px;
    }
    li{
        color: #FBAA49;
    }
    li span{
        color: #fff;
    }
</style>