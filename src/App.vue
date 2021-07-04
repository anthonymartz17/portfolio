<template>
  <div class="container">
    
    <section class="sect1">
      <!-- <div class="display-screen"> -->
          <img src="@/assets/sunset-simba.jpg" alt="home page image">
      <!-- </div> -->
      <app-im-animation class="animation"></app-im-animation>
    </section>
    <section class="sect2">
      <header>
      <i class="fas fa-bars fa-2x"></i>
         
        <h1> Antonio Martinez</h1>
        
        <p>FRONT-END WEB DEVELOPER</p>
      </header>
      <nav>
         <app-main-nav class="nav-com"></app-main-nav>
      
      </nav>
    </section>
   <footer>
     
       <a href="#"><i class="far fa-envelope fa-2x"></i></a>
      <a href="#"><i class="fab fa-github fa-2x"></i></a>
     
   </footer>
   
    
  </div>
</template>
<script>

import Mainnav from '../src/components/Main-nav.vue';
import IamAnimation from './components/IamAnimation.vue';

export default {
  components:{
    'app-main-nav': Mainnav,
    'app-im-animation': IamAnimation,
  }
}
</script>

<style lang="scss">

.container{
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: calc(100vh - 4px);
  // background: $sunset-brown;
  // padding-top: 1em;

footer{
  flex: 1;
  order: 3;
  // background: red;
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
  
}
.sect1{
  position: relative;
   order: 2;
  flex: 2;
  // background: $sunset-brown;
  p{
    font: $font-text
  }
  img{
    max-width: 100%;
  }
  .animation{
    position: absolute;
    bottom: 40px;
    left: 60px;
  }
}

.sect2{
  // background: blue;
  order: 1;
  flex: 1;
  @extend .mobile-logo-flex;
  gap: 1em;
  position: relative;
i{
  position: absolute;
  top: 20px;
  right: 20px;
  color: $sunset-brown;
}
 
  h1{
    // color:white;
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
