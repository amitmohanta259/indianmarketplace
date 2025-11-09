import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5005/api", // ✅ backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ⬇️ Attach/remove token dynamically
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Optional tenant support
export const setTenantHeader = (tenant: string) => {
  if (tenant) {
    api.defaults.headers.common["x-tenant-name"] = tenant;
  } else {
    delete api.defaults.headers.common["x-tenant-name"];
  }
};

// Restore saved token on startup
const storedToken = localStorage.getItem("token");
if (storedToken) setAuthToken(storedToken);

export default api;
