import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

const KEY = 'marketDB';

export const marketService = {
  query,
  getById,
  remove,
  save,
  getEmptyMarket,
};

_createMarkets();

async function query() {
  try {
    return await storageService.query(KEY);
  } catch (e) {
    console.error(e)
  }
}

async function getById(id) {
  try {
    return await storageService.get(KEY, id);
  } catch (e) {
    console.error(e)
  }
}

async function remove(id) {
  try {
    return await storageService.remove(KEY, id);
  } catch (e) {
    console.error(e)
  }
}

async function save(market) {
  try {
    const savedMarket = market._id
      ? await storageService.put(KEY, market)
      : await storageService.post(KEY, market);
    return savedMarket;
  } catch (e) {
    console.error(e)
  }
}

function getEmptyMarket(name = '', price = 100) {
  return {
    _id: '',
    name,
    price,
    createdAt: Date.now(),
    reviews: ['good', 'great', 'fine'],
  };
}

// Create Test Data:
function _createMarkets() {
  let markets = JSON.parse(localStorage.getItem(KEY));
  if (!markets || !markets.length) {
    markets = []
    for (let i = 0; i < 100; i++) {
      markets.push(_createMarket('Apple'))
    }
    localStorage.setItem(KEY, JSON.stringify(markets));
  }
  return markets;
}

function _createMarket(name) {
  const market = getEmptyMarket(name, utilService.getRandomInt(80, 300));
  market._id = utilService.makeId();
  return market;
}
