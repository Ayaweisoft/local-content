<script setup>
    defineEmits(['prevStep', 'nextStep'])
</script>
  
<template>
    <span class="py-0 pl-2 pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">CEO Personal Details</span>
    <div class="sm:grid px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 gap-x-20">
        <div class="flex flex-col py-2">
            <label class="pl-2 text-sm opacity-70" for="title">Title</label>
            <!-- <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="title" id="title">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
            </select> -->
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" list="title" name="title" id="title" placeholder="Miss">
            <datalist id="title">
                <option value="Edge" />
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
        </div>
        <div class="flex flex-col py-2">
            <label class="pl-2 text-sm opacity-70" for="marital_status">Marital Status</label>
            <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="marital_status" id="marital_status">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            </select>
            </div>
            <div class="flex flex-col py-2">
            <label class="pl-2 text-sm opacity-70" for="address">Current Address</label>
            <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="address" id="address" placeholder="Enter your current Address">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="first_name">First Name</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your First Name">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="religion">Religion</label>
        <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="religion" id="religion">
            <option value="christain">Christain</option>
            <option value="muslim">Muslim</option>
            <option value="traditional">Traditional</option>
        </select>
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="email">Email</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" id="email" placeholder="Enter your Email Address">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="middle_name">Middle Name</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="middle_name" id="middle_name" placeholder="Enter your middle name">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="dob">Date of Birth</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="phone">Phone Number</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="tel" name="phone" id="phone" placeholder="+234">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="surname">Surname</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="surname" id="surname" placeholder="Enter your surname">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="nationality">Nationality</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="nationality" id="nationality">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="nin">NIN</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="nin" id="nin" placeholder="Enter your NIN">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="gender">Gender</label>
        <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        </div>
    </div>
    <div class="mb-8 text-center mt-28">
        <button  @click.prevent="$emit('nextStep')" type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Proceed</button> 
    </div>
</template>
  
  