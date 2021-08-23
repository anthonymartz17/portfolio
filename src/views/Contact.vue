<template>
  <div>
    <div class="contact-container">
      <h2>{{$store.state.contactTitle}}</h2>
      <p>{{$store.state.contactDescription}}</p>
      

    <div class="contact-info">

      
      <form>
        <transition
          appear
           enter-active-class="animate__animated animate__slideInUp"
        >
        <div key="name" id="1">
          <label for="name"></label>
          <input class="field" type="text" id="name" placeholder="Full Name*" required>
        </div>
        </transition>

        <transition
        appear
           enter-active-class="animate__animated animate__slideInUp"
        >
        <div key="email" id="2">
          <label for="email"></label>
          <input class="field" type="email" id="email" placeholder="Email*" required>
        </div>
      </transition>

        <transition
        appear
           enter-active-class="animate__animated animate__slideInUp"
        >
        <textarea key="textarea"  name="textarea" id="3" cols="30" rows="10" placeholder="Message*" required></textarea>
        </transition>

        <transition
        appear
           enter-active-class="animate__animated animate__slideInUp"
        >
        <button id="4" key="btn" type="submit">Send</button>
       </transition>

         </form>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
 

}
</script>

<style lang='scss'>

:root{
  --animate-delay:.5s
}


.contact-container{
//  background: red;
  height: 74vh;
  margin: 2em 3em;

  @include mobile{
     height: 65vh;
     margin: 2em;
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