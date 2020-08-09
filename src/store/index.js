import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
   userList:{},
   tabsInfo:{}
  },
  mutations: {
    // 更新用户列表信息
    UpdateUserList(state,info){
        state.userList = info;
    },
  }
})

export default store