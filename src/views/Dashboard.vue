<script>
    import SideBar from '../components/SideBar.vue'
    import MainDash from '../components/MainDash.vue'
    export default {
    components: { SideBar, MainDash }
}
</script>
  
  
  
  
<template>
    <main class="pt-12 flex h-screen w-full">
        <SideBar class="flex-1" />
        <MainDash class="flex-[4_1_0%]" />
    </main>
</template>