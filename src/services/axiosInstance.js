import axios from "axios";

// შევქმენი აქსიონი ინსტანსი
const axiosInstance = axios.create({
  baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
  },
});

// ინტერსეფტორი რო დავამატო ტოკენები
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // გავუგზავნოთ ორივე
    if (refreshToken) {
      config.headers["x-refresh"] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// დავჰენდლოთ ერორი
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    if (
      error.response &&
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // ერთი ლუპისაც

      try {
        // თავიდან ვაგზავნით
        originalRequest.headers["x-refresh"] = refreshToken;
        return axiosInstance(originalRequest); // დავარაქვესტოთ
      } catch (refreshError) {
        console.error(
          "Failed to handle the refresh token. Logging out.",
          refreshError
        );
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        // დადავამისამართოთ;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
