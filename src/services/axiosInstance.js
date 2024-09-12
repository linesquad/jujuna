import axios from "axios";

// შევქმენი ინსტანსი
const axiosInstance = axios.create({
  baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

// რექვესთზე შევინახე ტოკენები
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    if (refreshToken) {
      config.headers["x-refresh"] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // თუ დაგვიბრუნდა
    const newAccessToken = response.headers["x-new-access-token"];
    const newRefreshToken = response.headers["x-new-refresh-token"];

    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
    }

    if (newRefreshToken) {
      localStorage.setItem("refreshToken", newRefreshToken);
    }

    return response;
  },
  (error) => {
    // შევამოწმოდ თუ ამას გვიბრუნებს ზნაჩიტ არავალიდურია
    if (error.response && error.response.status === 403 && error.config) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      // გადავამისამართე
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
