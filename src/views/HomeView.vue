<script>
import NavBar from '../components/NavBar.vue';
export default {
    data: function(){
        return {
            hash: this.$route.hash,
        }
    },
    components: {
      NavBar
    },
    mounted() {
        this.$nextTick(function () {
            if (this.$route.hash) {
                console.log(this.$route.hash);
                const el = document.querySelector(this.$route.hash);
                console.log(el);
                el && el.scrollIntoView();
            }
        })
    },
    updated() {
        this.$nextTick(function () {
            if (this.$route.hash) {
                console.log(this.$route.hash);
                const el = document.querySelector(this.$route.hash);
                console.log(el);
                el && el.scrollIntoView();
            }
        })
    },
    methods: {
        scrollToAnchorPoint(refName) {
            if (this.$route.hash) {
                console.log(this.$route.hash);
                const el = document.querySelector(this.$route.hash);
                console.log(el);
                el && el.scrollIntoView();
            }
        }
    }
}
</script>

<script></script>

<template>
<NavBar />
  <main class="w-full mt-12" id="home">
    <div class="bg-cover h-[50vh] sm:h-[70vh] md:h-[75vh] w-full landing relative">
      <img class="object-cover w-full h-full" src="../assets/hero.png" alt="Hero image" />
      <p class="text-white absolute font-['Roboto'] top-1/2 w-full text-3xl -translate-y-1/2 px-4 md:text-5xl font-medium sm:px-28  md:px-40 lg:px-72 left-0 py-8 text-center backdrop-brightness-50">Local Content Development and Promotions Council</p>
    </div>
    <div class="flex flex-col md:flex-row gap-14 py-14 px-10 md:px-20 items-center md:max-h-[90vh] overflow-hidden">
      <div class="flex-1 overflow-hidden w-full">
        <img class="object-cover w-full h-80 sm:h-96" src="../assets/Rectangle140.svg" alt="Who We Are Image" />
      </div>
      <div class="flex flex-col justify-center flex-1 gap-4 overflow-hidden">
        <h2 class="text-[2rem] font-bold">Who we are</h2>
        <p class="overflow-hidden text-sm">
          Nigerian Local content development and promotions council (NLCDPC) seeks to provide a formidable framework that promotes and encourages local content patronage beyond the oil and gas industry.

          It's scope of operation spans across the oil and gas, agriculture, mining and manufacturing, ICT, Food processing, textile and automobile industries.

          We understand that with an increased patronage in locally produced tools and skilled professionals aimed at servicing very crucial sectors we are sure to expect a such in economic growt and development of the nation.
        </p>
      </div>
    </div>
    <div
      class="flex md:flex-row flex-col items-center px-10 md:px-24 py-8 min-h-[60vh] text-white justify-center md:justify-between w-full bg-cover gap-4 md:gap-1 bg-center relative"
      style=""
    >
      <img class="object-cover absolute top-0 w-full h-full left-0 -z-10 object-center" src="../assets/Rectangle4.svg" alt="mission statement background" />
      <div class="flex flex-col gap-4 missionStatement">
        <h2 class="text-[1.7rem] md:text-[2rem] font-bold text-center">Our Mission Statement</h2>
        <p class="text-sm sm:text-center">
          We seek to provide a formidable framework that promotes and encourages local content investment, promotion and patronage
        </p>
      </div>
      <div class="flex flex-col gap-4 visionStatement">
        <h2 class="text-[1.7rem] md:text-[2rem] font-bold text-center">Our Vision Statement</h2>
        <p class="text-sm sm:text-center">
          To lead a revolution of local professionals and organizations, championing the nations infrastructural and economic development
        </p>
      </div>
    </div>
    <div class="px-10 py-14">
      <h2 class="text-[2rem] text-center font-bold">Why You Should Join Us</h2>
      <div class="relative flex flex-col mt-8">
        <div class="flex items-center justify-between gap-8 w-full">
          <div class="w-40 text-xs lg:w-48 md:absolute md:left-8 lg:left-20 top-4">
            Would be needed for contract bidding and processing
          </div>
          <div class="right-0 lg:right-16 w-40 text-xs lg:w-48 md:absolute top-4">
            It is needed to gain access to loans, grants, investments
          </div>
        </div>
        <div class="flex justify-center my-8">
          <img class="w-1/2" src="../assets/reasons.svg" alt="Member benefit chart">
          <span class="text-[6px] sm:text-xs md:text-base absolute top-1/2 text-white -translate-y-1/3 -translate-x-1/2 left-1/2">Member</span>
        </div>
        <div class="flex items-center justify-between gap-8">
          <div class="bottom-0 left-0 w-40 text-xs lg:w-48 md:absolute md:left-8 lg:left-20">
            Necessary requirement to be recommended by the organization
          </div>
          <div class="bottom-0 right-0 w-40 text-xs lg:w-48 md:absolute lg:right-16">
            You would have access to all membership previledges
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 px-10 md:px-24 py-10 bg-[#2BC241] howToJoinUs">
      <h2 class="text-[2rem] text-center font-bold text-white">How To Join Us</h2>
      <p class="mb-4 text-sm text-center text-white md:mt-8">You can join us with just three steps listed below</p>
      <div class="flex flex-col justify-between gap-6 mb-12 md:flex-row md:gap-4">
        <div class="flex flex-col items-center justify-center gap-2 px-10 py-4 bg-white w-full md:w-1/3 rounded">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            1
          </div>
          <p class="text-sm text-center">
            Click on become a member
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 px-10 py-4 bg-white w-full md:w-1/3 rounded">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            2
          </div>
          <p class="text-sm text-center">
            Register as Individual or company, make payments
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 px-10 py-4 bg-white w-full md:w-1/3 rounded">
          <div class="text-[1rem] font-bold bg-green-200 text-[#2BC241] rounded-full h-12 w-12 grid place-items-center">
            3
          </div>
          <p class="text-sm text-center">
            Upon approval, print your your membership Identification card
          </p>
        </div>
      </div>
      <button class="px-4 py-2 mt-8 font-medium bg-white sm:px-20 cursor-pointer active:scale-95 transition-all hover:bg-[#f0e8e8]"><RouterLink to="/register/individual" class="">Become a Member</RouterLink></button>
    </div>
    <div class="px-10 py-12 pt-20 md:px-24 verifyYourMemberShip" id="verifyMembership">
      <div class="flex flex-col items-start justify-center sm:w-2/3 md:w-1/2 lg:w-2/5">
        <span class="text-2xl font-medium">Verify Your Membership</span>
        <input
          class="w-full px-2 py-2 my-6 text-xs font-semibold border-2 outline-none"
          type="text"
          placeholder="Enter your membership number"
        />
        <button class="px-6 py-2 text-sm text-white bg-[#2BC241] hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all">Submit</button>
      </div>
    </div>
    <div class="bg-cover grid place-items-center px-4 py-14 font-semibold relative">
      <img class="object-cover absolute top-0 w-full h-full left-0 -z-10" src="../assets/Rectangle5.svg" alt="background image" />
      <h1 class="py-8 text-2xl text-center text-white sm:text-3xl md:text-5xl">Together we can <br> achieve great things</h1>
    </div>
    <div class="footer bg-[#2BC241] relative px-10 md:px-24 text-white py-4 pb-10 sm:py-10 sm:pb-20">
      <div class="text-[3rem] font-semibold text-center sm:text-left flex justify-center sm:justify-start">
        <img src="../assets/logo.png" class="h-24 object-cover  bg-white rounded-full overflow-hidden" alt="LOGO">
      </div>
      <p class="absolute left-0 w-full text-sm font-semibold text-center bottom-2">Developed by Ayaweisoft</p>
    </div>
  </main>
</template>
