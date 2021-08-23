import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


  state: {
            
            // root component
            mobile:false,
            mobileNav:false,
            showName:false,
            moreAboutProject: false,
            
            links:[
                    {id:1, link:"Home", class:"fas fa-home", name:'Home'},
                    {id:2, link:"About", class:"far fa-address-card", name:'About'},
                    {id:3, link:"Projects", class:"fas fa-briefcase", name:'Projects'},
                    {id:4, link:"Contact", class:"far fa-envelope", name:'Contact'},
            ],

            // about component 
            pageAni:false,
            aboutHeading:'About Me',
            aboutPersonalDescription:'She ran desperately towards the room, scared, she had heard the violent knocks on the desk and the unusual screaming that resonated in an always quiet house. By the time she got to the room, There I was, lying on the chair, with my head thrown back over the top of the back of the seat.',
            techSkills:[
                        {skill:"JavaScript", color:'#f0db4f', iconClass:"fab fa-js", background:'#323330'},
                        {skill:"Vue.js/Vuex", color:'#42b883', iconClass:"fab fa-vuejs"},
                        {skill:"Sass", color:'#cc6699', iconClass:"fab fa-sass"},
                        {skill:"CSS3", color:'#264de4', iconClass:"fab fa-css3"},
                        {skill:"Bootstrap", color:'#563d7c', iconClass:"fab fa-bootstrap"},
                        {skill:"HTML5", color:'#e34c26', iconClass:"fab fa-html5"},
                      ],

            otherSkills:["Problem-Solving","Adaptability","Resilience","Passion for learning","Empathy","Communication"],

            // Projects Component
            projects:[
                      {   id:1,
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
                  ],

              // Contacts Component
              contactTitle:'Contact',
              contactDescription:"Let's work together with dedication and commitment! ",

              // Footer Component
              currentYear:new Date().getFullYear(),
              contacts:[
                        {media:"https://github.com/anthonymartz17?tab=repositories", icon:"fab fa-github"},
                        {media:"https://www.instagram.com/anthonymartz17/", icon:"fab fa-instagram"},
                        {media:"https://www.facebook.com/", icon:"fab fa-facebook-square"},
                  
                      ],

              // NavLinks Component



  










  },
  mutations: {
                isHome(state,route){
                  if(route.name == 'Home'){
                    state.showName = true
                  }else{
                    state.showName = false
                  }
                },
                isRouteHome(state,route){
                  
                  if(route.name == 'Home'){
                    state.showName = true
                  }else{
                    state.showName = false
                  }
                },
               

                toggleMobileMenu(state){
                  if(window.innerWidth <= 414){
                    state.mobileNav = !state.mobileNav
                  }
                },
                handleDesktopMenu(state){
                   
                  if(window.innerWidth <= 414){

                    state.mobile = true
                    
                    
                  } else{
                    state.mobile = false
                    state.mobileNav = false
                  }
       
                },
  },
  actions: {
  },
  modules: {
  }
})
