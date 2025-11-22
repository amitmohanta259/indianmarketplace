import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5006/api",
  headers: { "Content-Type": "application/json" },
});

/* ------------------ TOKEN MANAGEMENT ------------------ */
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const setTenantHeader = (tenant: string | null) => {
  if (tenant) {
    api.defaults.headers.common["x-tenant-name"] = tenant;
  } else {
    delete api.defaults.headers.common["x-tenant-name"];
  }
};

// Load saved tokens
let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");

if (accessToken) setAuthToken(accessToken);

/* ------------------ REFRESH TOKEN LOGIC ------------------ */

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });

  failedQueue = [];
};

/* ---- Add response interceptor ---- */
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // If unauthorized (401) and refresh token exists
    if (error.response?.status === 401 && refreshToken && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Queue requests while refreshing
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // Call backend refresh token route
        const res = await axios.post("http://localhost:5006/api/auth/refresh-token", {
          refreshToken,
        });

        const newAccess = res.data.accessToken;
        const newRefresh = res.data.refreshToken;

        // Store new tokens
        localStorage.setItem("accessToken", newAccess);
        localStorage.setItem("refreshToken", newRefresh);

        // Update axios default header
        setAuthToken(newAccess);

        processQueue(null, newAccess);

        // Retry failed request
        originalRequest.headers["Authorization"] = "Bearer " + newAccess;
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
