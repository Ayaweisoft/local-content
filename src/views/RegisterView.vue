<script>
//   import Header from '../components/Header.vue';
//   import headerImage from '../assets/Rectangle 139.svg';
//   import FooterImage from '../assets/Rectangle 145.svg';
//   import WhoWeAreImage from '../assets/Rectangle 141.svg';
//   import Vector from '../assets/Vector 1.svg';
  
//   export default {
//   setup() {
//     var HeaderImage = '../assets/Rectangle 139.svg';
//     var FooterImage = '../assets/Rectangle 145.svg';
//     var WhoWeAreImage = '../assets/Rectangle 141.svg';
//     var Vector = '../assets/Vector 1.svg';

//     console.log(HeaderImage);

//     return {
//       HeaderImage,
//       FooterImage,
//       WhoWeAreImage,
//       Vector,
//     };
//   },
// }
</script>




<template>
  <main class="pt-12">
    <div class="bg-cover px-16 py-6 text-white h-36 overflow-hidden whoWeArePic bg-[url('./assets/register.svg')]">
      <!-- <img class="" src="../assets/img.svg" alt="Who We Are Image">   -->
      <h2 class="mb-4 text-2xl font-medium">Welcome to the registration page</h2>
      <span class="">Become a part of us today</span>
    </div> 
        
    <div class="py-6 text-center">
      <p class="mb-2 text-xs opacity-95">Choose your type of registration</p>
      <div class="flex items-center justify-center">
        <div class="">
          <label class="px-12 border border-r-0 py-1 opacity-90 text-xs bg-[#2BC241] text-white" for="individual">Individual</label>
          <input class="invisible w-0 h-0" type="radio" name="registration_type" value="individual" id="individual">
        </div>
        <div class="">
          <label class="px-12 py-1 text-xs border opacity-90" for="company">Company</label>
          <input class="invisible w-0 h-0" type="radio" name="registration_type" value="company" id="company">
        </div>
      </div>
    </div>
    <form action="" class="px-12 py-4">
      <span class="p-0 pr-24 text-xl font-semibold border-b-2 opacity-70">Personal Information</span>
      <div class="grid grid-cols-3 gap-4 py-4 gap-x-20">
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="title">Title</label>
          <select class="p-2 border opacity-50 rounded-xl" name="title" id="title">
            <option value="Mr">Mr</option>
            <option value="Mr">Mr</option>
            <option value="Mr">Mr</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="marital_status">Marital Status</label>
          <select class="p-2 border opacity-50 rounded-xl" name="marital_status" id="marital_status">
            <option value="Mr">Mr</option>
            <option value="Mr"></option>
            <option value="Mr"></option>
            <option value="Mr"></option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="address">Current Address</label>
          <input class="p-2 border opacity-50 rounded-xl" type="text" name="address" id="address" placeholder="Enter your current Address">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="first_name">First Name</label>
          <input class="p-2 border opacity-50 rounded-xl" type="text" name="first_name" id="first_name" placeholder="Enter your First Name">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="religion">Religion</label>
          <select class="p-2 border opacity-50 rounded-xl" name="religion" id="religion">
            <option value="Mr">Mr</option>
            <option value="Mr"></option>
            <option value="Mr"></option>
            <option value="Mr"></option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="email">Email</label>
          <input class="p-2 border opacity-50 rounded-xl" type="email" name="email" id="email" placeholder="Enter your Email Address">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="middle_name">Middle Name</label>
          <input class="p-2 border opacity-50 rounded-xl" type="text" name="middle_name" id="middle_name" placeholder="Enter your middle name">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="dob">Date of Birth</label>
          <input class="p-2 border opacity-50 rounded-xl" type="date" name="dob" id="dob">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="phone">Phone Number</label>
          <input class="p-2 border opacity-50 rounded-xl" type="tel" name="phone" id="phone" placeholder="+234">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="surname">Surname</label>
          <input class="p-2 border opacity-50 rounded-xl" type="text" name="surname" id="surname" placeholder="Enter your surname">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="nationality">Nationality</label>
          <input class="p-2 border opacity-50 rounded-xl" type="text" name="nationality" id="nationality">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="nin">NIN</label>
          <input class="p-2 border opacity-50 rounded-xl" type="text" name="nin" id="nin" placeholder="Enter your NIN">
        </div>
        <div class="flex flex-col">
          <label class="pl-2 text-xs opacity-70" for="gender">Gender</label>
          <select class="p-2 border opacity-50 rounded-xl" name="gender" id="gender">
            <option value="Mr">Mr</option>
          </select>
        </div>
      </div>
      <div class="mb-8 text-center mt-28">
        <button type="submit" class="bg-[#2BC241] text-white py-2 px-32 text-xs font-semibold">Proceed</button> 
      </div>
    </form>
  </main>
</template>

