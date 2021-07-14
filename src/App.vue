<template>
<div class="testing">
  <div class="container">
      <header>
        <nav>
         <app-navlinks class="nav-component"></app-navlinks>
         <!-- <i class="fas fa-bars fa-2x"></i> -->
         <div class="hamburguer">
           <span></span>
           <span></span>
           <span></span>
         </div>
      </nav>
        <h1> Antonio Martinez</h1>
        <p>FRONT-END WEB DEVELOPER</p>
      </header>
    <section class="sect1">
      <div class="display-screen">
          <img src="@/assets/sunset-simba.jpg" alt="home page image">
          <app-im-animation class="Home-page-text-animation"></app-im-animation>
      </div>
    </section>

   
  
   
  </div>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
    
   
    </div>

    
</template>
<script>

import Navlinks from './components/Navlinks.vue';
import IamAnimation from './components/IamAnimation.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contactpage from './components/Contactpage.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    'app-navlinks': Navlinks,
    'app-im-animation': IamAnimation,
    'app-about': About,
    'app-projects': Projects,
    'app-contact': Contactpage,
    'app-footer': Footer,
  }
}
</script>

<style lang="scss">
.hamburguer{
  span{
    background: black;
    width: 10px;
  }
}
.container{
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - 4px);
  padding-block: 1em;

}
.sect1{
 
  //  order: 2;
  flex: 2;
  // background: $sunset-brown;

  .display-screen{
     position: relative;
     width: 100%;
     
    
  }
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
  
    gap: 1em;
    margin:2.5em .5em;
  

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
