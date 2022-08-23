<template>
   <div class="body">
      <Navbar/>
      <div class="pagecontent">
        <nuxt-link to="/page1"><img src="@/static/long_left.png"></nuxt-link>
        <h1>Настройки</h1>
         <form class="pagecontent-search">
            <input class="searchbar" checked type="text" placeholder="Напишите...">
         </form>
        <form class="pagecontent-calendar">
            <input type="date" name="calendar">
        </form>
        <form class="pagecontent-checkbox">
            <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
            <label for="happy"></label>
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
   .pagecontent-search {
      width: 800px;
      height: 100%;
      margin: 60px 200px 0px 200px;
      position: relative;
      }
   ::-webkit-input-placeholder{
      color: #fff;
   }
   .searchbar {
      font-size: 24px;
      width: 814px;
      height: 50px;
      border: 2px solid #FFFFFF;
      border-radius: 30px;
      background-color: transparent;
      padding: 2rem;
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
   button,::-webkit-input-placeholder{
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
   }
   ::-webkit-input-placeholder { 
      color: rgba(255, 255, 255, 0.5);
   }
   .pagecontent-calendar{
      position: fixed;
      top: 400px;
      left: 350px;
   }
   .pagecontent-calendar input {
        padding: 20px 30px;
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 30px;
        color: #fff;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
   }
   ::-webkit-calendar-picker-indicator {
        filter: invert(1);
        padding-left: 70px;
   }
   .pagecontent-checkbox{
      position: fixed;
      top: 520px;
      left: 370px;
   }
   .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid #fff;
        border-radius: 10px;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked+label::before {
        border-color: #FBAA49;
        background-color: #FBAA49;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    h1{
        font-size: 48px;
        line-height: 56px;
        color: #FBAA49;
        margin: 20px 470px;
    }
    img{
        position: fixed;
        top: 170px;
        left: 200px;
        width: 71px;
        height: 66px;
    }
</style>