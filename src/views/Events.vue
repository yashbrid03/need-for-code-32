<template>
  <div class="container">
    <div class="card-group">
  <div v-for="item in tlist" :key='item.name' class="card ">
    <img class="card-img-top" src="../assets/dp.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p class="card-text">{{item.c_name}}</p>
      <p class="card-text">{{item.desc}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{item.date}} {{item.time}}</small>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core';
import { computed } from 'vue'
export default {
    setup(){
        const store = useStore();
        onMounted(async ()=>{
            await store.dispatch("getactiveeventlist")
        })
        return{
            tlist:computed(()=> store.state.tapprovedlist)
        }
    }
}
</script>

<style>

</style>