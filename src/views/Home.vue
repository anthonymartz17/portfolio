<template>
  <div> 
    <div class="home-container">
      <h2>Home</h2>
     <div class="greeting">
      <p>Hi, my name is Antonio Martinez And Im very happy to have you here</p>
     </div>
    </div>
  </div>
</template>

<script>
export default {

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
.greeting{
  margin-top: 1em;
  background: $white;
  height: 60vh;
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;


}
</style>