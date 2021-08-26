<template>
  <div>
   
      <div class="modal" @click="showMore($event)" > 

      <transition
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      leave-active-class="animate__animated animate__zoomOut"
      
      
      >
        <div class="modal-project" v-show="$store.state.moreAboutProject">
        <div class="modal-project-img">
            <img src="" alt="">
        </div>
        <div class="modal-project-description">

        </div>

        </div>
      </transition>

    </div>
    

  </div>
</template>

<script>
export default {
  methods:{
    showMore(e){
      if(e.target.className == 'modal'){
        this.$store.commit('showMoreAboutProject')
        console.log(this.$store.state.moreAboutProject)
        // console.log(this.$store.state.projectInModal)
      }
      
    }
  }
 

}
</script>

<style lang="scss">

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
 
  background: $light;
  width: 80%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;


  &-img{
     flex: 1 1;
     background: lightblue;
  }
  &-description{
     flex: 2 1 ;
     background: lightcoral;
  }
}

</style>