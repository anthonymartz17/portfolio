<template>
  <div class="footer">
   <ul class="contact-icons">
     <li v-for="(contact, key) in contacts" :key="key" >
      <a :href="contact.media" target="_blank"><i :class=[contact.icon]></i></a>
     </li>
   </ul>
     <small>© {{new Date().getFullYear()}} Antonio Martinez</small>
  </div>
</template>
<script>
export default {
  data(){
    return{
      contacts:[
        {media:"https://github.com/anthonymartz17?tab=repositories", icon:"fab fa-github"},
        {media:"https://www.instagram.com/anthonymartz17/", icon:"fab fa-instagram"},
        {media:"https://www.facebook.com/", icon:"fab fa-facebook-square"},
        
      ]
    }
  }
}
</script>

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
       color: $logo-bg;
      
    }

  }
  
}
</style>


