import { httpService } from './http.service.js';

const ENDPOINT = 'photo';

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy);
}

async function getBreeds() {
  return await httpService.get(`${ENDPOINT}/breeds`);
}

async function getBreedImgs(breedId) {
  return await httpService.get(`${ENDPOINT}/breeds/img`, { breedId });
}

async function getById(photoId) {
  return await httpService.get(`${ENDPOINT}/${photoId}`);
}

async function remove(photoId) {
  return await httpService.delete(`${ENDPOINT}/${photoId}`);
}

async function save(photo) {
  // const photo = JSON.parse(JSON.stringify(photo));
  if (photo._id) {
    return await httpService.put(`${ENDPOINT}/${photo._id}`, photo);
  } else {
    return await httpService.post(ENDPOINT, photo);
  }
}

// async function addReview(photoId, review) {
//     return await httpService.post(`${ENDPOINT}/${photoId}/review`, review);
// }

function getEmptyPhoto() {
  const empty = {
    label: '',
    imgUrl: '',
  };
  return empty;
}

export const marketService = {
  query,
  getById,
  getEmptyPhoto,
  remove,
  save,
  getBreeds,
  getBreedImgs
  // addReview
};
