<template>
  <div>
    <section id="timer">
        <div class="container-fluid" style="height: 100vh;">
            <div class="row justify-content-center text-center align-items-center" style="height: 100vh;">
                <div class="col-md-10">
                    <h2 class="display-2">
                        <span class="text-white">Our next event starts in</span>
                    </h2>
                    <br>
                    <div class="row justify-content-center text-center" id="days"> 
                    <div class="col-md-3  text-warning " style="height: 100px; width: 100px";><span class="large-text fw-bold font-size-50px " style="font-size: 30px;" id="day-no">4</span><br>
                            <span style="font-size: 20px;" id="day">Days</span></div>
                        <div class="col-md-3  text-warning  " style="height: 100px; width: 100px";><span class="large-text fw-bold font-size-50px " style="font-size: 30px;" id="hr-no">15</span><br>
                            <span style="font-size: 20px;" id="hr">Hours</span></div>
                        <div class="col-md-3  text-warning" style="height: 100px; width: 100px";><span           class="large-text fw-bold font-size-50px " style="font-size: 30px;" id="min-no">28</span><br>
                            <span style="font-size: 20px;" id="min">Minutes</span></div> 

                        <div class="col-md-3 text-warning" style="height: 100px; width: 100px";><span class="large-text fw-bold font-size-50px " style="font-size: 30px;" id="sec-no">16</span><br>
                            <span style="font-size: 20px;" id="sec">Seconds</span></div> 
                           
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <section id="types">
        <div class="container-fluid">
            <div class="row justify-content-center text-center p-5 bg-muted">
                <div class="col-md-10">
                  <h6 class="display-4 mb-3 fw-normal" id="type-h">Types of events</h2>
                  
                </div>
            </div>
                <div class="row text-center">
                  <div class="col-md-4 col-10  "><i class="fa fa-desktop fa-5x  text-dark pb-3"></i>
                    <h1  id="type-1" class="fw-light p-3 ">Technical Events</h1>
                    
                  </div>
                <div class="col-md-4 col-10 mb-3 ml-3">
                  <i class="fa fa-baseball-ball fa-5x  text-dark pb-3" ></i>
                  <h1 id="type-2" class="fw-light p-3">Sport Events</h1>
                  
                </div>
                <div class="col-md-4 col-10 mb-3 ml-3">
                  <i class="fa fa-grin-stars fa-5x  text-dark pb-3"></i>
                  <h1 id="type-3" class="fw-light p-3">Cultural Events</h1>
                  
                </div>
                
                <div class="col-md-4 col-10 mb-3 ml-3 p-3"><i class="fa fa-dice fa-5x  text-dark pb-3"></i>
                  <h1 id="type-4" class="fw-light p-2">Gaming Events</h1>
                  
                </div>
                <div class="col-md-4 col-10 mb-3 ml-3 p-3"><i class="fa fa-hand-holding-heart fa-5x  text-dark pb-3"></i>
                  <h1 id="type-5" class="fw-light p-2 ">Social Events</h1>
                  
                </div>
                <div class="col-md-4 col-10 mb-3 ml-3 p-3"><i class="fa fa-music fa-5x  text-dark pb-3"></i>
                  <h1 id="type-6" class="fw-light p-2">Musical Events</h1>
                  
                </div>
              </div>
              
        </div>
    </section>
    
     <section id="ue">
        <div class="container-fluid " style="height: 200vh;">
            <div class="row justify-content-center text-center align-items-center" style="height: 50vh;">
                <div class="col-md-10"><h2 class="display-4 mb-4 fw-normal" id="up-event">Upcoming Events</h2>
                    <div class="row  justify-content-center text-center align-items-center" style="height: 60vh;">
                        <div class="col-md-3 col-sm-3 mb-2" id="bigcol" style="height: 200px; width: 170px; ">
                            <div class="row text-center align-items-center">
                                <div class="col-md-5" id="smallcol" style="height: 100px; width: 85px;">
                                    <div class="mt-4 ">1st August</div>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center align-items-center">
                                <div class="col-md-5 mt-4 mx-5 ">Traditional Day</div>
                            </div>
                        </div>
                        <div class="col-md-3 bg-muted mx-3 col-sm-6 mb-3 " id="desc-col" style="height: 200px; width: 350px; ">Wear your sarees and kurtas flaunt your indianess be you be desi </div>
                        

                        <div class="col-md-3  col-sm-3 mb-2" id="bigcol" style="height: 200px; width: 170px; ">
                            <div class="row  text-center align-items-center">
                            <div class="col-md-5 " id="smallcol" style="height: 100px; width: 85px;">
                                <div class="mt-4">1st September</div> 
                            </div>
                            <div class="row justify-content-center text-center align-items-center">
                                <div class="col-md-5 mt-4 mx-5 ">Ganpati Utsav</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 bg-muted mx-3 col-sm-6 mb-3"id="desc-col" style="height: 200px; width: 350px; "><div></div>Welcome Ganesha with Dhol and Tashas</div>
                    </div>
                    <div class="row  justify-content-center text-center align-items-center" style="height: 60vh;">
                        <div class="col-md-3  col-sm-3 mb-2" id="bigcol" style="height: 200px; width: 170px; ">
                            <div class="row text-center align-items-center">
                                <div class="col-md-5 " id="smallcol" style="height: 100px; width: 85px;">
                                    <div class="mt-4 ">25th September</div>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center align-items-center">
                                <div class="col-md-5 mt-4 mx-5 ">Cric-o-mania</div>
                            </div>
                        </div>
                        <div class="col-md-3 bg-muted mx-3 col-sm-6 mb-3 "id="desc-col" style="height: 200px; width: 350px; ">It's cricket time</div>
                        

                        <div class="col-md-3 col-sm-3 mb-2" id="bigcol" style="height: 200px; width: 170px; ">
                            <div class="row  text-center align-items-center">
                            <div class="col-md-5 " id="smallcol" style="height: 100px; width: 85px;">
                                <div class="mt-4">20th October</div> 
                            </div>
                            <div class="row justify-content-center text-center align-items-center">
                                <div class="col-md-5 mt-4 mx-5 ">Diwali Event</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 bg-muted mx-3 col-sm-6 mb-3 " id="desc-col" style="height: 200px; width: 350px; "><div>Let's celebrate the most prosperous festival of the year</div></div>
                    </div>
                    <div class="row  justify-content-center text-center align-items-center" style="height: 60vh;">
                        <div class="col-md-3  col-sm-3 mb-2"id="bigcol" style="height: 200px; width: 170px; ">
                            <div class="row text-center align-items-center">
                                <div class="col-md-5 " id="smallcol" style="height: 100px; width: 85px;">
                                    <div class="mt-4 ">5th September</div>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center align-items-center">
                                <div class="col-md-5 mt-4 mx-5 ">Hackathon</div>
                            </div>
                        </div>
                        <div class="col-md-3 bg-muted mx-3 col-sm-6 mb-3 " id="desc-col"style="height: 200px; width: 350px; ">aldnaldl adknl adnal kndl nlad</div>
                        

                        <div class="col-md-3  col-sm-3 mb-2" id="bigcol"style="height: 200px; width: 170px; ">
                            <div class="row  text-center align-items-center">
                            <div class="col-md-5 " id="smallcol" style="height: 100px; width: 85px;">
                                <div class="mt-4">3rd December</div> 
                            </div>
                            <div class="row justify-content-center text-center align-items-center">
                                <div class="col-md-5 mt-4 mx-5 ">code-o-fiesta</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 bg-muted mx-3 col-sm-6 mb-3 "id="desc-col" style="height: 200px; width: 350px; "><div>Coding competition</div></div>
                    </div>
                </div>
            </div>
             
        </div>
    </section></div>
</template>

<script>
export default {

}
</script>

<style>
 #timer{
     background-image: url('images/timerbackground.jpg');
     background-repeat: no-repeat;
     background-size: cover;
} 
#nav{
    background-color: rgb(81, 57, 48)
}
#smallcol{
    background-color: black;
    color: white;
}

#bigcol{
    background-color: lightgray;
}
/* #desc-col{
    background-color: rgb(113, 144, 144);
} */

#day-no{
    color: rgb(196, 176, 65);
}

#day{
    color: rgb(196, 176, 65);
}


#hr-no{
    color: rgb(196, 176, 65);
}

#hr{
    color: rgb(196, 176, 65);
}


#min-no{
    color: rgb(196, 176, 65);
}

#min{
    color: rgb(196, 176, 65);
}


#sec-no{
    color: rgb(196, 176, 65);
}

#sec{
    color: rgb(196, 176, 65);
}

#type-h{
    color: brown;

}

#type-1{
    color: rgb(27, 143, 143);
}

#type-2{
    color: rgb(27, 143, 143);
}

#type-3{
    color: rgb(27, 143, 143);
}

#type-4{
    color: rgb(27, 143, 143);
}

#type-5{
    color: rgb(27, 143, 143);;
}

#type-6{
    color: rgb(27, 143, 143);
}

#up-event{
    color: brown;
}



/* #footer {
    background: #ff5f6d;
    background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371);
    background: linear-gradient(to right, #ff5f6d, #ffc371);
    min-height: 100vh;
  }
  
  #button-addon1 {
    color: #ffc371;
  }
  
  i {
    color: #ffc371;
  }
  
  .form-control::placeholder {
    font-size: 0.95rem;
    color: #aaa;
    font-style: italic;
  }
  
  .form-control.shadow-0:focus {
    box-shadow: none;
  } */

</style>