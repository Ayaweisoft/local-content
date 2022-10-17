<script setup>
    defineEmits(['prevStep', 'nextStep'])
</script>
  
  
<template>
    <span class="py-0 pl-2 pr-8 sm:pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">Lead Person Declaration</span>
    <div class="px-4 gap-4 py-4 gap-x-20 grid grid-cols-1 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="first_name">Name</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your Name">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="dob">Date</label>
        <input class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
        </div>
    </div>
    <div class="mb-8 flex justify-between mt-28 flex-col gap-4 sm:flex-row">
        <button @click.prevent="$emit('prevStep')" type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Previous</button> 
        <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Submit</button> 
    </div>
</template>
  
  