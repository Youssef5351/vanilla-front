import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://vanilla6.vercel.app',
  withCredentials: true 
});


axiosClient.interceptors.request.use(config => {
  config.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  return config;
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
  return config
});

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('TOKEN')
    window.location.reload();
    return error;
  }
  throw error;
})

export default axiosClient;
