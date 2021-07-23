<template>
  <div>
    <div class="contact-container">
      <h2>Contact</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores magnam fugit sapiente similique molestias.</p>
    
    <div class="contact-info">
      <div>
       <a href="#"><i class="far fa-envelope fa-2x"></i></a>
        <p>E-mail</p>
        <p>antonio.fr.martinezc@hotmail.com</p>
      </div>
      <div>
        <a href="https://github.com/anthonymartz17?tab=repositories" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        <p>Github</p>
        <p>User: anthonymartz17</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.contact-container{
 background: red;
  height: 74vh;
  margin: 2em 3em;
  
  
  // h2{

  // }

  p{
    
  }
  .contact-info{
      @include tablet{
       padding: 2em;
       
  }
    width: 100%;
    height: 40vh;
    margin-top: 2em;
  

    div{
       text-align: center;
      padding-block: .5em;
      margin-block: 1em;
      padding: 1em;
      border: 1px solid rgba(0, 0, 0, 0.308);
      transition: all 250ms ease-in-out;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.178);
      cursor: pointer;
    }

    div:hover{
      background: black;
      color: white;
    }
    
  }
}

</style>