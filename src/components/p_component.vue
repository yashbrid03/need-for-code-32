<template>
<div class="px-5 me-5 ms-4 overflow">
    <h1 class="text-white">Waiting List</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">Description</th>
                <th scope="col">Committee</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Approve</th>
                <th scope="col">Reject</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in wlist" :key='item.name' >
                <td class="bg-warning" >{{item.name}}</td>
                <td class="bg-warning" >{{item.desc}}</td>
                <td class="bg-warning" >{{item.c_name}}</td>
                <td class="bg-warning" >{{item.date}}</td>
                <td class="bg-warning" >{{item.status}}</td>
                <td class="bg-warning" ><button class="btn btn-success" @click="approve(item.name, item.desc, item.date,item.time)">Approve</button></td>
                <td class="bg-warning" ><button class="btn btn-danger" @click="reject(item.name, item.desc, item.date,item.time)">Reject</button></td>
            </tr>
            <tr  v-for="item in wlist2" :key='item.name' >
                <td class="bg-warning" >{{item.name}}</td>
                <td class="bg-warning" >{{item.desc}}</td>
                <td class="bg-warning" >{{item.c_name}}</td>
                <td class="bg-warning" >{{item.date}}</td>
                <td class="bg-warning" >{{item.status}}</td>
                <td class="bg-warning" ><button class="btn btn-success" @click="approve(item.name, item.desc, item.date,item.time)">Approve</button></td>
                <td class="bg-warning" ><button class="btn btn-danger" @click="reject(item.name, item.desc, item.date,item.time)">Reject</button></td>
            </tr>
        </tbody>
    </table>

    <h1 class="text-white">Approved List</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">Description</th>
                <th scope="col">Committee</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in alist" :key='item.name' >
                <td class="success" >{{item.name}}</td>
                <td class="success" >{{item.desc}}</td>
                <td class="success" >{{item.c_name}}</td>
                <td class="success" >{{item.date}}</td>
                <td class="success" >{{item.status}}</td>
            </tr>
            <tr  v-for="item in alist2" :key='item.name' >
                <td class="success" >{{item.name}}</td>
                <td class="success" >{{item.desc}}</td>
                <td class="success" >{{item.c_name}}</td>
                <td class="success" >{{item.date}}</td>
                <td class="success" >{{item.status}}</td>
            </tr>
        </tbody>
    </table>

    <h1 class="text-white">Rejected List</h1>
    <table class="table ">
        <thead class="sticky-top table-dark">
            <tr >
                <th scope="col">Event</th>
                <th scope="col">Description</th>
                <th scope="col">Committee</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody >
            <tr  v-for="item in rlist" :key='item.name' >
                <td class="danger" >{{item.name}}</td>
                <td class="danger" >{{item.desc}}</td>
                <td class="danger" >{{item.c_name}}</td>
                <td class="danger" >{{item.date}}</td>
                <td class="danger" >{{item.status}}</td>
            </tr>
            <tr  v-for="item in rlist2" :key='item.name' >
                <td class="danger" >{{item.name}}</td>
                <td class="danger" >{{item.desc}}</td>
                <td class="danger" >{{item.c_name}}</td>
                <td class="danger" >{{item.date}}</td>
                <td class="danger" >{{item.status}}</td>
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
        const reject = async (id, desc, date, time)=>{
            await store.dispatch("rejectevent",{id, desc, date, time})
        }
        const approve = async(id, desc, date, time)=>{
            await store.dispatch("approveevent",{id, desc, date, time})
        }
        onMounted(async ()=>{
            await store.dispatch("geteventlistprincipal")
        })
        return{
            reject,approve,
            wlist:computed(() => store.state.pwaitinglist),
            alist:computed(() => store.state.papprovedlist),
            rlist:computed(()=> store.state.prejectedlist),
            wlist2:computed(() => store.state.pwaitinglist2),
            alist2:computed(() => store.state.papprovedlist2),
            rlist2:computed(()=> store.state.prejectedlist2)
        }
    }
}
</script>

<style>

</style>