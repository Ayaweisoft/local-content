<script>
import Header from '../components/Header.vue';
import headerImage from '../assets/Rectangle 139.svg';
import FooterImage from '../assets/Rectangle 145.svg';
import WhoWeAreImage from '../assets/Rectangle 141.svg';
import Vector from '../assets/Vector 1.svg';

export default {
  setup() {
    var HeaderImage = '../assets/Rectangle 139.svg';
    var FooterImage = '../assets/Rectangle 145.svg';
    var WhoWeAreImage = '../assets/Rectangle 141.svg';
    var Vector = '../assets/Vector 1.svg';

    console.log(HeaderImage);

    return {
      HeaderImage,
      FooterImage,
      WhoWeAreImage,
      Vector,
    };
  },
};
</script>

<script></script>

<template>
  <main class="w-full">
    <Header />
    <div class="bg-cover h-[50vh] w-full landing relative" style="background-image: url('src/assets/Rectangle 139.svg')">
      hiii
    </div>
    <div class="flex flex-col md:flex-row items-center h-fit md:h-[90vh] justify-center w-full py-14 px-10 md:px-24 gap-14 whoWeAre">
      <div class="bg-cover lg:h-full overflow-hidden whoWeArePic relative">
        <img class="" src="../assets/Rectangle 140.svg" alt="Who We Are Image" />
      </div>
      <div class="flex flex-col h-full justify-center items-center w-full md:w-3/4 lg:w-2/5 gap-4 whoWeAreText">
        <h2 class="text-[2rem] font-bold text-center">Who we are</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ornare viverra dui bibendum. Non malesuada
          cursus lacus adipiscing lacus. Nullam in mi faucibus cum viverra. Duis a viverra arcu aliquet aliquam feugiat
          nunc. Tellus mauris habitasse posuere mus est senectus pharetra libero commodo. Turpis massa ac duis
          sollicitudin urna lorem vitae congue. Orci sed viverra morbi placerat amet molestie convallis. Rhoncus cursus
          vitae in dolor tellus fermentum nulla amet. Suspendisse felis interdum massa varius ut malesuada sem. Ultrices

        </p>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col items-center px-10 md:px-24 py-8 h-[60vh] h-full text-white justify-center md:justify-between h-full w-full bg-cover gap-4 md:gap-14 whatWeDo bg-[]"
      style="background-image: url('src/assets/Rectangle 141.svg')"
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
    <div class="whyYouShouldJoinUs w-full md:h-[90vh] flex flex-col gap-10 px-10 py-14">
      <h2 class="text-[2rem] text-center font-bold">Why You Should Join Us</h2>
      <div class="flex flex-col lg:flex-row items-center justify-center gap-2">
        <div class="flex lg:flex-col gap-4 items-center justify-between h-full row1">
          <div class="md:w-2/3 w-full text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
          <div class="md:w-2/3 w-full text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
        </div>
        <svg class="scale-[0.5]" width="588" height="368" viewBox="0 0 588 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M370.86 147.264L484.68 2H588M223.86 147.264L115.92 11.2364H0M223.86 231.652L115.92 366H0M370.86 231.652L484.68 366H588" stroke="black" stroke-width="3"/>
        <ellipse cx="295.5" cy="189" rx="85.5" ry="85" fill="#2BC241"/>
        </svg>

        <div class="flex md:flex-col gap-4 items-center justify-between h-full row-3">
          <div class="md:w-2/3 w-full text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
          <div class="md:w-2/3 w-full text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus.
            Turpis.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 px-10 md:px-24 py-10 bg-green-600 howToJoinUs">
      <h2 class="text-[2rem] text-center font-bold text-white">How To Join Us</h2>
      <p class="md:mt-8 text-sm font-semibold text-white">You can join us with just three steps listed below</p>
      <div class="flex flex-col md:flex-row items-center justify-between gap-6  md:gap-4 card">
        <div class="flex flex-col items-center justify-center md:w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-green-600 rounded-full h-8 w-8 grid place-items-center">
            1
          </div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-green-600 rounded-full h-8 w-8 grid place-items-center">
            1
          </div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-green-600 rounded-full h-8 w-8 grid place-items-center">
            1
          </div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
      </div>
      <button class="px-4 py-2 mt-8 font-semibold bg-white">Become a Member</button>
    </div>
    <div class= "px-10 md:px-24 py-10 verifyYourMemberShip" id="verifyMembership">
      <div class="flex flex-col items-start justify-center w-1/3 gap-4">
        <h2 class="text-[1.5rem]">Verify Your Membership</h2>
        <input
          class="w-full px-2 py-2 text-xs font-semibold border-2 outline-none"
          type="text"
          placeholder="Enter your membership number"
        />
        <button class="px-6 py-2 text-white bg-green-600">Submit</button>
      </div>
    </div>
    <div
      class="bg-cover w-full grid text-white place-items-center w-full picFooter px-4 py-14 text-center h-[50vh] font-bold text-[1.6rem] md:text-[3rem] h-full h-2/4"
      style="background-image: url('src/assets/Rectangle 145.svg')"
    >
      <h1 class="md:w-1/2">Together we can achieve great things</h1>
    </div>
    <div class="footer bg-green-600 h-[35vh] relative px-10 md:px-24 text-white py-10">
      <div class="text-[3rem] font-bold">LOGO</div>
      <p class="absolute text-sm font-semibold -translate-x-1/2 bottom-2 left-1/2">Developed by Ayaweisoft</p>
    </div>
  </main>
</template>
