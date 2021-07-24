<template>
  <div>
    <div class="about-container">
      <h2>{{aboutHeading}}</h2>
      <p>{{aboutPersonalDescription}}</p>
      
      <div class="about-skills">
        <div class="about-skills-techskills">
          <div class="about-skills-title">
            <i class="fas fa-laptop-code fa-2x"></i>
            <h5>Technical Skills</h5>
          </div>
          <ul class="about-skills-list">
            <li v-for="(skill, key) in techSkills" :key="key">{{skill}}</li>
          </ul>
        </div>
      
        <div class="about-skills-otherskills">
          <div class="about-skills-title">
            <i class="fas fa-hands-helping fa-2x"></i>
            <h5>Other Skills</h5>
          </div>
          <ul class="about-skills-list">
            <li  v-for="(skill, key) in otherSkills" :key="key">{{skill}}</li>
          </ul>
        </div>
    
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      // about component content
      aboutHeading:'About Me',
      aboutPersonalDescription:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolorum officiis autem quos sunt enim eligendi vitae illo, veniam nisi perspiciatis alias, expedita impedit voluptas accusantium? Minima, aliquid natus iste fugiat culpa illo quod assumenda neque libero, nulla, labore soluta asperiores ipsam doloremque! Cupiditate, fugit est? Porro dignissimos eaque molestias!',
      techSkills:["HTML5","CSS3","JavaScript","Vue.js/Vuex","Bootstrap","Sass"],
      otherSkills:["Problem-Solving","Adaptability","Resilience","Passion for learning","Empathy","Communication"]
            
    }
  }

}
</script>

<style lang='scss'>


.about-container{
  margin: 2em 3em;
  height: 74vh;
 
   
h2{

 font:$font-title-lg;
 color: $dark;
  
}
  p{
    font:$font-text;
    color: $dark;
    margin-block: 1em;
    
  }

  .about-skills{
   
    display: flex;
    justify-content: space-evenly;
    gap: 5em;
    margin-block: 3em;

    
    &-title{
      // text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: .5em;
      font: $font-title-lg;
      flex: 1;
      background:$logo-bg;
      color: $white;
    }

     &-list {
       
       padding: 3em;
       border-right: 1px solid lighten($dark, 40%);
      //  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
     
       

      text-align: start;
      flex: 1;
    }
   
     &-techskills, &-otherskills{
       height: 35vh;
       flex: 1;
       display: flex;
       gap: 2em;
       box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
       color: $dark;
       position: relative;
    
    
    font:$font-text;

   
   
    li{
      line-height: 1.8;
    }
    li::before{
      content: '-';
      font-weight: 900;
      padding-right: .4em;
      color: $dark;
    }
  }
    
  }
 

}

</style>