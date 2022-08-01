import { breedService } from '../../services/breed.service.js';
import { marketService } from '../../services/market.service.js';

export default {
  state: {
    markets: null,
    filterBy: null,
    isLoading: false,
    breeds: null,
    homeBreeds: null
  },
  getters: {
    markets(state) {
      return state.markets;
    },
    breeds(state) {
      return state.breeds;
    },
    homeBreeds(state) {
      return state.homeBreeds;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setMarkets(state, { markets }) {
      state.markets = markets;
    },
    setBreeds(state, { breeds }) {
      state.breeds = breeds;
    },
    setHomeBreeds(state, { homeBreeds }) {
      state.homeBreeds = homeBreeds;
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
        const markets = await marketService.query(state.filterBy);
        commit({ type: 'setMarkets', markets });
      } catch (err) {
        console.error('Cannot Load markets', err);
        throw err;
      }
      // finally {
      //   commit({type: 'setIsLoading', isLoading: false});
      // }
    },
    async loadBreeds({ commit, state }) {
      // commit({type: 'setIsLoading', isLoading: true});
      //breeds we want beng , sava , norw, srex
      try {
        const selects = ['beng', 'sava', 'norw', 'srex']
        let breeds = await breedService.query()
        if (!breeds.length) breeds = await marketService.getBreeds()
        breedService.createBreeds(breeds)
        const homeBreeds = breeds.filter(br => selects.includes(br.id))
        commit({ type: 'setBreeds', breeds });
        commit({ type: 'setHomeBreeds', homeBreeds });
      } catch (err) {
        console.error('Cannot Load breeds', err);
        throw err;
      }
      // finally {
      //   commit({type: 'setIsLoading', isLoading: false});
      // }
    },
    async getImgs({ commit }, { breedId }) {
      const breedImgs = await marketService.getBreedImgs(breedId)
      //TODO: can save in map obj all the imgs we got , to prevent a multi calls 
      console.log('breedImgs', breedImgs);
      return breedImgs

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
    async getBreedById(context, { breedId }) {
      try {
        return await breedService.getById(breedId);
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
