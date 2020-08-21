import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
   userInfo:null,
   userList:{},
   tabsInfo:{
     editableTabsValue: '0',
     tabIndex: 0,
     editableTabs: []
   }
  },
  mutations: {
    // 更新用户列表信息
    UpdateUserList(state,info){
        state.userList = info;
    },
    // 更新tab
    UpdateTabList(state,info){
      state.tabsInfo = info;
    },
  }
})

export default store
