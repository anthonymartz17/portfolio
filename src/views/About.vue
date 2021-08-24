<template>
  <div>
    <div class="about-container">
      <h2>{{$store.state.aboutHeading}}</h2>
      <p>{{$store.state.aboutPersonalDescription}}</p>
      
      <div class="about-skills">
        <div class="about-skills-techskills">
          <div class="about-skills-title">
            <i class="fas fa-laptop-code fa-2x"></i>
            <h5>Technical Skills</h5>
          </div>
          <transition-group
           name="slideUp"
           class="about-skills-list tech-list"
           tag="ul"
           appear
        
           
           >
            <li v-for="(skill, key) in $store.state.techSkills" :key="key" :id="key">
              <i :class="skill.iconClass" :style="{ fontSize:'2em'}"></i>
              <span> {{skill.skill}}</span>
              
              </li>
          </transition-group>
        </div>
      
        <div class="about-skills-otherskills pageAnimation">
          <div class="about-skills-title">
            <i class="fas fa-hands-helping fa-2x"></i>
            <h5>Other Skills</h5>
          </div>
          <ul class="about-skills-list otherskills-list">
            <li  v-for="(skill, key) in $store.state.otherSkills" :key="key">{{skill}}</li>
          </ul>
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

.list-enter{
  transform: translateY(200px);
}
.list-enter-to{
  transform: translateY(0px);
}
.list-enter-active{
  transition: all .6s .8s ease-in-out;
}

.pageAnimation{
  animation: page .8s ease-in-out ;
 
}

@keyframes page{
  0% {
      transform: translateY(10px);
      opacity: 0;
  };
  100%{
     transform: translateY(0px);
      opacity: 1;
  }
}

.about-container{
  margin: 2em 3em;
  height: 74vh;
 
 @include mobile{
   margin: 2em;
  height: auto;
 
 }
   
h2{

 font:$font-title-lg;
 color: $dark;
  
}
  p{
    font:$font-text;
    color: $dark;
    margin-block: 1em;

    // @include mobile{
    //   background: $white;
    //   padding: .5em;
    //   border-radius: 5px;
    // }
    
  }

  .about-skills{
   
    display: flex;
    justify-content: space-evenly;
    gap: 5em;
    margin-block: 3em;
    
    
   @include mobile{
     flex-direction: column;
     gap: 3em;
   }
    
    &-title{
      // text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: .5em;
      font: $font-title-lg;
      flex: 1;
      background:$primary;
      color: $white;

      @include mobile{
        padding-block: 1em;
      }
    }

     &-list {
      //  background: red;
      padding: 1em;
       display: grid;
      
       align-items: baseline;
       border-right: 1px solid lighten($dark, 40%);
       text-align: start;
       flex: 1; 
       @include mobile{
        // padding-left: 4em;
        border: none;
        // align-self: center;
        width: 70%;
        height: 50vh;
      
        
      }
    }
    
    &-otherskills{
      
         li::before{
      content: '-';
      font-weight: 900;
      padding-right: .4em;
      color: $dark;
    }
    
    }

     &-techskills, &-otherskills{
       height: 40vh;
       flex: 1;
       display: flex;
       gap: 3em;
       box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
       color: $dark;
       position: relative;
       font:$font-text;


      @include mobile{

        flex-direction: column;
        gap: 1em;
   }
   
   
    li{
      line-height: 1.8;
    }
 
  }
    
  }

  // .tech-list{
    
  //        @include mobile{
  //       padding-left: 4em; 
        
      
  //     }
  // }
  // .otherskills-list{
    
  //        @include mobile{
  //       padding-left: 3em; 
        
      
  //     }
  // }
 

}

</style>