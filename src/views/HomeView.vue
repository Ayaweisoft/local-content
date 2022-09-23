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
}
</script>

<script>

</script>

<template>
  <main class="w-full">
    <Header />
    <div class="object-cover w-full landing">
      <img class="w-full" src="../assets/Rectangle 139.svg" alt="Header Image">
    </div>
    <div class="flex items-center h-[90vh] justify-center w-full py-14 px-24 gap-14 whoWeAre">
      <div class="object-cover h-full overflow-hidden whoWeArePic">
        <img class="w-full h-full" src="../assets/Rectangle 140.svg" alt="Who We Are Image">  
      </div>  
      <div class="flex flex-col w-2/5 gap-4 whoWeAreText">
        <h2 class="text-[2rem] font-bold text-center">Who we are</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ornare viverra dui bibendum. Non malesuada cursus lacus adipiscing lacus. Nullam in mi faucibus cum viverra. Duis a viverra arcu aliquet aliquam feugiat nunc. Tellus mauris habitasse posuere mus est senectus pharetra libero commodo.
          Turpis massa ac duis sollicitudin urna lorem vitae congue. Orci sed viverra morbi placerat amet molestie convallis. Rhoncus cursus vitae in dolor tellus fermentum nulla amet. Suspendisse felis interdum massa varius ut malesuada sem. Ultrices fusce ut sed natoque. Vitae luctus integer nunc, arcu sed. At a ullamcorper eu, ornare nibh tristique donec. In velit scelerisque varius ultrices imperdiet eget. In sed urna tincidunt porttitor facilisis pulvinar auctor. Donec non cursus orci molestie suspendisse. Habitant sagittis facilisis justo, in eros, pellentesque mi. Mi tempus viverra pellentesque sed diam lacus, ullamcorper eget.
        </p>
      </div>
    </div>
    <div class="flex items-center px-24 py-8 h-[60vh] h-full text-white justify-between h-full w-full object-cover gap-14 whatWeDo bg-[]" style="background-image: url('src/assets/Rectangle 141.svg');">
      <div class="flex flex-col gap-4 missionStatement">
        <h2 class="text-[2rem] font-bold text-center">Our Mission Statement</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa egestas vestibulum sed a, ipsum ut feugiat montes. Malesuada aliquam molestie neque vestibulum arcu morbi convallis lectus neque. Fringilla sem pulvinar sed turpis donec leo amet.
        </p>
      </div> 
      <div class="flex flex-col gap-4 visionStatement">
        <h2 class="text-[2rem] font-bold text-center">Our Vision Statement</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa egestas vestibulum sed a, ipsum ut feugiat montes. Malesuada aliquam molestie neque vestibulum arcu morbi convallis lectus neque. Fringilla sem pulvinar sed turpis donec leo amet.
        </p>
      </div>
    </div>
    <div class="whyYouShouldJoinUs w-full h-[90vh] flex flex-col gap-10 px-10 py-14">
      <h2 class="text-[2rem] text-center font-bold">Why You Should Join Us</h2>
      <div class="flex items-center justify-center gap-2">
        <div class="flex flex-col items-center justify-between h-full row1">
          <div class="w-2/3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus. Turpis.
          </div>
          <div class="w-2/3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus. Turpis.
          </div>
        </div>
        <div class="relative row-2 w-fit">
          <svg class="scale-[0.8]" width="588" height="368" viewBox="0 0 588 368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M370.86 147.264L484.68 2H588M223.86 147.264L115.92 11.2364H0M223.86 231.652L115.92 366H0M370.86 231.652L484.68 366H588" stroke="black" stroke-width="3"/>
          </svg>
          <div class="absolute top-0 bottom-0 left-0 right-0 grid m-auto font-semibold bg-green-600 rounded-full w-36 h-36 place-items-center right-1/2 circle">
            Member
          </div>
        </div>
        <div class="flex flex-col items-center justify-between h-full row-3">
          <div class="w-2/3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus. Turpis.
          </div>
          <div class="w-2/3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim proin tortor bibendum egestas tellus lacus. Turpis.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 px-24 py-10 bg-green-600 howToJoinUs">
      <h2 class="text-[2rem] text-center font-bold text-white">How To Join Us</h2>
      <p class="mt-8 text-sm font-semibold text-white">You can join us with just three steps listed below</p>
      <div class="flex items-center justify-between gap-4 card">
        <div class="flex flex-col items-center justify-center w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-green-600 rounded-full h-8 w-8 grid place-items-center">1</div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-green-600 rounded-full h-8 w-8 grid place-items-center">1</div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center w-1/3 gap-2 px-10 py-4 bg-white">
          <div class="text-[1rem] font-bold bg-green-200 text-green-600 rounded-full h-8 w-8 grid place-items-center">1</div>
          <p class="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate turpis nibh dapibus non.
          </p>
        </div>
      </div>
      <button class="px-4 py-2 mt-8 font-semibold bg-white">Become a Member</button>
    </div>
    <div class="px-24 py-10 verifyYourMemberShip" id="verifyMembership">
      <div class="flex flex-col items-start justify-center w-1/3 gap-4">
        <h2 class="text-[1.5rem]">Verify Your Membership</h2>
        <input class="w-full px-2 py-2 text-xs font-semibold border-2 outline-none" type="text" placeholder="Enter your membership number">
        <button class="px-6 py-2 text-white bg-green-600">Submit</button>
      </div>
    </div>
    <div class="object-cover w-full grid text-white place-items-center w-full picFooter px-36 text-center h-[50vh] font-bold text-[3rem] h-full h-2/4" style="background-image: url('src/assets/Rectangle 145.svg');">
      <h1 class="w-1/2">Together we can achieve great things</h1>
    </div>
    <div class="footer bg-green-600 h-[35vh] relative px-24 text-white py-10">
      <div class="text-[3rem] font-bold">
        LOGO
      </div>
      <p class="absolute text-sm font-semibold -translate-x-1/2 bottom-2 left-1/2"> Developed by Ayaweisoft</p>
    </div>
  </main>
</template>
