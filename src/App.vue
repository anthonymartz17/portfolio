<template>
<div>
  <div class="container">
      <header>
        <nav>
         <app-navlinks class="nav-component"></app-navlinks>
         <i class="fas fa-bars fa-2x"></i>
      </nav>
        <h1> Antonio Martinez</h1>
        <p>FRONT-END WEB DEVELOPER</p>
      </header>
      
  
    
    <section class="sect1">
      <!-- <div class="display-screen"> -->
          <img src="@/assets/sunset-simba.jpg" alt="home page image">
      <!-- </div> -->
      <app-im-animation class="Home-page-text-animation"></app-im-animation>
    </section>
   
   <footer>
     
       <a href="#"><i class="far fa-envelope fa-2x"></i></a>
      <a href="https://github.com/anthonymartz17?tab=repositories" target="_blank"><i class="fab fa-github fa-2x"></i></a>
     
   </footer>
   
  </div>
    <app-about></app-about>
    <app-projects></app-projects>
    </div>
</template>
<script>

import Navlinks from './components/Navlinks.vue';
import IamAnimation from './components/IamAnimation.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';

export default {
  components:{
    'app-navlinks': Navlinks,
    'app-im-animation': IamAnimation,
    'app-about': About,
    'app-projects': Projects,
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
  padding-block: 1em;

footer{
  flex: 1;
  // order: 3;
  // background: red;
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
  
}
.sect1{
  position: relative;
  //  order: 2;
  flex: 2;
  // background: $sunset-brown;
  p{
    font: $font-text
  }
  img{
    max-width: 100%;
  }
  .Home-page-text-animation{
    position: absolute;
    bottom: 40px;
    left: 60px;
  }
}



 
  

  header{
    display: flex;
    flex-direction: column;
   // order: 1;
    flex: 1;
    gap: 1em;
  

    nav {
    // background: blue;
    width: 100vw;
    padding-inline: .5em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
  }
  img{
    max-width: 70px;
    height: 70px;
    border-radius: 50%;
  }
 
i{
 
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
    border-block: 1px solid $sunset-brown;
    padding-block: .5em;
  }
}
.nav-component{
  display: none;
}

</style>
