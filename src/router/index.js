import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "../components/Login";
import Home from "../components/Home";
import User from "../components/User";
import Management from "../components/Management";
Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/hello",
      name: "HelloWorld",
      components:{
        default: HelloWorld,
        mainshow: HelloWorld
      }
    },
    {
      path: "/",
      name: "Login",
      component: Login,
      props: { msgJson: { msg: "头部传参", msgFlog: true } }
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
      props: { msgJson: { msg: "头部传参", msgFlog: true } },
      meta:{title:'首页',icon:'example',noCache:true},
      children:[
        
        {
         path: 'components/Management',
         name: 'Management',
         components:{
           default: Management
         },
         meta:{title:'权限管理',icon:'example',noCache:true}
        
       },
        {
         path: 'components/User',
         name: 'User',
         components:{
          default: User
         },
         meta:{title:'用户',icon:'example',noCache:true}
       
       }
      ]
    }
  ]
});
