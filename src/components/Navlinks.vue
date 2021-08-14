<template>
  <div>
    <ul class="side-bar-links" v-for="(link,key) in links" :key="key">
      <li @click="toggleMobileNav(); isRouteHome($route)">
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
  
  props:['toggleMobileNav','links'],

  methods:{

    // sends current route to the root component to update the showName property
    isRouteHome(route){
      this.$emit('isRouteHome',route) 
    }
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