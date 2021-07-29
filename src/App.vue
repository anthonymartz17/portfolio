<template>
<div>
  <div class="container">
      <header>
        <i @click="showMenu" class="fas fa-bars"></i>
        <h1 class="my-huge-name"> Antonio Martinez</h1>

      </header>
      <aside :class="['side-nav',{'show-hide-menu':isActive}]">
        <div class="logo">
          <p>Martz</p>
          </div>
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
  },
  data(){
    return{
      isActive: false,
    }
   
  },
  methods:{
         showMenu(){
           this.isActive =! this.isActive
           console.log(this.isActive)
         }
    }

}
</script>

<style lang="scss">

.container{
  position: relative;
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
  
  @include mobile{
    grid-template-columns: 0fr 6fr;
  }
  
  .fa-bars{
     display: none;
   }

  header{

   @include mobile{
     display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

   
   .fa-bars{
     display: block;
     position: absolute;
     left: 1em;
     top: 1.3em;
     font-size: 1.2em;
     color: $primary;
     cursor: pointer;
   }



   }

   
 
 display: flex;
     grid-area: header;
 justify-content: center;
    background:$white;
   box-shadow: $bx-shadow;
   overflow: hidden;
  
  .my-huge-name{
    display: inline-block;
    font:$font-jumboName-desktop;
     opacity: .08;

    @include mobile{
    
      font:$font-jumboName-mobile;
      
      
    }
   
    
    
  }
  
}

.side-nav{
  
  grid-area: aside;
  display: grid;
  grid-template-rows: 1fr 7fr;

  @include mobile{
      
      position: absolute;
      z-index: 10;
      height: 100%;
      transform: translatex(-170px);

  }

  .logo{
    
    @include mobile{
      padding-left: 1.6em;
    }
    display: flex;
    padding-left: 2.5em;
    align-items: center;
    background: $primary;
    font:$font-logo-name;
    color: $light;
     

    p{
      border-bottom: 1px solid $white;
      
    }
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
