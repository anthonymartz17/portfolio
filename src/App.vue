<template>
  <div class="container">
    <section class="sect1">
      <!-- <div class="display-screen"> -->
          <img src="@/assets/sunset-simba.jpg" alt="home page image">
      <!-- </div> -->
    </section>
    <section class="sect2">
      <header>
        <h1> Antonio Martinez</h1>
        
        <p>FRONT-END WEB DEVELOPER</p>
      </header>
      <nav>
         <app-main-nav class="nav-com"></app-main-nav>
         <i class="fab fa-github-square"></i>
      </nav>
    </section>
   
    
  </div>
</template>
<script>

import Mainnav from '../src/components/Main-nav.vue';

export default {
  components:{
    'app-main-nav': Mainnav
  }
}
</script>

<style lang="scss">

.container{
  display:flex;
  flex-direction: column-reverse;
  height: 100vh;
  background: $sunset-brown;
  padding-top: 1em;
  
  
}
.sect1{
  flex: 3;
  // background: $sunset-brown;
  p{
    font: $font-text
  }
  img{
    max-width: 100%;
  }
}

.sect2{
  flex: 1;
  @extend .mobile-logo-flex;
  gap: 1em;
  background: blue;
  padding-right: 1.4em;
 
  h1{
    color:white;
    font: $font-logo;
    text-align: center;
  }
  p{
    font: $font-title-md;
    text-align: center;
  }
}
.nav-com{
  display: none;
}

</style>
