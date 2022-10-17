<template>
    <header class="fixed z-10 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 py-2 bg-white shadow-md">
        <div>Logo</div>
        <div class="flex justify-center text-xs items-center gap-4">
          <a href="/#verifyMembership">Verify Membership</a>
          <RouterLink to="/">Home</RouterLink>
          <div class="px-2 py-2 text-xs bg-green-600">
            <RouterLink to="/register/individual" class="text-white">Become a Member</RouterLink>
          </div>
        </div>
      </header>
</template>