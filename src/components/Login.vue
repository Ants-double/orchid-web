<template>
  <div>
    <div class="Login">
      <div style="margin-bottom: 130px;">
        <h1 id="title">{{ msg }}</h1>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item label="用户名" prop="username">
            <el-input ref="username" v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" ref="password" v-model="loginForm.password"></el-input>
          </el-form-item>

          <div style="display:flex;justify-content:flex-end;">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetForm('loginFormRef')"
            >重置</el-button
            >
          </div>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
import Home from "../components/Home";
import api from "@/request/request"
import {mapState} from 'vuex'
export default {
  name: "Login",
  data: function() {
    return {
      msg: "****登录页",
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login: function() {
      api.userLogin(this.loginForm).then(res => {
          let data = res.data
          if (data.code == '666666'){
            //缓存用户信息
            this.$router.push({
              name: "Home",
              props: { msgJson: this.msgJson }
            });
          }else{
            this.$message.error(data.msg);
          }
        })
        .catch(err => {
          this.$message.error('系统登录错误');
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  components: {
    Home
  }
};
</script>

<style scoped>
.Login {
  width: 500px;
  overflow: hidden;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
h1 {
  margin: 0px 0px 50px 0px;
}
</style>
