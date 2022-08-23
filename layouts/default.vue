<template>
  <div>
    <Background/>
    <main>
      <div class="container">
            <nuxt/>
      </div>
    </main>
  </div>
</template>


<script>
import Background from '../components/background.vue';
export default {
  components: {
    Background
}
}
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #339599;
}

</style>