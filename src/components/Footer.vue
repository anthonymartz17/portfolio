<template>
  <div>
     <footer>
       <div class="contact-icons">
       <a href="#"><i class="far fa-envelope"></i></a>

      <a href="https://github.com/anthonymartz17?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>

      <a href="#"><i class="fab fa-instagram"></i></a>

      <a href="#"><i class="fab fa-facebook-square"></i></a>
      </div>
      <small>© {{new Date().getFullYear()}} Antonio Martinez</small>
   </footer>
  </div>
</template>

<style lang='scss'>
footer{
  height: 30vh;
  background: black;
  flex: 1;
  // order: 3;
  // background: red;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  .contact-icons{
    display: flex;
    justify-content: space-evenly;
    width: 40%;
  }

  small{
    color: white;
  }

  a{
    color: white;
  }
  
}
</style>


