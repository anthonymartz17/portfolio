<template>
  <div> 
    <div class="home-container">
      <h2>Home</h2>
      <div class="greeting-card">
        <div class="greeting-card-img">
          <div class="overlay"></div>
         </div>
        <div class="greeting-card-text">
         <h3>Hi, my name is Antonio Martinez And I'm glad to have you here</h3>
         <!-- <app-home-text-animation></app-home-text-animation> -->
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// import Hometextanimation from '../components/Home-text-animation.vue'
export default {
  // components:{
  //       'app-home-text-animation': Hometextanimation
  // },

  data(){
    return{
      img:'@/assets/images/saona.jpg'
    }
  }

}
</script>

<style lang='scss'>
.home-container{

  padding: 2em 3em;
   height: 74vh;

   h2{
       font:$font-title-lg;
       color: $dark;
       align-self: flex-start;
   }

}
.greeting-card{
  display: flex;
  gap: 1em;
  margin-top: 1em;
  background: $logo-bg;
  height: 60vh;
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
   position: relative;

&-img{
  // background: $dark;
  background-image: url(../assets/images/saona.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 60%;
  width: 55%;
  position: relative;

  
  .overlay{
    position: absolute;
    // background: rgba(0, 0, 0, 0.26);
    
    width: 100%;
    height: 100%;
  }
  
}
&-text{
  display: flex;
  justify-content:center;
  align-items: center;
  position: absolute;
  right: 0px;
  width: 65%;
  height: 100%;
  flex: 1;
  background: $white;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  font:$font-title-lg;
  color: $dark;

  
  h3{
    width: 65%;
    line-height: 1.6;
  }

}
}
</style>