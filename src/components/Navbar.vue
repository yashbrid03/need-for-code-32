<template>
  <nav class="fixed-top">
        <div class="navbar navbar-expand-md" id="nav">
            <a href="" class="mx-3"><i class="fa fa-calendar-check text-light fa-2x "></i></a>
            <button class="navbar-toggler bg-light" data-bs-toggle="collapse" data-bs-target="#nav">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse justify-content-end" id="nav">
                
                <ul class="navbar-nav">  
                <li><a class="nav-link text-light text-uppercase fw-bold" href="">Home</a></li>
              <li><a class="nav-link text-light text-uppercase fw-bold mx-3"  href="#types">Types</a></li>
               <li><a class="nav-link text-light text-uppercase fw-bold mx-3" href="#ue">Upcoming Events</a></li>
               <router-link class="nav-link" to="/login">
               <li ><a class="nav-link text-light text-uppercase fw-bold mx-3  " href="">Login</a>
                 </li>
               </router-link>
                 
               </ul>
               </div>
               
          
           
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>