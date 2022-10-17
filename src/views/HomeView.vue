<script>
import Header from '../components/Header.vue';
import headerImage from '../assets/Rectangle 139.svg';
import FooterImage from '../assets/Rectangle5.svg';
import WhoWeAreImage from '../assets/Rectangle4.svg';
import Vector from '../assets/Vector 1.svg';
</script>

<script></script>

<template>
  <main class="w-full mt-12" id="home">
    <div class="bg-cover h-[50vh] sm:h-[70vh] md:h-[75vh] w-full landing relative" style="background-image: url('src/assets/Rectangle 139.svg')"></div>
    <div class="flex flex-col md:flex-row gap-14 py-14 px-10 md:px-20 md:max-h-[80vh] overflow-hidden">
      <div class="flex-1 overflow-hidden">
        <img class="object-cover h-80 sm:h-96 w-full" src="../assets/Rectangle 140.svg" alt="Who We Are Image" />
      </div>
      <div class="flex-1 flex flex-col gap-4 overflow-hidden justify-center">
        <h2 class="text-[2rem] font-bold">Who we are</h2>
        <p class="text-sm overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ornare viverra dui bibendum. Non malesuada
          cursus lacus adipiscing lacus. Nullam in mi faucibus cum viverra. Duis a viverra arcu aliquet aliquam feugiat
          nunc. Tellus mauris habitasse posuere mus est senectus pharetra libero commodo. Turpis massa ac duis
          sollicitudin urna lorem vitae congue. Orci sed viverra morbi placerat amet molestie convallis. Rhoncus cursus
          vitae in dolor tellus fermentum nulla amet. Suspendisse felis interdum massa varius ut malesuada sem. Ultrices
        </p>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col items-center px-10 md:px-24 py-8 min-h-[60vh] text-white justify-center md:justify-between w-full bg-cover gap-4 md:gap-14 whatWeDo bg-[url('assets/Rectangle4.svg')] bg-center"
      style=""
    >
      <div class="flex flex-col gap-4 missionStatement">
        <h2 class="text-[1.7rem] md:text-[2rem] font-bold text-center">Our Mission Statement</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa egestas vestibulum sed a, ipsum ut feugiat
          montes. Malesuada aliquam molestie neque vestibulum arcu morbi convallis lectus neque. Fringilla sem pulvinar
          sed turpis donec leo amet.
        </p>
      </div>
      <div class="flex flex-col gap-4 visionStatement">
        <h2 class="text-[1.7rem] md:text-[2rem] font-bold text-center">Our Vision Statement</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa egestas vestibulum sed a, ipsum ut feugiat
          montes. Malesuada aliquam molestie neque vestibulum arcu morbi convallis lectus neque. Fringilla sem pulvinar
          sed turpis donec leo amet.
        </p>
      </div>
    </div>
    <div class="px-10 py-14">
      <h2 class="text-[2rem] text-center font-bold">Why You Should Join Us</h2>
      <div class="flex flex-col mt-8 relative">
        <div class="flex gap-8 justify-between items-center">
          <div class="w-40 lg:w-48 md:absolute top-4 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
          <div class="w-40 lg:w-48 md:absolute text-xs top-4 right-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
        </div>
        <div class="my-8 flex justify-center">
          <img class="w-1/2" src="../assets/reasons.svg" alt="Member benefit chart">
          <span class="text-[6px] sm:text-xs md:text-base absolute top-1/2 text-white -translate-y-1/3 -translate-x-1/2 left-1/2">Member</span>
        </div>
        <div class="flex gap-8 justify-between items-center">
          <div class="w-40 lg:w-48 md:absolute text-xs bottom-0 left-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
          <div class="w-40 lg:w-48 md:absolute text-xs bottom-0 right-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 px-10 md:px-24 py-10 bg-[#2BC241] howToJoinUs">
      <h2 class="text-[2rem] text-center font-bold text-white">How To Join Us</h2>
      <p class="md:mt-8 text-sm text-white mb-4 text-center">You can join us with just three steps listed below</p>
      <div class="flex flex-col md:flex-row items-center justify-between gap-6  md:gap-4 mb-12 card">
        <div class="flex flex-col items-center justify-center md:w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            1
          </div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            2
          </div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            3
          </div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
      </div>
      <button class="px-4 py-2 mt-8 font-medium bg-white sm:px-20">Become a Member</button>
    </div>
    <div class="px-10 md:px-24 py-12 pt-20 verifyYourMemberShip" id="verifyMembership">
      <div class="flex flex-col items-start justify-center sm:w-2/3 md:w-1/2 lg:w-2/5">
        <span class="text-2xl font-medium">Verify Your Membership</span>
        <input
          class="w-full my-6 px-2 py-2 text-xs font-semibold border-2 outline-none"
          type="text"
          placeholder="Enter your membership number"
        />
        <button class="px-6 py-2 text-sm text-white bg-[#2BC241]">Submit</button>
      </div>
    </div>
    <div class="bg-cover bg-[url('assets/Rectangle5.svg')] grid place-items-center px-4 py-14 font-semibold">
      <h1 class="text-2xl sm:text-3xl md:text-5xl text-white text-center py-8">Together we can <br> achieve great things</h1>
    </div>
    <div class="footer bg-[#2BC241] relative px-10 md:px-24 text-white py-4 pb-10 sm:py-10 sm:pb-20">
      <div class="text-[3rem] font-semibold text-center sm:text-left">LOGO</div>
      <p class="absolute text-sm font-semibold left-0 bottom-2 w-full text-center">Developed by Ayaweisoft</p>
    </div>
  </main>
</template>
