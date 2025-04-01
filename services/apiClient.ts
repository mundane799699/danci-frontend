import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use((res) => {
  const { data, status } = res;
  if (status === 200) {
    return data;
  } else {
    return Promise.reject(data);
  }
});

export default apiClient;
