<template>
    <div class="z-10 font-medium fixed top-0 left-0 pt-24 sm:flex items-center justify-center w-full h-full backdrop-blur-sm bg-[#00000047] px-4">
        <div class="flex flex-col items-center justify-center px-4 py-8 pb-20 text-center bg-white sm:px-8 md:px-20 sm:w-1/2 rounded-3xl">
            <span>You have sucessfully generated and ID card and a Complimentary Card for this member</span>
            <div class="flex items-center gap-4 sm:pr-24 mt-6 mb-12 py-2 px-8 rounded-xl bg-[#D9D9D9]">
                <img src="../assets/pdf.svg" alt="pdf">
                <span class="text-sm ">Complimentary card and ID Card.PDF</span>
            </div>
            <Button class="mb-6" text="Download" />
            <button class="block mx-auto underline underline-offset-2">send as email</button>
        </div>
    </div>
</template> 
<script>
    import Button from './Button.vue'
    export default {
        components: {
            Button
        },
    }
</script>
  