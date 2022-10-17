<template>
    <header class="fixed top-0 z-10 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2 bg-white shadow-md">
        <RouterLink to="/" class="">Logo</RouterLink>
        <div class="flex text-xs items-center sm:gap-4 gap-2">
          <!-- <a href="#verifyMembership">Verify Membership</a> -->
          <RouterLink to="/#verifyMembership"  class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Verify Membership</RouterLink>
          <RouterLink to="/" class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Home</RouterLink>
          <RouterLink to="/register/individual" class="text-white text-center text-xs px-2 py-2 font-semibold bg-[#2BC241] p hover:opacity-80 cursor-pointer active:scale-95 transition-all">Become a Member</RouterLink>
        </div>
      </header>
</template>
<!-- <div class="text-xs border opacity-90 py-2" for="company">
  <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
</div> -->