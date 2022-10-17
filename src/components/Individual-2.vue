<script setup>
    defineEmits(['prevStep', 'nextStep'])
</script>
  
  
<template>
    <span class="py-0 pl-2 pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">Referee Declaration</span>
    <div class="sm:grid px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 gap-x-20">
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="title">Title</label>
        <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="title" id="title">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
        </select>
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="occupation">Occupation</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="occupation" id="occupation" placeholder="Enter your occupation">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="phone">Phone Number</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="tel" name="phone" id="phone" placeholder="+234">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="first_name">Name of applicant</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your Name">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="email">Email</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" id="email" placeholder="Enter your Email Address">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="dob">Date of Birth</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
        </div>

        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="surname">Name of Referee</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="surname" id="surname" placeholder="Enter your surname">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="gender">Gender</label>
        <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="gender" id="gender">
            <option value="Mr">Mr</option>
        </select>
        </div>
    </div>
    <div class="mb-8 flex justify-between mt-28 flex-col gap-4 sm:flex-row">
        <button @click.prevent="$emit('prevStep')"  type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold">Previous</button> 
        <button @click.prevent="$emit('nextStep')"  type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold">Next</button> 
    </div>
</template>
  
  