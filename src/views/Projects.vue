<template>
  <div>
    <div class="projects-section">
    <h2>My Work</h2>

  <div class="projects-section-container">

    <div :class="[project.class]" v-for="(project,key) in projects" :key="key">
      <h3>{{project.projectName}}</h3>
      <div class="img-container">
        
      </div>
      <p>{{project.description}}}</p>
      <div class="btn-container">
        <a href="#">View Site</a>
        <a href="#">Code</a>
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
   
   h2{
      font:$font-title-lg;
       color: $dark;
       margin-block: 1em;
   }
 
&-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1em;
  max-width: 100%;
  height: 100%;
  overflow: auto;

  // background:red;
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
     border: 1px solid ;
     height: 41vh;
  }
}

.each-project{
 
  // background-image: url(../assets/images/saona.jpg);
 
  // margin-block: 1em;
  // padding-block: .5em;
  // border: 1px solid rgba(0, 0, 0, 0.11);
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // min-height: 20em ;
  // gap: .5em;
 
  img{
    max-width: 100%;
  }

  .btn-container{
    display: flex;
    gap: 1em;
    justify-content: space-evenly;
    

    a{
      // background: $sunset-brown;
      color: white;
      text-transform: uppercase;
      font-weight: 300;
      border-radius: 15px;
      padding: .5em 1em;
      cursor: pointer;
      transition: all 250ms ease-in-out;
    }
    a:hover{
      background: black;
      
    }
  }
}

</style>