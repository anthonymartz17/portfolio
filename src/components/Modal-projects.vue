<template>
  <div>
    <div class="modal" @click="closeModalEvent($event)">

    </div>

  </div>
</template>

<script>
export default {
  props:["moreAboutProject"],
  methods:{
    closeModalEvent(e){
      this.$emit('closeModal',e)
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
}

</style>