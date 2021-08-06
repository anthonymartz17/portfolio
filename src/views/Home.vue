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

  props:['name'],
  methods:{

    // toggleHugeName(){
    //   if (this.bigName === true){
        
    //   }else{
      
    //   }
    // }

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
 
p{
   font:$font-greeting-hi;
   color: $white;
   
}
h2{
  font:$font-greeting-name;
  color: $white;
 border-top: .5px solid rgba(255, 255, 255, 0.384);
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

 
 p{
   color: $white;
   font: $font-logo-name;
   border-bottom: .5px solid $white;

  
 }

}
}
</style>


