<script setup>
  import { ref } from 'vue'
  import Company1 from "../components/Company-1.vue";
  import Company2 from "../components/Company-2.vue";
  import Company3 from "../components/Company-3.vue";
  import Progress from "../components/Progress.vue"

  const step = ref(1)
</script>
  
<template> 
  <div  class="my-12 overflow-hidden flex justify-center">
    <!-- <img src="../assets/progress-1.svg" alt="progress bar"> -->
    <Progress :step="step" />
  </div>
  <form action="" class="px-4 sm:px-16 text-sm">
    <Company1  @nextStep="step++" v-if="step == 1" />
    <Company2  @prevStep="step--" @nextStep="step++" v-else-if="step == 2" />
    <Company3  @prevStep="step--" v-else-if="step == 3" />
  </form>
</template>
  
  