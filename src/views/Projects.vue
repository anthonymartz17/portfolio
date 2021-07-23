<template>
  <div>
    <div class="projects-container">
    <h2>My Work</h2>

  <section>

    <div class="each-project project1">
      <h3>To Do APP</h3>
      <div class="img-container">
        <img src="@/assets/images/todoApp.png" alt="">
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div class="btn-container">
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
    </div>
    <div class="each-project project2">
      <h3>CRUD Maintance Project</h3>
      <div class="img-container">
        <img src="@/assets/images/crudMaintance.png" alt="">
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div class="btn-container">
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
    </div>
    <div class="each-project project3">
      <h3>Github Finder</h3>
      <div class="img-container">
        <img src="@/assets/images/github-finder.png" alt="">
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div class="btn-container">
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
    </div>
    <div class="each-project project4">
      <h3>Weather App</h3>
      <div class="img-container">
        <img src="@/assets/images/weatherApp.png" alt="">
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div class="btn-container">
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
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

.projects-container{
 
 
  padding: 1em;
   
   h2{
     text-align: center;
     margin: 1em;
   }
  p{
    text-align: center;
  }

  section{
   @include tablet{
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1em;
     
 }
  }

}

.each-project{
  @include tablet{
    margin-block: 0;
  }
  margin-block: 1em;
  padding-block: .5em;
  border: 1px solid rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20em ;
  gap: .5em;
 
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