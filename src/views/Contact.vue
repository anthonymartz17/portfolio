<template>
  <div>
    <div class="contact-container">
      <h2>{{contactTitle}}</h2>
      <p>{{contactDescription}}</p>
    <div class="contact-info">
      
        <a class="contact-info-contacts" href="#"><i class="far fa-envelope fa-2x"></i>
        <p class="icon-text">E-mail</p>
        <p>antonio.fr.martinezc@hotmail.com</p>
        </a>
      
      
        <a class="contact-info-contacts" href="https://github.com/anthonymartz17?tab=repositories" target="_blank">
        <i class="fab fa-github fa-2x"></i>
        <p class="icon-text">Github</p>
        <p>anthonymartz17</p>
        </a>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contactTitle:'Contact',
      contactDescription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores magnam fugit sapiente similique molestias.',

    }
  }

}
</script>

<style lang='scss'>

.contact-container{
//  background: red;
  height: 74vh;
  margin: 2em 3em;
  
  
  
  h2{
      font: $font-title-lg;
  }

  p{
    font:$font-text;
    margin-block: 1em;
  }
  .contact-info{
    margin-block: 3em;
    display: flex;
    gap: 2em;
    

    &-contacts{
      color: $dark;
       height: 35vh;
       flex: 1;
       padding-inline: 5em;
       box-shadow: $bx-shadow;
       border:1px solid lighten( $dark, 50%);
      //  border-radius: 5px;
      //  display: flex;
       text-align: center;
      padding-block: 4em;
      margin-block: 1em;
      transition: all 250ms ease-in-out;
      // box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.178);
      
      box-shadow: inset 0em 9em $logo-bg;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;


    i,.icon-text{
      color: $white;
    }


    }
    &-contacts:hover{
      
     
    }
  }
}

</style>