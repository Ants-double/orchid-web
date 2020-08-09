import User from "@/components/User";
import Management from "@/components/Management";
import TestVuex from "@/components/TestVuex"
const  routers  =  [
    {
        path: '/Home',
        name: '/Home',
        component:Management,
        meta:{title:'首页',icon:'example',noCache:true}
    },
    {
     path: '/Management',
     name: '/Management',
     component:Management,
     meta:{title:'权限管理',icon:'example',noCache:true}
   },
    {
     path: '/User',
     name: '/User',
     component:User,
     meta:{title:'用户',icon:'example',noCache:true}
   
   },
   {
    path: '/TestVuex',
    name: '/TestVuex',
    component:TestVuex,
    meta:{title:'测试vuex',icon:'example',noCache:true}
  }
  ]

  export  {routers}