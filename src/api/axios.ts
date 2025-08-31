import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean; _retryCount?: number };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest._retryCount && originalRequest._retryCount >= 5) {
        // after 5 tries → logout user
        console.error("Max retry attempts reached. Logging out.");
        window.location.href = "/register";
        return Promise.reject(error);
      }

      originalRequest._retry = true;
      originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;

      if (isRefreshing) {
        // queue requests until refresh is done
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => instance(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        await instance.post("/auth/refresh");
        processQueue(null); // release queued requests
        return instance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        console.error("Refresh failed → redirect to login", refreshError);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
