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
      state.currentType = data.rates['PEN'];
      state.currentTypeSell = data.rates['PEN'] + 0.2;
    }
  },
  actions: {
    setCurrencyData(context) {
      axios
        .get('https://currencyapi.net/api/v1/rates?key=gmmqGhrfkkCuEb0g1OdYjvgMx5tDA4ox9VUW&base=USD')
        .then(response => {
          context.commit('setCurrencyDataValues', response.data);
        })
    }
  }
});
