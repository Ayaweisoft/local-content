<template>
    <header class="fixed z-10 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2 bg-white shadow-md">
        <RouterLink to="/" class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Logo</RouterLink>
        <div class="flex justify-center text-xs items-center gap-4">
          <!-- <a href="#verifyMembership">Verify Membership</a> -->
          <RouterLink to="/#verifyMembership"  class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Verify Membership</RouterLink>
          <RouterLink to="/" class="px-2 py-2 cursor-pointer active:scale-95 transition-all">Home</RouterLink>
          <div class="text-xs py-2 px-2 hover:opacity-80 cursor-pointer active:scale-95 transition-all">
            <RouterLink to="/register/individual" class="text-white px-2 py-4 font-semibold bg-[#2BC241]">Become a Member</RouterLink>
          </div>
        </div>
      </header>
</template>
<!-- <div class="text-xs border opacity-90 py-2" for="company">
  <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
</div> -->