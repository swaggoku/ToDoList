<template>
  <div id="hello-world">
    <nav>
      <p>ToDoList</p>
      <input
        type="text"
        v-model="message"
        placeholder="添加ToDo"
        :title="message.length > 0 ? '':title"
        @keydown.enter="add"
      />
      <a href>欢迎{{getUname}}</a>
      <a href @click.prevent="out">注销</a>
    </nav>
    <div class="content">
      <un-finish></un-finish>
      <hr />
      <finish></finish>
    </div>
    <footer>
      <p>Copyright © 2014 todolist.cn clear</p>
    </footer>
  </div>
</template>

<script>
import Finish from "./Finish";
import UnFinish from "./UnFinish";

export default {
  name: "HelloWorld",
  data() {
    return {
      message: "",
      title: "请填写此字段"
    };
  },
  components: {
    Finish,
    UnFinish
  },
  methods: {
    // 添加信息到vuex的list数组
    add() {
      var obj = {
        message: this.message,
        isFinish: false
      };
      this.$store.commit("add", obj);
      this.message = "";
      // console.log(this.$store.state.list)
    },
    // 退出用户
    out() {
      this.$store.dispatch("logOut").then(res => {
        this.$router.push("/");
      });
    }
  },
  computed: {
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
  display: flex;
  justify-content: space-around;
}
nav p {
  float: left;
  color: #fff;
  font-size: 25px;
}
nav input {
  width: 400px;
  height: 30px;
  margin-top: 17px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding-left: 10px;
}
nav a {
  color: #fff;
  text-decoration: none;
}
footer {
  padding: 15px;
  text-align: center;
}
footer p {
  color: #666666;
}
</style>