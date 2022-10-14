<script setup>
    import { RouterLink, RouterView, useRoute } from 'vue-router';
    import RegisterHero from '../components/RegisterHero.vue';
    import { ref, onMounted, onUpdated  } from 'vue'
    
    const registration = ref("individual")
    const route = useRoute()

    function checkRegType() {
      if (route.path == "/register/individual") {
        registration.value = "individual"
      } else {
        registration.value = "company"
      }
    }
    onMounted(() => {
      checkRegType()    
    })
    onUpdated(() => {
      checkRegType()
    })

</script>




<template>
  <RegisterHero :registration="registration" />
  <RouterView />
    <!-- <form action="" class="px-16 text-xs">
      <span class="p-0 pr-24 text-xl font-semibold border-b-2 opacity-70">Personal Information</span>
      <div class="grid grid-cols-3 gap-4 py-4 gap-x-20">
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="title">Title</label>
          <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="title" id="title">
            <option value="Mr">Mr</option>
            <option value="Mr">Mr</option>
              <option value="Mr">Mr</option>
            </select>
          </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="marital_status">Marital Status</label>
          <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="marital_status" id="marital_status">
              <option value="Mr">Mr</option>
              <option value="Mr"></option>
              <option value="Mr"></option>
              <option value="Mr"></option>
          </select>
          </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="address">Current Address</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="address" id="address" placeholder="Enter your current Address">
          </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="first_name">First Name</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your First Name">
          </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="religion">Religion</label>
          <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="religion" id="religion">
              <option value="Mr">Mr</option>
              <option value="Mr"></option>
              <option value="Mr"></option>
              <option value="Mr"></option>
          </select>
          </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="email">Email</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" id="email" placeholder="Enter your Email Address">
          </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="middle_name">Middle Name</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="middle_name" id="middle_name" placeholder="Enter your middle name">
          </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="dob">Date of Birth</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="phone">Phone Number</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="tel" name="phone" id="phone" placeholder="+234">
        </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="surname">Surname</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="surname" id="surname" placeholder="Enter your surname">
          </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="nationality">Nationality</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="nationality" id="nationality">
          </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="nin">NIN</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="nin" id="nin" placeholder="Enter your NIN">
        </div>
          <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="gender">Gender</label>
          <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="gender" id="gender">
              <option value="Mr">Mr</option>
          </select>
          </div>
        </div>
      <div class="mb-8 text-center mt-28">
          <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-xs font-semibold">Proceed</button> 
        </div>
    </form> -->

    
    <!-- <form action="" class="px-12 text-xs">
        <span class="p-0 pr-24 text-xl font-semibold border-b-2 opacity-70">Referee Declaration</span>
        <div class="grid grid-cols-3 gap-4 py-4 gap-x-20">
            <div class="flex flex-col">
              <label class="pl-2 text-xs opacity-70" for="title">Title</label>
              <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="title" id="title">
                <option value="Mr">Mr</option>
                <option value="Mr">Mr</option>
                <option value="Mr">Mr</option>
              </select>
            </div>
            <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="occupation">Occupation</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="occupation" id="occupation" placeholder="Enter your occupation">
          </div>
            <div class="flex flex-col">
              <label class="pl-2 text-xs opacity-70" for="phone">Phone Number</label>
              <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="tel" name="phone" id="phone" placeholder="+234">
            </div>
            <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="first_name">Name of applicant</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your Name">
            </div>
            <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="email">Email</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" id="email" placeholder="Enter your Email Address">
          </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="dob">Date of Birth</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
          </div>

          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="surname">Name of Referee</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="surname" id="surname" placeholder="Enter your surname">
          </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="gender">Gender</label>
            <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="gender" id="gender">
              <option value="Mr">Mr</option>
            </select>
            </div>
          </div>
          <div class="mb-8 flex justify-between mt-28">
            <button type="" class="bg-[#2BC241] text-white py-2 px-32 text-xs font-semibold">Previous</button> 
            <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-xs font-semibold">Next</button> 
        </div>
    </form> -->
    
    
    <!-- <form action="" class="px-12 text-xs">
      <span class="p-0 pr-24 text-xl font-semibold border-b-2 opacity-70">Appicant Declaration</span>
      <div class="grid grid-cols-1 gap-4 py-4 gap-x-20 w-1/3">
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="first_name">Name</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your Name">
          </div>
          <div class="flex flex-col">
            <label class="pl-2 text-xs opacity-70" for="dob">Date</label>
          <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
          </div>
        </div>
      <div class="mb-8 flex justify-between mt-28">
          <button type="" class="bg-[#2BC241] text-white py-2 px-32 text-xs font-semibold">Previous</button> 
          <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-xs font-semibold">Next</button> 
      </div>
  </form> -->
<!-- </main> -->
</template>

<!-- <main class="pt-12">
  <div class="bg-cover px-16 py-6 text-white h-36 overflow-hidden whoWeArePic bg-[url('./assets/register.svg')]">
    <h2 class="mb-4 text-2xl font-medium">Welcome to the registration page</h2>
    <span class="">Become a part of us today</span>
  </div> 
      
  <div class="py-6 text-center px-16">
    <p class="mb-2 text-xs opacity-95">Choose your type of registration</p>
    <div class="flex items-center justify-center">
      <div class="">
        <div class="border border-r-0 opacity-90 text-xs bg-[#2BC241] text-white" for="individual">
          <RouterLink class="px-12 py-1" to="/individual">individual</RouterLink>
        </div>
      </div>
      <div class="">
        <div class="text-xs border opacity-90" for="company">
          <RouterLink class="px-12 py-1" to="/company">Company</RouterLink>
          
        </div>
      </div>
    </div>
    <div  class="my-12 overflow-hidden flex justify-center">
      <img src="../assets/progress-1.svg" alt="progress bar">
    </div>
  </div> -->