const baseUrl = 'http://localhost:3030/jsonstore/gallery';

export const getAllPictures = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (menuid) => {
  const response = await fetch(`${baseUrl}/${menuid}`);
  const result = await response.json();

  return result;
};