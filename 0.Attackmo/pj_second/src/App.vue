<script setup>
import { RouterView } from 'vue-router'
import topHeader from './components/interface/topHeader.vue'
import botFooter from './components/interface/botFooter.vue';
</script>

<template>

  <!-- 상단광고 위치 -->
  <section>

  </section>

  <!-- 헤더 -->
  <header>
    <topHeader/>
  </header>

  <!-- 컨텐츠 -->
  <RouterView />

  <!-- 하단광고 위치 -->
  <section>

  </section>

  <!-- footer -->
  <footer>
    <botFooter/>
  </footer>
</template>

<style scoped>

</style>
