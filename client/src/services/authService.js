import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, username, password, confirm_password) => request.post(`${baseUrl}/register`, {
    email,
    username,
    password,
    confirm_password,
});

export const logout = () => request.get(`${baseUrl}/logout`);

export const getCurrentUser = async (userId) => {
    const result = await request.get(`${baseUrl}/me/${userId}`);

    return result;
};