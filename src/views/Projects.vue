<template>
  <div>
    <div class="projects-section">
    <h2>My Work</h2>

  <div class="projects-section-container">
   
    <div :class="[project.classContainer]" v-for="(project,key) in projects" :key="key">
      <div :class="project.classDesktop"></div>
      <transition name="slideDown" appear>
      <div :class="project.classMobile"></div>
      </transition>
      <div class="overlay">
      <h3>{{project.projectName}}</h3>
      <p>{{project.description}}}</p>
      <div class="btn-container">
        <a href="#" @click="showMore(project)">Read more</a>
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
      // Projects Component
      projects:[
        {
          id:1,
          projectName:'To Do App', 
          description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
          classContainer:"each-project",
          classDesktop:"desktop1",
          classMobile:"mobile1"
          },
        {
          id:2,
          projectName:'Landing Page', 
          description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
          classContainer:"each-project",
          classDesktop:"desktop2",
          classMobile:"mobile2"
          },
          {
             id:3,
            projectName:'Github Finder', 
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!',
            classContainer:"each-project",
            classDesktop:"desktop3",
            classMobile:"mobile3"
            },
      ]
    }
  },
  methods:{
    showMore(project){
      this.$emit('showMoreEvent',project)
       
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
       margin: 2em;
      
      }

   
   h2{
      font:$font-title-lg;
       color: $dark;
       margin-block: 1em;
   }
 
&-container{

  display: flex;
  justify-content: space-evenly;
  gap: 1em;
  height: 100%;
  // background: lightgray;
  

  
  @include mobile{
       height: auto;
       display: block;
       padding-block: 1em;
      }
}


}

$desktopImg:(
   "desktop1":'../assets/images/todo-desktop.png',
   "desktop2":'../assets/images/github-finder-desktop.png',
   "desktop3":'../assets/images/landing-desktop.png'
);
$mobileImg:(
   "mobile1":'../assets/images/todo-mobile.png',
   "mobile2":'../assets/images/github-finder-mobile.png',
   "mobile3":'../assets/images/landing-mobile.png'
);



@each $name,$img in $desktopImg{
  .#{$name}{
    
     position: absolute;
     top: 0;
     left: 0;
     background-image: url($img);
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     width: 100%;
     height: 40vh;
  
  }
}
@each $name,$img in $mobileImg{
  .#{$name}{
    
     position: absolute;
     bottom: -40px;
     left: 0;
     background-image: url($img);
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     width: 100%;
     height: 38vh;
  
  }
}
.slideDown-enter, .slideDown-leave-to{
  transform: translateY(-110px);
}
.slideDown-enter-active, .slideDown-leave-active{
  transition: all .4s .6s ease-in-out;
}
.slideDown-enter-to,.slideDown-leave{
   transform: translateY(0px);
}

.each-project{
  position: relative;
  flex:1;
  height: 60vh;
  // border:1px solid lightblue;
 @include mobile{
        margin-bottom: 1em;
      }

  .overlay{
  
    position: absolute;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 500ms ease-in-out;
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