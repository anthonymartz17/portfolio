<template>
  <div class="container">
    <section class="sect1">
      <div class="display-screen">
          <p>display</p>
      </div>
    </section>
    <section class="sect2">
      <header>
        <h1> Antonio Martinez</h1>
        <p>FRONT-END WEB DEVELOPER</p>
      </header>
      <nav>
         <app-main-nav></app-main-nav>
      </nav>
    </section>
   
    
  </div>
</template>
<script>

import Mainnav from './Main-nav.vue';

export default {
  components:{
    'app-main-nav': Mainnav
  }
}
</script>

<style lang="scss">

.container{
  display:flex;
  flex-direction: column-reverse;
  height: 100vh;
  
}
.sect1{
  flex: 3;
  background: red;
  p{
    font: $font-text
  }
}

.sect2{
  flex: 1;
  @extend .dead-center-flex;
  gap: 1em;
  background: blue;
  padding-right: 1.4em;
 
  h1{
    color:white;
    font: $font-logo;
    text-align: center;
  }
  p{
    font: $font-title-md;
    text-align: center;
  }
}

</style>
