import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/gallery';


export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getAllPhotosOfUser = async (_ownerId) => {
  const query = new URLSearchParams({
      where: `_ownerId="${_ownerId}"`,
      load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const getOne = async (photoId) => {
  const result = await request.get(`${baseUrl}/${photoId}`, );

  return result;
}

export const create = async (photoData) => {
  const result = await request.post(baseUrl, photoData);

  return result;
};

export const edit = async (photoId, photoData) => {
  const result = await request.put(`${baseUrl}/${photoId}`, photoData);

  return result;
};

export const remove = async (photoId) => request.remove(`${baseUrl}/${photoId}`);

