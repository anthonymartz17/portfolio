<template>

      <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut"
      >
   
      <div class="modal" @click="showMore($event)" v-show="$store.state.moreAboutProject"> 
     
      <transition
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      leave-active-class="animate__animated animate__zoomOut"
      
      
      >
        <div class="modal-project"  v-show="$store.state.moreAboutProject">
        <i class="far fa-window-close" @click="showMore($event)"></i>
        <div class="modal-project-img">

            <img class="img" :src="img" alt="">
        </div>
        <div class="modal-project-description">

        </div>

        </div>
      </transition>

    </div>
      </transition>
</template>

<script>
export default {
  data(){
    return{
      img: 'https://cdni.llbean.net/is/image/wim/240624_1_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2'
    }
  },
  
  methods:{
    showMore(e){
      if(e.target.className == 'modal' || e.target.classList.contains('fa-window-close')){
        this.$store.commit('showMoreAboutProject')
      
      }
      
    },
    
  },
  computed:{
    moreProject(){
      return this.$store.state.projectInModal.imgDesktop
    }
  }
 

}
</script>

<style lang="scss">
.fa-window-close{
  position: absolute;
  right: .5em;
  top: .5em;
  color: $dark;
  font-size: 2em;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover{
    color: $primary;
  }
}

img{
  max-width: 100%;
}

.modal{
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: grid;
  place-items: center;

}
.modal-project{
 position: relative;
  background: $light;
  width: 80%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  background: $white;


  &-img{
     flex: 1 1;
    //  background: lightblue;
  }
  &-description{
     flex: 2 1 ;
     
  }
}

</style>