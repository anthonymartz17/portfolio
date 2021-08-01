<template>
  <div> 
    <div class="home-container">
      <h2>Home</h2>
      <div class="greeting-card">
        <div class="greeting-card-img">
         </div>
         <div class="greeting-card-hi">
           <p >Hi, I am</p>
           <h2>Antonio</h2>
         </div>
        <div class="greeting-card-text">
          <p>Front-end dev</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  
 destroyed(){
      this.jumboName = true
      
 },
 created(){
      this.jumboName = false
      
 },
  data(){
    return{
      img:'@/assets/images/saona.jpg',
      jumboName:false
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
  // background: $primary;
  height: 60vh;
  width: 100%;
  // box-shadow: $bx-shadow;
  // border-radius: 5px;
   position: relative;
&-hi{
  text-align: center;
  top: 30px;
  right: 0;
  position: absolute;
  background: $white;
  width: 60%;
  height: 40%;
  clip-path: polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%);
  box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;

p{
   font:$font-greeting-hi;
   color: $light-dark;
   text-align: start;
   padding-left: 2em;
  //  background:red;
}
h2{
  font:$font-greeting-name
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
  background: $primary;
  font:$font-title-lg;
  color: $dark;
  // clip-path: polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%);

 
 p{
   color: $white;
   font: $font-logo-name;
   border-bottom: .5px solid $white;

  
 }

}
}
</style>