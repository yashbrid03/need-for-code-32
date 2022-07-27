<template>
<div class="container">
    <form class="row g-3 pt-4 ps-5 pe-5 h5" @submit.prevent="addevent">
        <h1 class="text-white">{{c_name}}</h1>
        <hr>
    <h2 class="text-white">Add Event</h2>
    <div class="col-md-2">
        <div class="row mb-3">
            <div class="">
                <input type="text" class="form-control" id="Desc" v-model="eventname" placeholder="Event Name." required>
            </div>
        </div>
    </div>
    <div class="col-md-7">
        <div class="  row mb-3">    
            <div class="">
                <input type="text" class="form-control" id="price" v-model="eventdesc" placeholder="Event Description" required>
            </div>
        </div>
    </div>
    <div class="col-md-2">
        <div class="  row mb-3">    
            <div class="">
                <input type="time" class="form-control" id="price" v-model="eventtime" placeholder="Time" required>
            </div>
        </div>
    </div>
    <div class="col-md-2">
        <div class="  row mb-3">    
            <div class="">
                <input type="date" class="form-control" id="price" v-model="eventdate" placeholder="Date" required>
            </div>
        </div>
    </div>
    <div class="col-md-1">
        <div class="  row mb-2">                    
            <div class="">
                <button type="submit" class="form-control btn btn-primary">ADD</button>
               
            </div>
        </div>
    </div>
    <div class="col-md-1">
        <div class="  row mb-2">                    
            <div class="">
                <button @click="handleClick" class="btn btn-danger">Signout</button>
            </div>
        </div>
    </div>
    </form>
    <hr>
    <c_component/>
</div>  
</template>

<script>
import { useStore } from 'vuex'
import {  ref , computed} from 'vue'
import { useRouter } from 'vue-router'
import c_component from '../components/c_component.vue'
export default {
    components:{
        c_component
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        const eventname = ref('')
        const eventdesc = ref('')
        const eventtime = ref('')
        const eventdate = ref('')
        const error = ref(null)
        const handleClick = async () => {
            try{
                await store.dispatch('logout')
                router.push('/')
            }
            catch (err) {
                error.value = err.message
            }
        }

        const addevent = async ()=>{
            try{
                console.log(eventname.value)
                await store.dispatch('addeve',{
                    eventname:eventname.value,
                    eventdesc:eventdesc.value,
                    eventtime:eventtime.value,
                    eventdate:eventdate.value
                })
            }
            catch(err){
                error.value = err.message
            }
        }

        return{handleClick, addevent, eventname,eventdesc,eventtime,eventdate,c_name:computed(()=> store.state.cname)}
    }
}
</script>

<style>

</style>