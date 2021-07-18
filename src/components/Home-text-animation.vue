<template>
  <div class="main-div">
    <div class="text1">Escape</div> 
    <div class="text2"> 
     <span>into amazing experiences</span>
    </div>
  </div>
</template>



<style lang='scss'>
.main-div {
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
}

.text1 {    /* For increasing performance 
                       ID/Class should've been used. 
                       For a small demo 
                       it's okaish for now */
  animation: showup 7s infinite;
}

.text2 {
  width:0px;
  animation: reveal 7s infinite;
}

.text2{
span {
  margin-left:-355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
}
}
</style>