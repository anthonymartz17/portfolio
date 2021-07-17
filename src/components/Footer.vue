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
    
    padding: .5em;
    text-align: center;
    color:$dark;
    transition: all 250ms ease-in-out;
    border-bottom: 1px solid transparent;
      
     &:hover{
       color: $logo-background;
      
    }

  }
  
}
</style>


