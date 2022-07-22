import { marketService } from '../../services/market.service.js';
import { apiService } from '../../services/api.service.js';

export default {
  state: {
    markets: null,
    filterBy: null,
    isLoading: false,
  },
  getters: {
    markets(state) {
      return state.markets;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setMarkets(state, { markets }) {
      state.markets = markets;
    },
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading;
    },
    removeMarket(state, { id }) {
      const idx = state.markets.findIndex((market) => market._id === id);
      state.markets.splice(idx, 1);
    },
    saveMarket(state, { market }) {
      const idx = state.markets.findIndex(
        (currMarket) => currMarket._id === market._id
      );
      if (idx !== -1) state.markets.splice(idx, 1, market);
      else state.markets.unshift(market);
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    async loadMarkets({ commit, state }) {
      // commit({type: 'setIsLoading', isLoading: true});
      try {
        var markets = await marketService.query(state.filterBy);
        commit({ type: 'setMarkets', markets });
      } catch (err) {
        console.error('Cannot Load markets', err);
        throw err;
      }
      // finally {
      //   commit({type: 'setIsLoading', isLoading: false});
      // }
    },
    async saveMarket({ commit }, { market }) {
      try {
        const savedMarket = await marketService.save(market)
        commit({ type: 'saveMarket', market: savedMarket })
      } catch (err) {
        console.error('Cannot save market', err);
        throw err;
      }
    },
    async removeMarket({ commit }, { id }) {
      try {
        await marketService.remove(id);
        commit({ type: 'removeMarket', id });
      } catch (err) {
        console.error('Cannot remove market', err);
        throw err;
      }
    },
    async getMarketById(context, { marketId }) {
      try {
        return await marketService.getById(marketId);
      } catch (err) {
        console.log(err);
      }
    },
    async getData({ commit }, { month }) {
      try {
        return await apiService.getMarketData()
      } catch (err) {
        console.log(err);
      }
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadMarkets' });
    },
  },
};
