<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex'

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    function logOut() {
        store.dispatch('auth/logout');
        router.push('/login');
    } 
</script>
  
  
  
  
<template>
    <div class="border-r-2 p-4 py-8 sm:flex flex-col justify-between hidden sm:flex-auto">
        <div class="">
            <div class="flex justify-center flex-col gap-2 mb-12 items-center">
                <img src="../assets/admin-pic.svg" alt="" />
                <h4 class="text-[#979797]">Admin</h4>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-[#7E7D7D] text-sm">Menu</span>
                <button class="flex gap-2 md:gap-4 items-center bg-[#2bc24126] p-3 px-2 lg:p-3 rounded-xl hover:bg-[#31803d26] cursor-pointer active:scale-95 transition-all">
                    <img src="../assets/dash-icon.svg" alt="" />
                    <span class="text-sm font-medium">Dashboard</span>
                </button>
            </div>
        </div>
        <button 
            class="flex gap-6 items-center bg-[#E7E7E7] p-3 rounded-xl hover:bg-[#e7d2d2] cursor-pointer active:scale-95 transition-all"
            @click="logOut"
        >
            <img src="../assets/logout-icon.svg" alt="" />
            <span class="text-[#FF0000] font-medium text-sm">Logout</span>
        </button>
    </div>
</template>
  