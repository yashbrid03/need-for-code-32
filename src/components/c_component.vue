<template>
<div class="px-5 me-5 ms-4 overflow">
    <h1 class="text-white">Waiting List</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in wlist" :key='item.name' >
                <td class="bg-warning" >{{item.name}}</td>
                <td class="bg-warning" >{{item.desc}}</td>
                <td class="bg-warning" >{{item.date}}</td>
                <td class="bg-warning" >{{item.status}}</td>
            </tr>
        </tbody>
    </table>
<hr>
    <h1 class="text-white">Approved List</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in alist" :key='item.name' >
                <td class="success" >{{item.name}}</td>
                <td class="success" >{{item.desc}}</td>
                <td class="success" >{{item.date}}</td>
                <td class="success" >{{item.status}}</td>
            </tr>
        </tbody>
    </table>
<hr>
    <h1 class="text-white">Rejected List</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in rlist" :key='item.name' >
                <td class="danger" >{{item.name}}</td>
                <td class="danger" >{{item.desc}}</td>
                <td class="danger" >{{item.date}}</td>
                <td class="danger" >{{item.status}}</td>
            </tr>
        </tbody>
    </table>
<hr>
    <h1 class="text-white">Dates booked by other committee</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">committee</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in tlist" :key='item.name' >
                <td class="success" >{{item.name}}</td>
                <td class="success" >{{item.c_name}}</td>
                <td class="success" >{{item.desc}}</td>
                <td class="success" >{{item.date}}</td>
                <td class="success" >{{item.status}}</td>
            </tr>
        </tbody>
    </table>
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
            await store.dispatch("geteventlist")
        })
        return{
            wlist:computed(() => store.state.waitinglist),
            alist:computed(() => store.state.approvedlist),
            rlist:computed(()=> store.state.rejectedlist),
            tlist:computed(()=> store.state.tapprovedlist)
        }
    }
}
</script>

<style>
.danger{
    background-color :rgba(228, 15, 61, 0.29);
    color:white;
}

.success{
    background-color :rgba(58, 237, 88, 0.312);
    color:white;
}
.table>:not(caption) > * > *  {
    background-color:initial;
}
.table>:not(caption) > * > .success  {
    background-color :rgba(58, 237, 88, 0.827);
}
.table>:not(caption) > * > .danger  {
    background-color :rgba(226, 24, 88, 0.94);
}
thead{
    background-color: rgb(42, 46, 49);
}
</style>