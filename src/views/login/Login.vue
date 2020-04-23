<template>
  <div id="login">
    <nav>
      <p>欢迎登陆</p>
    </nav>
    <div class="login">
      <h3 class="pp">{{getUname}}</h3>
      <label for="uname">
        用户名:
        <input id="uname" v-model="uname" type="text" placeholder="请输入用户名" />
      </label>
      <br />
      <label for="pwd">
        密&nbsp;码:
        <input id="pwd" v-model="pwd" type="password" placeholder="请输入密码" />
      </label>
      <br />
      <button @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      uname: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      var obj = {
        uname: this.uname,
        upwd: this.pwd
      };
      this.$store.dispatch("login", obj).then(res => {
        // 登录成功 跳转首页
        this.$router.push("/home");
      });
    }
  },
  computed: {
    // 获取登录成功之后的用户名用于展示到页面
    getUname() {
      return this.$store.state.uname;
    }
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: rgb(50, 50, 50);
  color: #fff;
  font-size: 25px;
  text-align: center;
}
.login {
  width: 400px;
  height: 400px;
  /* margin: 100px auto; */
  /* 使div水平垂直居中 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #aeaeae;
  box-shadow: 1px 1px 10px 1px rgba(100, 100, 100, 0.8);
}
h3 {
  margin-top: 30px;
}
.login label {
  margin-left: 20px;
  font-weight: 600;
}
.login button {
  margin-top: 50px;
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}
.login input {
  width: 270px;
  height: 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-left: 10px;
  margin-top: 50px;
  text-indent: 10px;
}
</style>