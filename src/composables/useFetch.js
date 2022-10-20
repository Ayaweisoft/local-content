// fetch.js
import { ref } from 'vue'

export const useFetch = () => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const doFetch = async(url, body) => {
        error.value = null;
        loading.value = true;

        
        const payload = body ? {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        } : {};

        try {
            const response = await fetch(url, payload);
            const json = await response.json();
            
            if (!response.ok) {
                console.log("not ok", json)
                error.value = json;
                loading.value = false;
            }
            if (response.ok) {
                console.log("ok")
                data.value = json;
                loading.value = false;
            }
        } catch (err) {
            console.log('error', err)
            loading.value = false;
            error.value = err;
        }
    }
    return { data, error, loading, doFetch }
}
