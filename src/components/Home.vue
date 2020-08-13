<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
          <el-menu
            :default-active="this.$route.path"
            router
            mode="horizontal"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409EFF"
          >
            <el-menu-item
              v-for="(item, i) in navList"
              :key="i"
              :index="item.name"
              @click="changeTabs(item)"
              style="text-align:left;width:100%;border-bottom:none !important;"
            >
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span> {{ item.meta.title }}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>

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
        <el-main>
          <el-tabs v-model="editableTabsValue"
                   type="card"
                   closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
                <component :is="item.componentName"></component>
            </el-tab-pane>
          </el-tabs>
<!--          <el-breadcrumb-->
<!--            class="breadcrumb-container"-->
<!--            separator-class="el-icon-arrow-right"-->
<!--          >-->
<!--            <el-breadcrumb-item-->
<!--              style="margin-bottom: 20px;"-->
<!--              v-for="(item, index) in levelList"-->
<!--              :key="index"-->
<!--              :to="{ path: item.path }"-->
<!--              >{{ item.meta.title }}</el-breadcrumb-item-->
<!--            >-->
<!--          </el-breadcrumb>-->
<!--          <transition>-->
<!--            <keep-alive>-->
<!--              <router-view></router-view>-->
<!--            </keep-alive>-->
<!--          </transition>-->

<!--          <p v-if="msgJson.msgFlog">{{ msgJson.msg }}</p>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import {routers} from "@/router/routers";
import {mapState} from 'vuex'

export default {
  props: ["msgJson", "author"],
  name: "Home",

  data: function() {
    return {
      msg: "主题的内空就是在这里显示了。哈哈",
      navList:routers,
      levelList: [],
      editableTabsValue: '',
      editableTabs: [],
    };
  },
  computed:{
    ...mapState(['tabsInfo'])
  },
  methods: {
    oneone: function() {
      console.log("oneone");
      this.$router.push({
        name: "HelloWorld"
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !== "Home".toLocaleLowerCase()
      ) {
        matched = [{ path: "/Home", meta: { title: "首页" } }].concat(matched);
      }
      this.levelList = matched;
    },
    //切换tab 不过既然一直都在这个页面可以考虑不用vuex保存数据
    changeTabs(item){
      //检查是不是重复
      let title = item.meta.title
      let notUnique = false
      notUnique  = this.editableTabs.some(function(val){
        return val.title == title;
      })
      this.editableTabsValue = item.name;
      if (!notUnique){
        this.editableTabs.push({
          title:title,
          name:this.editableTabsValue,
          componentName: item.component
        })
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
  },
  mounted() {//刷新时根据当前路由，生成tab

  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  components: {
    mainshow: HelloWorld
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
