import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "https://api.apiopen.top";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: JSON.parse(sessionStorage.getItem('list')) || [],
    id: sessionStorage.getItem('id') || 1,
    token: sessionStorage.getItem('token') || '',
    uname: sessionStorage.getItem('uname') || ''
  },
  mutations: {
    add(state, a) {
      Vue.set(a, "id", state.id);
      state.list.push(a);
      state.id++;
      sessionStorage.setItem('list', JSON.stringify(state.list));
      sessionStorage.setItem('id', state.id);
    },
    del(state, id) {
      state.list.forEach((elem, index, arr) => {
        if (elem.id == id) {
          arr.splice(index, 1);
          return;
        }
      })
    },
    change(state, a) {
      state.list.forEach(elem => {
        if (elem.id == a.id) {
          elem.isFinish = a.check;
          return
        }
      })
      // console.log(a.check)
      sessionStorage.setItem("list", JSON.stringify(state.list));
    },
    setInfo(state, a) {
      // 保存到仓库state
      state.token = a.code;
      state.uname = a.message;
      // 保存到sessionStorage
      sessionStorage.setItem('token', a.code);
      sessionStorage.setItem('uname', a.message);
    },
    // 退出(清空信息)
    clearToken(state) {
      state.token = "";
      state.uname = "";
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('uname');
      sessionStorage.removeItem('list');
      sessionStorage.removeItem('id');
    }
  },
  getters: {
    // 已完成的
    getFinish(state) {
      var result = state.list.filter((elem, index, arr) => {
        return elem.isFinish == true;
      });
      return result;
    },
    // 未完成
    getUnFinish(state) {
      var result = state.list.filter((elem, index, arr) => {
        return elem.isFinish == false;
      });
      return result;
    },
  },
  // 网络请求(进行异步操作)
  actions: {
    // 登录
    login(store, a) {
      var params = "type=text&count=5&page=1";
      // promise 避免回调地狱
      return new Promise((callback) => {
        axios.post("/getJoke", params).then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            // 把请求的数据发送到mutations方法里
            store.commit('setInfo', res.data);
            callback();
          } else {
            alert('登录失败');
          }
        })
      })
    },
    // 退出
    logOut(store) {
      var info = "token=" + sessionStorage.getItem('token');
      return new Promise((callback) => {
        axios.post("/getJoke", info).then(res => {
          if (res.data.code == 200) {
            store.commit('clearToken');
            callback();
          } else {
            alert('退出失败');
          }
        })
      })
    }
  },
  modules: {}
})