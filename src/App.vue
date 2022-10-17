<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="scroll-smooth ">
    <NavBar />
    <RouterView />
  </div>
</template>
