<template>
  <div>
    <div class="about-container">
      <h2>{{aboutHeading}}</h2>
      <p>{{aboutPersonalDescription}}</p>
      
      <section class="about-sect">
        <div class="about-sect-techskills">
        <div class="about-sect-skills-title">
          <i class="fas fa-laptop-code fa-2x"></i>
          <h3>Technical Skills</h3>
          </div>
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
          <div class="about-sect-skills-title">
          <i class="fas fa-hands-helping fa-2x"></i>
          <h3>Other Skills</h3>
          </div>
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
  data(){
    return{

      aboutHeading:'About Me',
      aboutPersonalDescription:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolorum officiis autem quos sunt enim eligendi vitae illo, veniam nisi perspiciatis alias, expedita impedit voluptas accusantium? Minima, aliquid natus iste fugiat culpa illo quod assumenda neque libero, nulla, labore soluta asperiores ipsam doloremque! Cupiditate, fugit est? Porro dignissimos eaque molestias!',
    }
  }

}
</script>

<style lang='scss'>


.about-container{
  padding: 2em 3em;
  height: 74vh;
 
   
h2{

 font:$font-title-lg;
 color: $dark;
  
}
  p{
    font:$font-text;
    color: $dark;
    padding: 1em;
    margin-block: 1em;
    
  }

  .about-sect{
    @include tablet{
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      margin-block: 1em;
      
    };
    padding: 1em;
   
    h3{
      text-align: center;
      margin-bottom: .5em;
      
    }
    
   
     &-techskills, &-otherskills{
   display: flex;
   align-items: center;
   gap: 3;
   
    padding: 1em;
    border:1px solid lighten( $dark, 50%);
    // background: $logo-bg;
    color: $dark;
    position: relative;
    box-shadow: $bx-shadow;
    font:$font-text;


    ul{
      text-align: start;
    }
    

  }

 

    
  }
 

}

</style>