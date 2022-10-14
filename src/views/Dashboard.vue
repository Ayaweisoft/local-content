<script setup>
import { ref, onMounted } from 'vue'
    import SideBar from '../components/SideBar.vue'
    import MainDash from '../components/MainDash.vue'
    
    const showSidebar = ref(null)
    function SideBarToggle() {
        if (window.innerWidth < 500) {
            showSidebar.value = false
        } else {
            showSidebar.value = true
        }
    }
    window.addEventListener("resize", () => {
        SideBarToggle()
    })

    onMounted(() => {
        SideBarToggle()
    })
</script>
  
  
  
  
<template>
    <main class="flex w-full min-h-screen pt-12">
        <SideBar v-show="showSidebar" class="flex-1" />
        <MainDash class="flex-[4_1_0%]" />
    </main>
</template>