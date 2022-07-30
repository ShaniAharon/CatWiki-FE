import { storageService } from './async-storage.service.js';
// import { utilService } from './util.service.js';

const KEY = 'breedDB';

export const breedService = {
  query,
  getById,
  remove,
  save,
  getEmptyBreed,
};

// _createBreeds();

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

async function save(breed) {
  try {
    const savedBreed = breed._id
      ? await storageService.put(KEY, breed)
      : await storageService.post(KEY, breed);
    return savedBreed;
  } catch (e) {
    console.error(e)
  }
}

// function getEmptyBreed(name = '', price = 100) {
//   return {
//     _id: '',
//     name,
//     price,
//     createdAt: Date.now(),
//     reviews: ['good', 'great', 'fine'],
//   };
// }

// // Create Test Data:
// function _createBreeds() {
//   let breeds = JSON.parse(localStorage.getItem(KEY));
//   if (!breeds || !breeds.length) {
//     breeds = []
//     for (let i = 0; i < 20; i++) {
//       breeds.push(_createBreed('Apple'))
//     }
//     localStorage.setItem(KEY, JSON.stringify(breeds));
//   }
//   return breeds;
// }

// function _createBreed(name) {
//   const breed = getEmptyBreed(name, utilService.getRandomInt(80, 300));
//   breed._id = utilService.makeId();
//   return breed;
// }
