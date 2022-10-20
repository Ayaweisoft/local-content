<script setup>
    import { useFetch } from '../composables/useFetch.js'
    import { ref } from 'vue'

    const email =  ref(null)
    const password =  ref(null)

    const { data, error, loading, doFetch } = useFetch()
    const handleSubmit = async () => {
        console.log("starting")
        console.log({email, password})
        await doFetch("http://localhost:4000/api/user/login", {email: email.value, password: password.value});
        console.log("fetched", { "data": data.value, "error": error.value.message, "loading": loading.value })
    }
</script>

<template>
    <div class="flex justify-center px-4 sm:items-center flex-col h-screen bg-[url('https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')] bg-cover bg-center">
        <h1 class="text-5xl mb-8 text-center text-white py-4">LOGIN</h1>
        <form class="flex flex-col gap-1 md:w-1/2 lg:w-1/3" @submit.prevent="handleSubmit">
            <input v-model="email" class="border outline-none rounded p-4" type="email" placeholder='Email' autocomplete="username" />
            <input v-model="password" class="border outline-none rounded p-4" type="password" placeholder='Password' autocomplete="current-password" />
            <input class="outline-none rounded my-4 p-4 bg-[#2BC241] text-white hover:bg-[#1ba330] cursor-pointer active:scale-95 transition-all" type="submit" placeholder='Submit' />
        </form>
    </div>
</template>
  