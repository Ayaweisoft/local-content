<script setup>
  import { ref } from 'vue'
  import Company1 from "../components/Company-1.vue";
  import Company2 from "../components/Company-2.vue";
  import Company3 from "../components/Company-3.vue";
  import Progress from "../components/Progress.vue"

  const step = ref(1)
</script>
  
<template> 
  <div class="px-4 sm:px-16 text-sm">
    <Progress :step="step" />
    <form action="" class="">
      <Company1  @nextStep="step++" v-if="step == 1" />
      <Company2  @prevStep="step--" @nextStep="step++" v-else-if="step == 2" />
      <Company3  @prevStep="step--" v-else-if="step == 3" />
    </form>
  </div>
</template>
  
  