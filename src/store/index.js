import { createStore } from 'vuex';
import marketStore from './modules/market-store.js';

const store = createStore({
  strict: true,
  modules: {
    marketStore,
  },
});

export default store;
