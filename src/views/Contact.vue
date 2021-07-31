<template>
  <div>
    <div class="contact-container">
      <h2>{{contactTitle}}</h2>
      <p>{{contactDescription}}</p>

    <div class="contact-info">

      <form action="">
        <div>
          <label for="name"></label>
          <input class="field" type="text" id="name" placeholder="Full Name*" required>
        </div>
        <div>
          <label for="email"></label>
          <input class="field" type="email" id="email" placeholder="Email*" required>
        </div>
        
        <textarea name="textarea" id="" cols="30" rows="10" placeholder="Message*" required></textarea>
        
        <button type="submit">Send</button>
      </form>



      
        <!-- <a class="contact-info-contacts" href="#">
        <div class="contact-info-iconname">
        <i class="far fa-envelope fa-2x"></i>
        <p class="icon-text">E-mail</p>
        </div>
        <p>antonio.fr.martinezc@hotmail.com</p>
        </a>
      
      
        <a class="contact-info-contacts" href="https://github.com/anthonymartz17?tab=repositories" target="_blank">
        <div class="contact-info-iconname">
        <i class="fab fa-github fa-2x"></i>
        <p class="icon-text">Github</p>
        </div>
        <p>anthonymartz17</p>
        </a> -->
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contactTitle:'Contact',
      contactDescription:"Let's work together with dedication and commitment! ",

    }
  }

}
</script>

<style lang='scss'>

.contact-container{
//  background: red;
  height: 74vh;
  margin: 2em 3em;

  @include mobile{
     height: 65vh;
  }
  
  

  form{
    // width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-bottom: 1em;
  }

  div{
    flex: 1;
    
  }
  .field{
    width: 100%;
    height: 4em;
    padding: 1em;
    border: 1px solid lighten($dark,50%);


    &:focus{
      outline:1px solid $light-primary; 
    }
  }

  textarea{
    flex: 4;
    padding: 1em;
    border: 1px solid lighten($dark,50%);
    max-width: 100%;
    min-width: 50%;
    &:focus{
      outline:1px solid $light-primary; 
    }
  }
  
  button{
    flex: 1;
    align-self: flex-start;
    padding: 0em 4em;
    background: $primary;
    border: transparent;
    border-radius: 5px;
    color: $white;
    font:$font-title-md;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover{
      background: $light-primary;
    }
  }
  
  h2{
      font: $font-title-lg;
  }

  p{
    margin-top: 1em;
    font:$font-text;
    
  }
  .contact-info{
    
   
    height: 100%;
    margin-block: 3em;
    // display: flex;
    // gap: 2em;
    

    // &-iconname{
    //   background: $logo-bg;
    //   padding-block: .5em;
    //   margin-bottom: .5em;
    //   color: $white;
    
    // }

    // &-contacts{
    //   color: $dark;
    //    height: 35vh;
    //    flex: 1;
    //    box-shadow: $bx-shadow;
    //    text-align: center;
    //   padding-block: 4em;
    //   margin-block: 1em;
    //   transition: all 250ms ease-in-out;
    //   cursor: pointer;


    // }
    // &-contacts:hover{
      
    //   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    // }
  }
}

</style>