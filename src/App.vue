<template>
  <div>
    <div class="container">
      <transition name="modal">
        <div class="modal" v-show="isActive" @click="showMenu"></div>
      </transition>
      <header>
        <i @click="showMenu" class="fas fa-bars"></i>
        <h1 class="my-huge-name"> Antonio Martinez</h1>
      </header>
      <transition name="slide-in-out">
        <aside class="side-nav" v-show="isActive">
          <div class="logo">
            <p>Martz</p>
          </div>
          <nav>
            <app-navlinks :showMenu="showMenu"></app-navlinks>
          </nav>
        </aside>
      </transition>
      <main>
        <routerView/>
      </main>
      <footer>
        <app-footer></app-footer>
      </footer>
    </div>
  </div> 
</template>


<script>

  import Navlinks from './components/Navlinks.vue';
  import Footer from './components/Footer.vue';

  export default {
    components:{
      'app-navlinks': Navlinks,
      'app-footer': Footer,
    },
    data(){
      return{
        isActive: false,
        hide: false,
      }
    
    },
    methods:{
          showMenu(){
            this.isActive =! this.isActive
          },
          
      }

}
</script>

<style lang="scss">
// .slide-in-out-enter, .slide-in-out-leave-to{
//   transform: translatex(-170px);
//   transition: all 300ms ease-in-out;
//   opacity: 0;
// }
.slide-in-out-enter-active{

  animation: slide .4s ease-in-out ;
  
}
 .slide-in-out-leave-active{
   animation: slide .4s ease-in-out reverse;
 }


@keyframes slide{

  0%{
    transform: translateX(-170px);
  }

  100%{
    transform: translateX(0px);
  }

} 

.modal-enter, .modal-leave-to{
  opacity: 0;
}

.modal-enter-active, .modal-leave-active{
  transition: opacity .3s;
 
}

.modal{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.212);
  z-index: 1;
}
.container{
  overflow: hidden;
  min-width: 320px;
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
      // transform: translatex(-170px);

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
