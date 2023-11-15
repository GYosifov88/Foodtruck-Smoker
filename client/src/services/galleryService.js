const baseUrl = 'http://localhost:3030/jsonstore/gallery';

export const getAllPictures = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOnePic = async (picId) => {
  const response = await fetch(`${baseUrl}/${picId}`);
  const result = await response.json();

  return result;
};

export const create = async (data) => {
  const body = {
      category: data.category,
      title: data.title,
      place: data.place,
      imageUrl: data.imageUrl,
  };

  const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
  })

  const result = await response.json();
  console.log(result);

  return result;
};