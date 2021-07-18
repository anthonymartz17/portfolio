<template>
  <div>
    <ul v-for="(link,key) in links" :key="key">
      <li :id="link.id" :class="{active:link.active}">
       <router-link :to="{path:link.path}" @click.native="addActive(link,$event)" :class="{active: link.isActive, tabs:true}">
          <i :class="[link.class]"></i>
          <p> {{link.link}}</p>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
      
      links:[
        {id:1, link:"Home", class:"fas fa-home", isActive:true, path:'/'},
        {id:2, link:"About", class:"far fa-address-card", isActive:false, path:'/about'},
        {id:3, link:"Projects", class:"fas fa-briefcase",isActive:false, path:'/projects'},
        {id:4, link:"Contact", class:"far fa-envelope",isActive:false, path:'/contact'},
      ]
    }
  },
  methods:{
    addActive(link,e){
    
        this.links.forEach(one =>{
          one.isActive = false 
        })
        if(e.target.parentElement.id == link.id){
          link.isActive = true
  
      
      }
            // console.log('no se lo otro, pero yo toy funcionando')  
    }
  }

}
</script>

<style lang='scss'>

.active{
  color: $logo-bg;
}
 .tabs{
       display: flex;
       align-items: baseline;
       padding: 1em 2em;
       gap: 1em;
        width: 100%;
      font:$font-title-md;
      color: $white;
    }


ul{
   &:last-child{
      border-bottom: 2px solid darken($dark, 5%);

    }
 
  li{
    display: flex;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    
       
    
   
    &:hover{
      background: lighten($dark,10%);
    }

   
    i{
       pointer-events: none;
      

    }
  }
}

</style>