<template>
  <div class="home">
    <el-container>
      <el-header>
        {{ msg }}

        <el-dropdown class="el-username">
          <i class="el-icon-setting" style="margin-right: 25px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="username">姓名</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>导航一</template
              >
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1" @click="oneone">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
          <p v-if="msgJson.msgFlog">{{ msgJson.msg }}</p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  props: ["msgJson", "author"],
  name: "Home",

  data: function() {
    return {
      msg: "主题的内空就是在这里显示了。哈哈"
    };
  },
  methods: {
    oneone:function(){
      console.log("oneone")
    }
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
  created() {
    //  console.log(this.msgJson)
  },
  components:{
    HelloWorld
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  position: relative;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  font-size: 26px;
  height: 60px;
}

.el-username {
  font-size: 18px;
  padding-left: 40px;
  position: absolute;
  top: 10px;
  right: 100px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.username {
  font-size: 18px;
  padding-left: 30px;
  position: absolute;
  top: 10px;
  right: 70px;
  height: 40px;
  line-height: 40px;
}
.el-aside {
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100%;
}
.el-container {
  height: 100%;
  border: 1px solid #eee;
}
.home {
  height: 100%;
}
</style>
