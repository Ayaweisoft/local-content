<script setup>
import { ref, onMounted } from 'vue'
    import SideBar from '../components/SideBar.vue'
    import MainDash from '../components/MainDash.vue'
    
</script>
  
<template>
    <main class="flex w-full min-h-screen pt-12">
        <SideBar />
        <MainDash />
    </main>
</template>