<template>
  <div>
    <div class="container">
        <transition name="fade">
        <div :class="{modal:mobileNav}" @click="toggleMobileNav"></div>
        </transition>
      <header>
        <i @click="toggleMobileNav" class="fas fa-bars " v-show="mobile"></i>
        <h1 class="my-huge-name"> Antonio Martinez</h1>
      </header>
       
       <aside class="side-nav" v-show="!mobile">
          <div class="logo">
            <p>Martz</p>
          </div>
          <nav>
            <app-navlinks></app-navlinks>
          </nav>
        </aside>
        
        <transition name="slide">
        <aside class="side-nav" v-show="mobileNav">
          <div class="logo">
            <p>Martz</p>
          </div>
          <nav>
            <app-navlinks :toggleMobileNav="toggleMobileNav"></app-navlinks>
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
        
        mobile:false,
        mobileNav:false
       
      }
    
    },
    created(){
    
      this.handledesktopMenu()
    },
 
    methods:{
         

         handledesktopMenu(){
            if(window.innerWidth <= 414){

             this.mobile = true
             
           } 

         },
         toggleMobileNav(){
           if(window.innerWidth <= 414){

             this.mobileNav = !this.mobileNav
           }
          },
         
          
      }

}
</script>

<style lang="scss">

.slide-enter,.slide-leave-to{
   
   transform: translateX(-250px);
 
}
.slide-enter-active,.slide-leave-active{
  transition: all .4s ease-in-out ;

}
.slide-enter-to, .slide-leave{
  transform: translateX(0px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


.modal{
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.534);
  width: 100%;
  height: 100%;
  
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
  
  
  header{

   @include mobile{
     display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

   
   .fa-bars{
     
     position: absolute;
     top: 50%;
     left: 10%;
     transform: translateY(-50%);
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
