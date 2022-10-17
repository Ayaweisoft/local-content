<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="scroll-smooth ">
<<<<<<< HEAD
    <header class="fixed z-10 flex items-center justify-between w-full px-10 md:px-24 py-2 bg-white shadow-md">
      <div>Logo</div>
      <div class="flex justify-center text-xs items-center gap-4">
        <a href="#verifyMembership">Verify Membership</a>
        <RouterLink to="/">Home</RouterLink>
        <div class="px-2 py-2 text-xs bg-green-600">
          <RouterLink to="/register/individual" class="text-white">Become a Member</RouterLink>
        </div>
      </div>
    </header>

=======
    <NavBar />
>>>>>>> 929fe97be3c518667af240f9b5fd4f0e7b3120ae
    <RouterView />
  </div>
</template>
