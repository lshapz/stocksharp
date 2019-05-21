import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TOKEN: 'pk_7826e5bc087a470e8ae1d098fa361af9',
    allStocks: [],
    selectedTicker: '',
    selectedStock: {},
  },
  getters: {
    allStocksAbridged(state, getters) {
      return state.allStocks.map( item => {
        return {symbol: item['symbol'], name: item['name']};
      });
    },
  },
  mutations: {
    getStocks(state, payload) {
      state.allStocks = payload;
    },
    setSelected(state, payload) {
      state.selectedTicker = payload;
    },
    getSelected(state, payload) {
      state.selectedStock = payload;
    },
  },
  actions: {
    getAllStocks(context) {
      axios.get('https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_7826e5bc087a470e8ae1d098fa361af9')
        .then( (response) => {
          context.commit('getStocks', response.data);
        });
    },
    getSelectedStockData(context, payload) {
      context.commit('setSelected', payload);
      axios.get(`https://cloud.iexapis.com/stable/stock/${payload}/quote?token=pk_7826e5bc087a470e8ae1d098fa361af9`)
        .then( (response) => {
          context.commit('getSelected', response.data);
        });
    },
  },
});
