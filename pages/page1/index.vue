<template>
   <div class="body">
      <Navbar/>
      <div class="pagecontent">
         <form class="pagecontent-search">
            <input class="searchbar" checked type="text" placeholder="Поиск...">
            <img class="button" src="@/static/search.png">
         </form>
         <div class="pagecontent-checkbox">
            <div class="pagecontent-radio">
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">Kaspi.kz</label>
               </div>
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">Wolt</label>
               </div>
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">Glovo</label>
               </div>
            </div>
            <div class="pagecontent-radio">
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">Halyk</label>
               </div>
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">...</label>
               </div>
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">...</label>
               </div>
            </div>
            <div >
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">...</label>
               </div>
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">...</label>
               </div>
               <div class="pagecontent-checkbox-content">
                  <input type="radio" id="kaspi" name="kaspi">
                  <label for="kaspi">...</label>
               </div>
            </div>
         </div>
         <div class="form-group">
            <input type="text" class="form-control" placeholder="Напишите API">
         </div>
         <div>
            <nuxt-link  to="/page2"><button type="submit">Отправить</button></nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../../components/navbar.vue';
export default {
  components: {
    Navbar
  }
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
      margin: 20px 200px 0px 200px;
      position: relative;
      }
   ::-webkit-input-placeholder{
      color: #fff;
   }
   .searchbar {
      font-size: 24px;
      width: 814px;
      height: 50px;
      opacity: 0.14;
      border: 2px solid #FFFFFF;
      border-radius: 30px;
      background-color: transparent;
      padding: 2rem;
   }
   .button {
      height: 2rem;
      position: absolute;
      top: 1.2rem;
      right: 1rem;
      cursor: pointer;
   }
   .pagecontent-checkbox{
      position: fixed;
      top: 270px;
      left: 350px;
      display: flex;
   }
   .pagecontent-checkbox-content{
      margin: 0 20px 20px 0;
      display: flex;
      align-items: center;
   }
   input[type='radio']:after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #007B7F;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

   input[type='radio']:checked:after {
        background-color: #FBAA49;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }
   .pagecontent-checkbox-content label{
      margin-left: 20px;
      font-weight: 700; 
      font-size: 26px;
      line-height: 30px;
      color: #FFFFFF;
    }
   .pagecontent-radio{
      margin-right: 190px;
    }
   .form-group input {
      top: 500px;
      left: 450px;
      position: fixed;
      border: none;
      border-bottom: 2px solid #fff;
      background-color: transparent;
      width: 600px;
      box-shadow: none;
      font-size: 24px;
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
   
</style>