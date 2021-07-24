<template>
  <div> 
    <div class="home-container">
      <h2>Home</h2>
      <div class="greeting-card">
        <div class="greeting-card-img">
          <div class="overlay"></div>
         </div>
        <div class="greeting-card-text">
          <p >Hello!</p>
          <p>I'm Antonio, a front-end dev in NY.</p>
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
  // background: red;
  margin: 2em 3em;

   h2{
       font:$font-title-lg;
       color: $dark;
      //  align-self: flex-start;
   }

}
.greeting-card{
  display: flex;
  gap: 1em;
  margin-top: 1em;
  background: $logo-bg;
  height: 60vh;
  width: 100%;
  box-shadow: $bx-shadow;
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
  flex-direction: column;
  justify-content:center;
  align-items: flex-start;
  padding-left: 7em;
  position: absolute;
  right: 0px;
  width: 65%;
  height: 100%;
  flex: 1;
  background: $white;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  font:$font-title-lg;
  color: $dark;


}
}
</style>