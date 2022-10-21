<script setup>
    import SideBar from '../components/SideBar.vue'
    import MainDash from '../components/MainDash.vue'
    import AdminNav from '../components/AdminNav.vue';
    import { useStore } from 'vuex'
    import { ref, onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router'

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const user = store.state.auth.user;
    
    onMounted(() => {
        if (!user) {
            router.push("/login");
        }
    });
    
</script>
  
<template>
    <main class="flex w-full min-h-screen sm:h-screen pt-12 sm:pt-0">
        <AdminNav />
        <SideBar />
        <MainDash />
    </main>
</template>