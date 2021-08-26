<template>
  <div>
    <transition 
     enter-active-class="animate__animated animate__fadeIn animate__faster"
     leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
   <ModalProjects v-show="$store.state.moreAboutProject"/>
   </transition>
    <div class="container">
        <!-- modal for mobile view menu -->
        <transition 
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
        <div class="modal-mobile-nav" v-show="$store.state.mobileNav" @click="toggleMobileMenu" ></div>
        </transition>
      <header>
        <i @click="toggleMobileMenu" class="fas fa-bars " v-show="$store.state.mobile"></i>
        <transition 
          enter-active-class="animate__animated animate__slideInUp animate__faster"  
          leave-active-class="animate__animated animate__slideOutDown animate__faster"
        >
        <h1 class="my-huge-name" v-show="!$store.state.showName"> Antonio Martinez</h1>
        </transition>
      </header>
       
       <aside class="side-nav" v-show="!$store.state.mobile">
          <div class="logo">
            <p>Martz</p>
          </div>
          <nav>
            <Navlinks />
          </nav>
        </aside>
        
          <!-- mobile menu -->
        <transition 
        enter-active-class="animate__animated animate__slideInLeft animate__faster"
        leave-active-class="animate__animated animate__slideOutLeft animate__faster"
        
        
        >
        <aside class="side-nav" v-show="$store.state.mobileNav">
          <div class="logo">
            <p>Martz</p>
          </div>
          <nav>
           <Navlinks/>
          </nav>
        </aside>
        </transition>
      <main>
        
        <transition
         appear
         name="router-animation"
         
         >
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
  import ModalProjects from './components/Modal-projects.vue';

  export default {
    components:{
      Navlinks,
      Footer,
      ModalProjects
    },
    
    created(){
    
     window.addEventListener('resize',this.handleDesktopMenu)
     window.addEventListener('onload',this.isHome)
     this.isHome()
     this.handleDesktopMenu()
       
    },
   
 
    methods:{
      // on page load, checks if current route is home to hide big name on header
         isHome(){
           this.$store.commit('isHome',this.$route)
           
         },
               
        //  shows mobile view
         handleDesktopMenu(){
                              this.$store.commit('handleDesktopMenu')
          
         },


         toggleMobileMenu(){
                             this.$store.commit('toggleMobileMenu')
          },

         

          
         
          
      }

}
</script>

<style lang="scss">
     

.toggleIt-enter,.toggleIt-leave-to{
  transform: translateY(80px);
}

.toggleIt-enter-active, .toggleIt-leave-active{
  transition: all .3s ease-in-out;
}
.toggleIt-enter-to, .toggleIt-leave{
  transform: translateY(0px);
}


.router-animation-enter{
   
   transform: translateY(15px);
   opacity: 0;
 
}
.router-animation-enter-active{
  transition: all .4s ease-in-out ;

}
.router-animation-enter-to{
  transform: translateX(0px);
  opacity: 1;
}



.modal-mobile-nav{
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
