<template>
  <div>
    <div class="about-container">
   
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis ut cupiditate recusandae amet ullam delectus voluptatibus consectetur voluptas soluta.</p>
  

    <section class="about-sect">
      <div class="about-sect-techskills">
        <i class="fas fa-laptop-code fa-2x"></i>
        <h3>Technical Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Vue.js/Vuex</li>
          <li>Bootstrap</li>
          <li>Sass</li>
        </ul>
      </div>
      <div class="about-sect-otherskills">
        <i class="fas fa-hands-helping fa-2x"></i>
        <h3>Other Skills</h3>
        <ul>
          <li>Teamwork</li>
          <li>Problem-Solving</li>
          <li>Adaptability</li>
          <li>Resilience</li>
          <li>Willingness to learn</li>
          <li>Empathy</li>
          <li>Communication</li>
        </ul>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.about-container{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding:1em;

  p{
    text-align: center;
  }

  .about-sect{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    h3{
      text-align: center;
    }
    

     &-techskills, &-otherskills{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3em;
  }

    
  }
 

}

</style>