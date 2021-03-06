import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const userApi = {
  signIn: (body) => api.post('users/sign-in', body),
  signUp: (body) => api.post('users/sign-up', body),
  changePw: (body, token) =>
    api.patch('users/change-password', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  requestEmail: (body) => api.patch('users/password-lost', body),
  getUserInfo: (userId, token) =>
    api.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  setUserInfo: (userId, body, token) =>
    api.patch(`users/${userId}`, body, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
  withdrawal: (userId, body, token) =>
    api.post(`users/${userId}/withdraw`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export const warehouseApi = {
  getByMainItemTypes: (type, page, size) =>
    api.get('warehouses', {
      params: {
        mainItemTypes: `${type === null ? 'CLOTH' : `${type}`}`,
        page: `${page}`,
        size: `${size}`,
      },
    }),
  register: (body, token) =>
    api.post('warehouses', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getWarehouseInfo: (id) => api.get(`warehouses/${id}`),
  getWarehousesById: (userId, token) =>
    api.get(`users/${userId}/warehouses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export const estimateApi = {
  saveEstimate: (requestBody, token) =>
    api.post(`estimates`, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getEstimateInfo: (userId, token) =>
    api.get(`users/${userId}/estimates`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getEstimateItems: (estimateId, token) =>
    api.get(`estimates/${estimateId}/items`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export const imageApi = {
  uploadMainImage: (warehouseId, formData, token) =>
    api.post(`images/upload/main/${warehouseId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }),
  uploadExtraImage: (warehouseId, formData, token) =>
    api.post(`images/upload/${warehouseId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }),
};
