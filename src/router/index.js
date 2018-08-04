import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index/Home'
import Classinfo from '@/components/page/classinfocation/Classinfo'
import Itlist from "@/components/page/classinfocation/ITlist"
import Designlist from "@/components/page/classinfocation/DesignList"
import Languagelist from "@/components/page/classinfocation/LanguageList"
import Mask from "@/components/page/classinfocation/Mask"
import Info from "@/components/page/Course/Info"
import Course from "@/components/page/Course/Course"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:"/",
      name:"Home",
      component:Home
    },
    {
      path:"/home",
      name:"Home",
      component:Home
    },
    {
      path:"/classinfo",
      name:"Classinfo",
      component:Classinfo,
      children: [
        {
          path:'itlist',
          component:Itlist
        },{
          path:'designlist',
          component:Designlist
        },
        {
          path:'languagelist',
          component:Languagelist
        },
      ],redirect:'itlist'
    },
    {
      path:'/classinfo/mask',
      name:'Mask',
      component:Mask
    },
    {
      path:'/course',
      name:'Course',
      component:Course,
      children:[
        {
          path:'Info',
          name:'Info',
          component:Info
        }
      ]
    }
  ]
})

