// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/article-requests';

// // Set up axios instance
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add request interceptor to include auth token if available
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const submitRequest = (data) => api.post('/submit', data);

// export const fetchUserRequests = (email) => 
//   api.get(`/user/${email}`).then(res => res.data);

// export const downloadArticle = (id) => 
//   api.get(`/${id}/download`, { responseType: 'blob' });

// // Add more API calls as needed

// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/article-requests';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: { 'Content-Type': 'application/json' },
// });

// // Fetch requests by PRN
// export const fetchUserRequests = (prn) =>
//   api.get(`/user/requests/${prn}`).then(res => res.data);

// // Download article file by request ID
// export const downloadArticle = (id) =>
//   api.get(`/${id}/download`, { responseType: 'blob' });



// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: { 'Content-Type': 'application/json' },
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export const loginUser = (data) => api.post('/auth/login', data).then(res => res.data);
// export const registerUser = (data) => api.post('/auth/register', data).then(res => res.data);

// export const submitRequest = (data) => api.post('/requests', data).then(res => res.data);
// export const fetchUserRequests = () => api.get('/requests').then(res => res.data);



import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const loginUser = (prn) => api.post('/auth/login', { prn }).then(res => res.data);

export const fetchProtectedData = (token) =>
  api.get('/protected-route', {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.data);

// ✅ Add these:
export const submitRequest = (requestData, token) =>
  api.post('/requests', requestData, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.data);

export const fetchUserRequests = (token) =>
  api.get('/requests/user', {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.data);
