<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="scroll-smooth ">
    <header class="fixed z-10 flex items-center justify-between w-full px-24 py-2 bg-white shadow-md">
      <div>Logo</div>
      <div class="flex gap-4">
        <a href="#verifyMembership">Verify Membership</a>
        <RouterLink to="/">Home</RouterLink>
        <div class="px-2 py-2 text-xs bg-green-600">
          <RouterLink to="/register">Become a Member</RouterLink>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>
