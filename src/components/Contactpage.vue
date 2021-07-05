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
  height: 70vh;
  padding-block: 2em;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  // background: red;

  p{
    text-align: center;
  }
  .contact-info{
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: blue;
    margin-top: 2em;
    gap: 2em;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5em;
      padding-block: .5em;
    }
  }
}

</style>