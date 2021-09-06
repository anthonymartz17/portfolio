<template>

      <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut"
      >
   
      <div class="modal" @click="hideMoreAboutProject($event)" v-show="$store.state.moreAboutProject"> 
     
      <transition
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      leave-active-class="animate__animated animate__zoomOut" 
      >
        <div class="modal-project"  v-show="$store.state.moreAboutProject">
        <i class="far fa-window-close" @click="hideMoreAboutProject($event)"></i>
        <div class="modal-project-img">

          <img :src="require(`../assets/images/${projectInModalComputed.imgDesktop}`)" :alt="projectInModalComputed.alt">
          <img class="img-mobile" :src="require(`../assets/images/${projectInModalComputed.imgMobile}`)" :alt="projectInModalComputed.alt">
        </div>
        <div class="modal-project-description">

          <h2>{{projectInModalComputed.projectName}}</h2>
          <p>{{projectInModalComputed.moreDescription}}</p>

        </div>

        </div>
      </transition>

    </div>
      </transition>
</template>

<script>

import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'


export default {
  data(){
    return{
      img: 'https://cdni.llbean.net/is/image/wim/240624_1_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2',

     
    }
  },
  
  methods:{
   
    ...mapMutations(['hideMoreAboutProject'])
   
  },
  computed:{
    moreProject(){
      return this.$store.state.projectInModal.imgDesktop
    },

    ...mapGetters(['projectInModalComputed'])
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
  padding: 2em;
 position: relative;
  background: $light;
  width: 80%;
  height: 90%;
  display: flex;
  align-items: center;
  // flex-wrap: wrap;
  background: $white;

  @include mobile{
    flex-direction: column;
    overflow-y: auto;
    padding-top: 5em;
  }



  &-img{
     flex: 1 1;
     height: 100%;
     background: lightcoral;
     padding: 1em;
     position: relative;
     
  }
  .img-mobile{
    position: absolute;
    top: 20em;
  }
  &-description{
     flex: 2 1 ;
     padding: 1em;
     height: 80%;
     display: flex;
     flex-direction:column;
     gap: 1em;
     background: lightblue;

     @include mobile{
       height: auto;
     }

     h2{
       font: $font-title-lg;
     }
     p{
       font: $font-text;
       text-align: justify;
     }
     
  }
}

</style>