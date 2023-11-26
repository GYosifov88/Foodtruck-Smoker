import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/data/events';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (eventId) => {
    const result = await request.get(`${baseUrl}/${eventId}`, );
  
    return result;
  }