<script setup>
    import { ref } from 'vue'
    import Individual1 from "../components/Individual-1.vue"
    import Individual2 from "../components/Individual-2.vue"
    import Individual3 from "../components/Individual-3.vue"
    import Progress from "../components/Progress.vue"

    const step = ref(1)
    const registration = {
        name: ref(null),
        email: ref(null),
        street: ref(null),
        city: ref(null),
        state: ref(null),
        numtickets: ref(null),
        shirtsize: ref(null)
      }
</script>
  

<template>
    <div class="my-12">
        <div  class="overflow-hidden flex justify-center">
            <!-- <img src="../assets/progress-1.svg" alt="progress bar"> -->
            <Progress :step="step" />
        </div>
        <form action="" class="px-4 sm:px-16 text-sm">
            <Individual1 @nextStep="step++" v-if="step == 1" />
            <Individual2 @prevStep="step--" @nextStep="step++" v-else-if="step == 2"/>
            <Individual3 @prevStep="step--" v-else-if="step == 3" />
        </form>
    </div>
</template>
  
  