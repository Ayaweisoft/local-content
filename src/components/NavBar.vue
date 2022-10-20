<script setup>
  import { ref } from 'vue'
  const navOpen = ref(false)
  const navShow = ref(false)
  const nav= ref(null)
  const showNav = () => {
    navShow.value = !navShow.value
    if (navShow.value) {
      nav.value.style.visibility = "visible"
      nav.value.style.height = "30%"
    } else {
      nav.value.style.height = "0px"
      nav.value.style.visibility = "hidden"
    }
  }
</script>

<template>
    <header class="fixed top-0 z-10 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2 bg-white shadow-md">
        <RouterLink to="/" class="z-30">Logo</RouterLink>
        <button class="hover:animate-pulse p-2 z-30 rounded-lg sm:hidden focus:outline-none focus:shadow-outline" :class="{ hide: navShow }" @click.prevent="showNav">
					<svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6" style="max-height: 1.5rem;">
            <path v-if="navShow" x-show="open" fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
            <path v-else x-show="!open" fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
					</svg>
				</button>
        <div class="sm:flex text-xs items-center sm:gap-4 gap-2 hidden">
          <!-- <a href="#verifyMembership">Verify Membership</a> -->
          <RouterLink to="/#verifyMembership"  class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Verify Membership</RouterLink>
          <RouterLink to="/" class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Home</RouterLink>
          <RouterLink to="/register/individual" class="text-white text-center text-xs px-2 py-2 font-semibold bg-[#2BC241] p hover:opacity-80 cursor-pointer active:scale-95 transition-all">Become a Member</RouterLink>
        </div>
        <nav ref="nav" class="fixed transition-all delay-100 h-0 top-0 right-0 z-10 bg-white py-6 w-full sm:hidden pt-16" style="height: 0px; visibility:hidden">
          <div class="flex flex-col gap-4 items-center ">
            <!-- <RouterLink to="/" class="">Logo</RouterLink> -->
            <RouterLink to="/#verifyMembership"  class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Verify Membership</RouterLink>
            <RouterLink to="/" class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Home</RouterLink>
            <RouterLink to="/register/individual" class="text-white text-center text-xs px-2 py-2 font-semibold bg-[#2BC241] p hover:opacity-80 cursor-pointer active:scale-95 transition-all">Become a Member</RouterLink>
          </div>
        </nav>
      </header>
</template>
<!-- <div class="text-xs border opacity-90 py-2" for="company">
  <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
</div> -->