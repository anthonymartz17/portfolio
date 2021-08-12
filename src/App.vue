<template>
  <div>
    <div class="container">
        <!-- modal for mobile view menu -->
        <transition name="fade">
        <div class="modal" v-show="mobileNav" @click="toggleMobileNav"></div>
        </transition>
      <header>
        <i @click="toggleMobileNav" class="fas fa-bars " v-show="mobile"></i>
        <transition name="toggleIt">
        <h1 class="my-huge-name" v-show="showName"> Antonio Martinez</h1>
        </transition>
      </header>
       
       <aside class="side-nav" v-show="!mobile">
          <div class="logo">
            <p>Martz</p>
          </div>
          <nav>
            <Navlinks/>
          </nav>
        </aside>
        
        <transition name="menu-slides">
        <aside class="side-nav" v-show="mobileNav">
          <div class="logo">
            <p>Martz</p>
          </div>

          <!-- mobile menu -->
          <nav>
           <Navlinks :toggleMobileNav="toggleMobileNav" :toggleBigName="toggleBigName"/>
          </nav>
        </aside>
        </transition>
      <main>
        
        <transition name="router-fades" appear>
        <routerView/>
        </transition>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  </div> 
</template>


<script>

  import Navlinks from './components/Navlinks.vue';
  import Footer from './components/Footer.vue';

  export default {
    components:{
      Navlinks,
      Footer,
    },
    data(){
      return{
        
        mobile:false,
        mobileNav:false,
        showName:false
       
      }
    
    },
    created(){
    
     window.addEventListener('resize',this.handledesktopMenu)
      this.handledesktopMenu()
    },
 
    methods:{
         
         toggleBigName(toggle){
         this.showName = toggle

         },

         handledesktopMenu(){
            if(window.innerWidth <= 414){

             this.mobile = true
        
             
           } else{
             this.mobile = false
             this.mobileNav = false
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
.menu-slides-enter, .menu-slides-leave-to{
  transform: translateX(-250px);
}
.menu-slides-enter-to, .menu-slides-leave{
  transform: translateX(0px);
}
.menu-slides-enter-active, .menu-slides-leave-active{
  transition: all .3s ease-in-out;
}


.toggleIt-enter,.toggleIt-leave-to{
  transform: translateY(80px);
}

.toggleIt-enter-active, .toggleIt-leave-active{
  transition: all .3s ease-in-out;
}
.toggleIt-enter-to, .toggleIt-leave{
  transform: translateY(0px);
}


.router-fades-enter{
   
   transform: translateY(15px);
   opacity: 0;
 
}
.router-fades-enter-active{
  transition: all .4s ease-in-out ;

}
.router-fades-enter-to{
  transform: translateX(0px);
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity .3s ease-in-out;
  
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
    grid-template-rows: .8fr 6fr 1fr;
  }
  
  
  header{

     display: flex;
     grid-area: header;
     justify-content: center;
    background:$white;
   box-shadow: $bx-shadow;
   overflow: hidden;

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
     font-size: 1.3em;
     color: $primary;
     cursor: pointer;

   }

   }

   
 

  
  .my-huge-name{
    display: inline-block;
    font:$font-jumboName-desktop;
     opacity: .08;

    @include mobile{
    
      font:$font-jumboName-mobile;
      padding-left: 1em;
      
      
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
   @include mobile{
     overflow-y: auto;
   }
  
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
