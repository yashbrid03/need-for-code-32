<template>
<div class="container ">
<div class="row">
    <h1 class="text-center text-white">Login</h1>
    <aside class="col-sm-4"></aside>
	<aside class="col-sm-4">
        
        <div class="card bg-secondary ">
            <img src="../assets/dp.jpg" class="rounded mx-auto d-block mt-5" alt="...">
            <article class="card-body">
                <h4 class="card-title mb-4 mt-1  text-center">Welcome</h4><form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label class=" mt-3 h5">Your email</label>
                        <input name="" class="form-control mt-2" placeholder="Email" type="email" v-model="email" required>
                    </div> 
                    <div class="form-group">
                        <label class=" mt-3 h5 justify-start">Your password</label>
                        <input class="form-control mt-2" placeholder="******" type="password" v-model="password" required>
                    </div> 
                    <div class="form-group flex justify-center">
                        <button type="submit" class="btn btn-primary btn-block mt-4 justify-center"> Login  </button>
                    </div>                                                          
                </form>
            </article>
        </div> 
	</aside>
    <aside class="col-sm-4"></aside> 
</div> 
</div> 

<br>  
<div v-if="error">{{ error }}</div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const email = ref('')
        const password = ref('')
        const error = ref(null)
        const store = useStore()
        const handleSubmit = async () => {
            try {
                await store.dispatch('login', {
                    email: email.value,
                    password: password.value
                })
                await store.dispatch('type')
                console.log("successfull");
            }
            catch (err) {
                error.value = err.message
            }
        }
        return { handleSubmit, email, password, error}
    }
}
</script>

<style>

</style>