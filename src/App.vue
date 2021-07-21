<template>
<div>
  <div class="container">
      <header>
        <h1> Antonio Martinez</h1>
        <!-- <p>FRONT-END WEB DEVELOPER</p> -->
      </header>
      <aside>
        <div class="logo">LOGO</div>
        <nav>
        <app-navlinks></app-navlinks>
        </nav>
      </aside>
      <main>
        <routerView/>
      </main>
      <footer>
          <app-footer></app-footer>
      </footer>




    <section class="sect1">
      <div class="display-screen">
          <!-- <img src="@/assets/sunset-simba.jpg" alt="home page image"> -->
          <app-im-animation class="Home-page-text-animation"></app-im-animation>
      </div>
    </section>

   
  
   
  </div>
    <!-- <app-about></app-about>
    <app-projects></app-projects>
    <app-contact></app-contact>-->
     
    
   
    </div>

    
</template>
<script>

import Navlinks from './components/Navlinks.vue';
// import IamAnimation from './components/IamAnimation.vue';
// import Projects from './components/Projects.vue';
// import Contactpage from './components/Contactpage.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    'app-navlinks': Navlinks,
  //   'app-im-animation': IamAnimation,
  //   'app-about': About,
  //   'app-projects': Projects,
  //   'app-contact': Contactpage,
    'app-footer': Footer,
  }
}
</script>

<style lang="scss">
// .hamburguer{
//   span{
//     background: black;
//     width: 10px;
//   }
// }
.container{
  background: $light;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-areas: 
  "aside header header header"
  "aside main main main"
  "aside footer footer footer"
  ;
  height: calc(100vh - 4px);

  

  header{
    position: relative;
    background:$white;
   grid-area: header;
    gap: 1em;
   box-shadow: $bx-shadow;
  
  

  
  // img{
  //   max-width: 70px;
  //   height: 70px;
  //   border-radius: 50%;
  // }
 
// i{
 
//   top: 20px;
//   right: 20px;
//   color: $sunset-brown;
// }
 
  h1{
    
    font: $font-logo;
    text-align: center;
    position: absolute;
    left: 3em;
    top: -.15em;
    opacity: .08;
    // background:red;
    
  }
  // p{
  //   font: $font-title-md;
  //   text-align: center;
  //   border-block: 1px solid $sunset-brown;
  //   padding-block: .5em;
  // }
}

aside{
  
  grid-area: aside;
  display: grid;
  grid-template-rows: 1fr 7fr;

  .logo{
    display: flex;
    padding-left: 2.6em;
    align-items: center;
    background: $logo-bg;
    font:$font-title-lg;
    color: $light;
  }
  nav{
    background: $dark;
  }
}

main{
  grid-area: main;
  overflow: hidden;  
  
}
footer{
  grid-area: footer;
  // background: $light-dark;

}

}
.sect1{
 
  //  order: 2;
  // flex: 2;
  // background: $sunset-brown;

  // .display-screen{
  //    position: relative;
  //    width: 100%;
     
  // }
  p{
    font: $font-text
  }
  
  .Home-page-text-animation{
    position: absolute;
    bottom: 40px;
    left: 60px;
  }
}



 



.nav-component{
  display: none;
}

</style>
