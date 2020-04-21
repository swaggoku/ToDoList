import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: JSON.parse(sessionStorage.getItem('list')) || [],
    id: sessionStorage.getItem('id') || 1
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
      // state.list.splice(a, 1)
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
    }
  },
  actions: {},
  modules: {}
})