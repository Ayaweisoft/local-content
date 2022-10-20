<script setup>
    defineEmits(['prevStep', 'nextStep'])
    defineProps(['registration'])
    //  const registration = {
    //     name: {
    //                 title: ref(null),
    //                 first: ref(null),
    //                 middle: ref(null),
    //                 last: ref(null)
    //             },
//         email: ref(null),
//         meta: {
//                 gender: ref(null)
//             },
//         maritalStatus: ref(null),
//         religion:ref(null),
//         dob: ref(null),
//         nationality:ref(null),
//         address: ref(null),
//         nin: ref(null),
//         phone: ref(null),

//         referee: {
//             name:ref(null),
//             occupation: ref(null),
//             address: ref(null),
//             phone: ref(null),
//             email: ref(null),
//             date: ref(null),
//             signature: ref(null)
//         },

//         organization: {
//             address: ref(null),
//             email: ref(null),
//             auth: {
//                     model: ref(null),
//                     number: ref(null)
//                 },
//             contactPerson: ref(null),
//             whatsapp: ref(null),
//             declaration: {
//                 name: ref(null),
//                 date: ref(null),
//                 signature: ref(null)
//             },
//             authority: ref(null),
//             state: ref(null),
//             status: ref(null),
//             kiv: ref(null),
//             signature: ref(null)
//         }
//     }
</script>
  
  
  
<template>
    <span class="py-0 pl-2 pr-24 text-xl font-semibold border-b-2 opacity-70 border-[#565656]">Referee Declaration</span>
    <div class="sm:grid px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 gap-x-20">
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="title">Title</label>
        <select class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="title" id="title">
            <option value=""></option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
        </select>
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="occupation">Occupation</label>
        <input v-model="registration.referee.occupation" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="occupation" id="occupation" placeholder="Enter your occupation">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="phone">Phone Number</label>
        <input v-model="registration.referee.phone" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="phone" id="phone" placeholder="+234">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="first_name">Name of applicant</label>
        <input v-model="registration.referee.applicant_name" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="first_name" id="first_name" placeholder="Enter your Name">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="email">Email</label>
        <input v-model="registration.referee.email" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="email" name="email" id="email" placeholder="Enter your Email Address">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="dob">Date</label>
        <input v-model="registration.referee.date" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="date" name="dob" id="dob">
        </div>

        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="surname">Name of Referee</label>
        <input v-model="registration.referee.name" class="p-2 border opacity-70 rounded-xl border-[#00000080]" type="text" name="surname" id="surname" placeholder="Enter your surname">
        </div>
        <div class="flex flex-col py-2">
        <label class="pl-2 text-sm opacity-70" for="gender">Gender</label>
        <select v-model="registration.referee.gender" class="p-2 border opacity-70 rounded-xl border-[#00000080]" name="gender" id="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        </div>
    </div>
    <div class="mb-8 flex justify-between mt-28 flex-col gap-4 sm:flex-row">
        <button @click.prevent="$emit('prevStep')"  type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Previous</button> 
        <button @click.prevent="$emit('nextStep')"  type="" class="bg-[#2BC241] text-white py-2 px-32 text-sm font-semibold hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Next</button> 
    </div>
</template>
  
  