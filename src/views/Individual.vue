<script setup>
    import { ref } from 'vue'
    import Individual1 from "../components/Individual-1.vue"
    import Individual2 from "../components/Individual-2.vue"
    import Individual3 from "../components/Individual-3.vue"
    import Progress from "../components/Progress.vue"

    import { useFetch } from '../composables/useFetch.js'

    const { data, error, loading, doFetch } = useFetch()
    const handleSubmit = async () => {
        console.log("starting");
        console.log(registration)
        await doFetch("https://local-content-server.herokuapp.com/api/v1/submit", registration);
        console.log("fetched", { "data": data.value, "error": error.value, "loading": loading.value })
    }

    const step = ref(1)

    const registration = {
      name: {
              title: '',
              first: '',
              middle: '',
              last: ''
          },
      email: '',

      meta: {
        gender: 'M',
        maritalStatus: 'single',
        religion:'',
        dob: '',
        nationality:'',
        address: '',
        nin: '',
        phone: '',
      },

      referee: {
          name:'',
          applicant_name:'',
          gender:'',
          occupation: '',
          address: '',
          phone: '',
          email: '',
          date: '',
          signature: ''
      },

      declaration: {
          name: '',
          date: '',
          signature: ''
      },

      authority: '',
      state: '',
      status: 'pending',
      kiv: '',
      signature: ''
    }
</script>
  

<template>
    <div class="px-4 sm:px-16 text-sm">
        <Progress :step="step" />
        <form @submit.prevent="handleSubmit" action="" class="">
            <Individual1 :registration="registration" @nextStep="step++" v-if="step == 1" />
            <Individual2 :registration="registration" @prevStep="step--" @nextStep="step++" v-else-if="step == 2" />
            <Individual3 :registration="registration" @prevStep="step--" v-else-if="step == 3" />
        </form>
    </div>
</template>
  
  