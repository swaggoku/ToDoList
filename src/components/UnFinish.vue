<template>
  <div id="finish">
    <h2>
      正在进行
      <span>{{getUnFinish.length}}</span>
    </h2>
    <ul>
      <li v-for="item in getUnFinish" :key="item.id">
        <input @change="change($event,item.id)" type="checkbox" />
        <p>{{item.message}}</p>
        <a @click="del(item.id)" href="javascript:void(0)">-</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UnFinish",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    del(id) {
      this.$store.commit("del", id);
    },
    change(e,id) {
      var obj = {
        check: e.target.checked,
        id: id
      };
      this.$store.commit("change", obj);
    }
  },
  computed: {
    getUnFinish() {
      return this.$store.getters.getUnFinish;
    }
  }
};
</script>

<style scoped>
#finish {
  padding: 15px;
  width: 600px;
  margin: 0 auto;
}
#finish span {
  float: right;
}
ul {
  margin-top: 10px;
}
ul li {
  height: 32px;
  line-height: 32px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
  padding: 0 45px;
  border-radius: 3px;
  border-left: 5px solid #629a9c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}
li a {
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  width: 14px;
  height: 12px;
  border-radius: 14px;
  border: 6px double #fff;
  background: #ccc;
  line-height: 14px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
ul p {
  display: inline-block;
  font-size: 18px;
}
ul input {
  position: absolute;
  top: 6px;
  left: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
</style>