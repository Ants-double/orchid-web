import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "../components/Login";
import Home from "../components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
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
      props: { msgJson: { msg: "头部传参", msgFlog: true } }
    }
  ]
});
