<template>
  <div> 
    <div class="home-container">
      <h2>Home</h2>
      <div class="greeting-card">
        <transition name="slideUp" appear>
          <div class="greeting-card-img"></div>
        </transition>
       <transition name="slideLeft" appear>
        <div class="greeting-card-hi">
          <div>
            <transition name="unhideUp" appear>
           <p >Hi, I am</p>
           </transition>
          </div>
        <div>
          <transition name="unhideDown" appear>
           <h2>Antonio</h2>
           </transition>
        </div>
        </div>
        </transition>
        <transition name="growX" appear>
          <div class="greeting-card-text">
            <div>
            <transition name="unhideUpLast" appear>
            <p>Front-end dev</p>
            </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

  props:['name'],
  methods:{

  },
  
 destroyed(){

      this.$emit('toggleTrue',this.bigName = true)
 },
 created(){
    
       this.$emit('toggleFalse',this.bigName = false)
 },
  data(){
    return{
      img:'@/assets/images/saona.jpg',
      bigName:null
      
    }
  }

}
</script>
<style lang='scss'>

// transitions

.slideUp-enter{
  transform: translateY(150px)
}
.slideUp-enter-to{
  transform: translateX(0)
}
.slideUp-enter-active{
  transition: all .6s  ease;
}

.growX-enter{
  transform: scaleX(0.8);
 
}
.growX-enter-to{
  transform: scaleX(1);
}
.growX-enter-active{
  transition: all .6s ease;
}

.slideLeft-enter{
  transform: translateX(150px);
}
.slideLeft-enter-to{
  transform: translateX(0);
}
.slideLeft-enter-active{
  transition: all .6s ease;
}

.unhideUp-enter{
  transform: translateY(80px);
}
.unhideUp-enter-to{
  transform: translateX(0);
}
.unhideUp-enter-active{
  transition: all .4s .5s ease-in-out;
}


.unhideDown-enter{
  transform: translateY(-80px);
}
.unhideDown-enter-to{
  transform: translateX(0);
}
.unhideDown-enter-active{
  transition: all .4s .5s ease-in-OUT;
}

.unhideUpLast-enter{
  transform: translateY(80px);
}
.unhideUpLast-enter-to{
  transform: translateX(0);
}
.unhideUpLast-enter-active{
  transition: all .4s .7s ease-in-OUT;
}







.home-container{
  // background: red;
  margin: 2em 3em;

   h2{
       font:$font-title-lg;
       color: $dark;
    
   }

}
.greeting-card{
  display: flex;
  gap: 1em;
  margin-top: 1em;
  height: 60vh;
  width: 100%;
   position: relative;

&-hi{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  text-align: start;
  padding-left: 4em;
  right: -50px;
  position: absolute;
  background: $primary;
  width: 50%;
  height: 35%;
  // clip-path: polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 
 div{
 
   overflow: hidden;
   border-top: .5px solid rgba(255, 255, 255, 0.384);
 }
p{
   font:$font-greeting-hi;
   color: $white;
 
   
}
h2{
  font:$font-greeting-name;
  color: $white;
 
//  background: $dark;

}
 
}
&-img{
  box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1;
  margin-left: 3em;
  background-image: url(../assets/images/saona.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 40%;
  width: 45%;
  position: relative;

  
 
  
}
&-text{
 
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2em;
  margin-bottom: 2em;
  position: absolute;
  width: 100%;
  height: 30%;
  background: $dark;
  font:$font-title-lg;
  color: $dark;
  // clip-path: polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%);
 

 div{
   overflow: hidden;
    border-bottom: .5px solid $white;
 }
 p{
   color: $white;
   font: $font-logo-name;
  

  
 }

}
}
</style>


