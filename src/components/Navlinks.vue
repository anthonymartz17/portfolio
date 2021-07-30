<template>
  <div>
    <ul class="side-bar-links" v-for="(link,key) in links" :key="key">
      <li @click="showMenu">
       <router-link :to="{name:link.name}" :class="{tabs:true}">
          <i :class="[link.class]"></i>
          <p> {{link.link}}</p>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['showMenu'],
  data(){
    return{
      
      
      links:[
        {id:1, link:"Home", class:"fas fa-home", name:'Home'},
        {id:2, link:"About", class:"far fa-address-card", name:'About'},
        {id:3, link:"Projects", class:"fas fa-briefcase", name:'Projects'},
        {id:4, link:"Contact", class:"far fa-envelope", name:'Contact'},
      ]
    }
  },
  methods:{
    // addActive(link,e){
    
    //     this.links.forEach(one =>{
    //       one.isActive = false 
    //     })
    //     if(e.target.parentElement.id == link.id){
    //       link.isActive = true
  
      
    //   }
    //         // console.log('no se lo otro, pero yo toy funcionando')  
    // }
  }

}
</script>

<style lang='scss'>

a.router-link-exact-active{
  color: $primary;
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


.side-bar-links{
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