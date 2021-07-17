<template>
  <div class="footer">
     
       <div class="contact-icons">
       <a href="#"><i class="far fa-envelope"></i></a>

      <a href="https://github.com/anthonymartz17?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>

      <a href="#"><i class="fab fa-instagram"></i></a>

      <a href="#"><i class="fab fa-facebook-square"></i></a>
      </div>
      <small>© {{new Date().getFullYear()}} Antonio Martinez</small>
  
  </div>
</template>

<style lang='scss'>
.footer{
 
  height: 100%;

  // flex: 1;
  // order: 3;
  // background: red;
  border-top: 1px solid lighten($dark, 40%);
  margin-inline: 1em;
  padding: .5em;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1em;

  .contact-icons{
     
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    

   
  }

  small{
    
    color: $dark;
  }

  a{
    padding: .2em;
    text-align: center;
    width: 3em;
    color:$dark;
    transition: all 250ms ease-in-out;
    border-bottom: 1px solid transparent;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
   

     &:hover{
       color: $logo-background;
      
      // border-bottom: 1px solid $logo-background;
    }
  }
  
}
</style>


