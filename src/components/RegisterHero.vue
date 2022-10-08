<script>
    import { RouterLink, RouterView } from 'vue-router';

    export default {
        props: {
            registration: String,
        },
    }
</script>
  
  
  
  
  <template>
    <div class="pt-12">
      <div class="bg-cover px-16 py-6 text-white h-36 overflow-hidden whoWeArePic bg-[url('./assets/register.svg')]">
        <h2 class="mb-4 text-2xl font-medium">Welcome to the registration page</h2>
        <span class="">Become a part of us today</span>
      </div> 
          
      <div class="py-6 text-center px-4 sm:px-16">
        <p class="mb-2 text-sm opacity-95">Choose your type of registration</p>
        <div class="flex items-center justify-center">
            <div v-if="registration === 'individual'" class="flex items-center justify-center">
                <div class="border border-r-0 opacity-90 py-2 text-xs bg-[#2BC241] text-white" for="individual">
                    <RouterLink class="px-12 py-2" to="/register/individual">individual</RouterLink>
                </div>
                
                <div class="text-xs border opacity-90 py-2" for="company">
                    <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
                </div>
            </div>
            <div v-else-if="registration === 'company'"  class="flex items-center justify-center">
                <div class="border border-r-0 opacity-90 py-2 text-xs" for="individual">
                    <RouterLink class="px-12 py-2" to="/register/individual">individual</RouterLink>
                </div>
                <div class="text-xs border opacity-90 py-2  bg-[#2BC241] text-white" for="company">
                    <RouterLink class="px-12 py-2" to="/register/company">Company</RouterLink>
                </div>
            </div>
        </div>
        <div  class="my-12 overflow-hidden flex justify-center">
          <img src="../assets/progress-1.svg" alt="progress bar">
        </div>
      </div>
    </div>
  </template>
  