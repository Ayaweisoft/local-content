<script setup>
  import { ref } from 'vue'
  import Company1 from "../components/Company-1.vue";
  import Company2 from "../components/Company-2.vue";
  import Company3 from "../components/Company-3.vue";
  import Progress from "../components/Progress.vue"
  import { useFetch } from '../composables/useFetch.js'

  const step = ref(1)

  const { data, error, loading, doFetch } = useFetch()
  const handleSubmit = async () => {
      console.log("starting");
      console.log(registration)
      await doFetch("https://local-content-server.herokuapp.com/api/v1/submit", registration);
      console.log("fetched", { "data": data.value, "error": error.value, "loading": loading.value })
  }


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

      organization: {
          address: '',
          email: '',
          auth: {
                  model: 'CAC',
                  number: ''
              },
          contactPerson: '',
          whatsapp: ''
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
      <Company1 :registration="registration" @nextStep="step++" v-if="step == 1" />
      <Company2 :registration="registration" @prevStep="step--" @nextStep="step++" v-else-if="step == 2" />
      <Company3 :registration="registration" @prevStep="step--" v-else-if="step == 3" />
    </form>
  </div>
</template>
  
  