<template>
  <div class="container ">
    <h1 class="text-white">Welcome, Principal Sir </h1>
    
  <button @click="handleClick" class="btn btn-danger">Signout</button>
  <hr>
  <p_component />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed} from 'vue'
import { useRouter } from 'vue-router'
import p_component from '../components/p_component.vue'
export default {
    components:{
        p_component
    },
    setup() {
    const store = useStore()
    const router = useRouter()
    const handleClick = async () => {
      try{
        await store.dispatch('logout')
        router.push('/login')
      }
      catch (err) {
        console.log(err.message)
      }
    }
    return { handleClick, user: computed(() => store.state.user), }
  }
}
</script>

<style>

</style>