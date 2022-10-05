<script>
    import SideBar from '../components/SideBar.vue'
    import MainDash from '../components/MainDash.vue'
    export default {
    components: { SideBar, MainDash }
}
</script>
  
  
  
  
<template>
    <main class="flex w-full h-screen pt-12">
        <SideBar class="flex-1" />
        <MainDash class="flex-[4_1_0%]" />
    </main>
</template>