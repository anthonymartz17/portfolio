<template>
  <div>
    <div class="projects-section">
    <h2>My Work</h2>

  <div class="projects-section-container">

    <div :class="[project.class]" v-for="(project,key) in projects" :key="key">
      <div class="overlay">
      <h3>{{project.projectName}}</h3>
      <p>{{project.description}}}</p>
      <div class="btn-container">
        <a href="#">Read more</a>
        <a href="https://www.w3schools.com/cssref/pr_border-color.asp" target="_blank">View Code</a>
      </div>
      </div>
    </div>
   
  </div>
   </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      projects:[
        {
          projectName:'To Do App', 
          img:'@/assets/images/todoApp.png', 
          description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
          alt:'tasks app',
          class:"each-project project1"
          },
        {
          projectName:'Weather App', 
          img:"@/assets/images/weatherApp.png", 
          description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
          alt:'weather app image',
          class:"each-project project2"
          },
        {
          projectName:'Landing Page', 
          img:"@/assets/images/aria-website.png", 
          description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
          alt:'landing page image',
          class:"each-project project3"
          },
          // {
          //   projectName:'Github Finder', 
          //   img:"@/assets/images/github-finder.png", 
          //   description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
          //   alt:'githup finder image',
          //   class:"each-project project4"
          //   },
      ]
    }
  }

}
</script>

<style lang='scss'>

.projects-section{
  // background: blue;
  margin: 2em 3em;
  height: 74vh;

  @include mobile{
       
       height: 62vh;
       padding-block: 2em;
      }

   
   h2{
      font:$font-title-lg;
       color: $dark;
       margin-block: 1em;
   }
 
&-container{
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: auto;
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
  // max-width: 100%;
  height: 100%;
  overflow-y: auto;
  
  @include mobile{
       display: block;
       padding-block: 1em;
      }
}


}

$projectImg:(
   "project1":'../assets/images/todoApp.png',
   "project2":'../assets/images/weatherApp.png',
  //  "project3":'../assets/images/github-finder.png',
   "project3":'../assets/images/aria-website.png'
);

@each $name,$img in $projectImg{
  .#{$name}{
     background-image: url($img);
     background-size: contain;
     background-repeat: no-repeat;
     box-shadow: $bx-shadow;
     height: 38vh;
     overflow: hidden;
  }
}

.each-project{
  position: relative;
  flex:1;
 @include mobile{
        margin-bottom: 1em;
      }

  .overlay{
  
    position: absolute;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.40);
    opacity: 0;
    transition: all 300ms ease-in-out;
     display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


    &:hover{
      opacity: 1;

    }
  }


  h3{
    font: $font-title-lg;
    color: $white;
    border: 1px solid;
    border-color:$primary $primary $white $white ;
    padding: .5em 1em;
    z-index: 1;
  }

  p{
    z-index: 1;
    font: $font-text;
    color: $white;
    margin-inline: 1em;
    padding-inline: .5em;
    
  }

  
  .btn-container{
    z-index: 1;
    display: flex;
    gap: 1em;
    justify-content: space-evenly;
    
    

    a{
      // background: $sunset-brown;
      font: $font-text;
      color: white;
      background: $primary;
      text-transform: uppercase;
      font-weight: 300;
      border-radius: 5px;
      padding: .5em 1em;
      cursor: pointer;
      transition: all 250ms ease-in-out;
    }
    a:hover{
      background: $light-primary;
      
    }
  }
}

</style>