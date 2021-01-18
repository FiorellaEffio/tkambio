import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    currentType: null,
    currentTypeSell: null
  },
  getters: {
    getCurrentType(state) {
      return state.currentType;
    },
    getCurrentTypeSell(state) {
      return state.currentTypeSell;
    }
  },
  mutations: {
    setCurrencyDataValues(state, data) {
      state.currentType = data.quotes['USDPEN'];
      state.currentTypeSell = data.quotes['USDPEN'] + 0.2;
    }
  },
  actions: {
    setCurrencyData(context) {
      axios
        .get('http://api.currencylayer.com/live?access_key=ae7c51efd65bbadf5ade163cb5520fd7&format=1&currencies=PEN')
        .then(response => {
          context.commit('setCurrencyDataValues', response.data);
        })
    }
  }
});
