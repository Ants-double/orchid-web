<template>
  <div>
    Home
    <p v-if="msgJson.msgFlog">{{msgJson.msg}}</p>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
   props: ['msgJson', 'author'],
  name: "Home",
 
  data: function() {
    return {
      msg: "Index page"
    };
  },
  methods: {
  },
  watch: {
    // deep:true,
    // immediate:true,
    // // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    //   '$route'(to,from){
    //     console.log(to);
    //      this.msgJson =this.$route.params.dataobj
    //     console.log( this.msgJson);

    //   }
      
  },
  created(){
   
  //  console.log(this.msgJson)
  }
};
</script>
