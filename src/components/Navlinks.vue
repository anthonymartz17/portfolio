<template>
  <div>
    <ul v-for="(link,key) in links" :key="key">
      <li :id=link.id @click="addActive(link,$event)">
        <i :class="[link.class]"></i>
        <a :class="{active:link.isActive}" href="#">{{link.link}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      links:[
        {id:1, link:"Home", class:"fas fa-home", isActive:true},
        {id:2, link:"About", class:"far fa-address-card", isActive:false},
        {id:3, link:"Projects", class:"fas fa-briefcase",isActive:false},
        {id:4, link:"Contact", class:"far fa-envelope",isActive:false},
      ]
    }
  },
  methods:{
    addActive(link,event){
      this.links.forEach(one =>{
        one.isActive = false 
      })
      if(event.target.id == link.id){
        link.isActive = true
    
        }
        
    }
  }

}
</script>

<style lang='scss'>

.active{
  color: $logo-background;
}

ul{
   &:last-child{
      border-bottom: 2px solid darken($dark, 5%);

    }
 
  li{
    display: flex;
    justify-content: start;
    align-items: baseline;

    
    padding: 1em;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    
   
    &:hover{
      background: lighten($dark,10%);
    }

    a,i{
      color: $white;
      font:$font-title-md;
      margin-inline: 1em;
      
    }
  }
}

</style>