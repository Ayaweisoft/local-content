<script setup>
    import Interswitch from 'vue-interswitch'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const emit = defineEmits(['submit_form'])
    const props = defineProps(['registration'])

    const onCallback = (response) => {
        console.log('resp', response)
        if (response.resp == '00') {
            props.registration.payment.paymentID = response.txnref;
            props.registration.payment.amount = response.amount;
            console.log('props.reg ', props.registration)
            emit('submit_form') 
        } else {
            router.push('/register/individual')
        }
    }
    const onError = (err) => { 
      console.log(err)
    }
</script>

<template>
        <Interswitch  :debug="true" @error="onError"
            merchantCode='MX46047'
            payItemID='Default_Payable_MX46047'
            customerEmail='johndoe@gmail.com'
            redirectURL="http://localhost:5173"
            currency=566
            text="Register"
            mode='LIVE'
            :transactionReference="Date.now().toString()" 
            :amount=10 
            class="custom, bootstrap or tailwind class here"
            :callback="onCallback"
        />
</template>