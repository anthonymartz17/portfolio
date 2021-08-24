<template>
  <div>
    <div class="modal"> 
      <div class="modal-project">
        <div class="modal-project-img">
            <img src="" alt="">
        </div>
        <div class="modal-project-description">

        </div>

      </div>

   </div>

  </div>
</template>

<script>
export default {
  
 

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