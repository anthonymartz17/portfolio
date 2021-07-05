<template>
  <div>
    <div class="projects-container">
    <h2>My Work</h2>

  <section>

    <div class="each-project project1">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div>image of project</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div>
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
    </div>
    <div class="each-project project2">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div>image of project</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div>
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
    </div>
    <div class="each-project project3">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div>image of project</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div>
        <a href="#">View Site</a>
        <a href="#">Code</a>
      </div>
    </div>
    <div class="each-project project4">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div>image of project</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, alias!</p>
      <div>
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
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  
  p{
    text-align: center;
  }

  section{
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

}

.each-project{
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>