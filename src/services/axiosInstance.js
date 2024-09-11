import axios from "axios";

// აქ იქმნება ინსტანსი სადაც გაწერილი გვექნება ჩვენი ურლ და ჰედერის ფორმა
const axiosInstance = axios.create({
  baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
  },
});

// აქ ვაკავშირებთ ტოკენს და ჩვენს ჰედერს
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// აქ ვჰენდლავთ ჩვენს რეფრეშს
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    // ვნახულობთ ვადა აქვს თუ არა გასული ტოკენს
    if (
      error.response &&
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // აქ ეს არის გარანტია რო არ ცავილუპებით

      try {
        // ჩავარეფრეშეთ ჩვენი ტოკუნიები
        const { data } = await axios.post("/refresh-token", { refreshToken });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        // ჩავყარეთ ჩვენი ტოკენები და ცავარექვესტეთ
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error(
          "Refresh token is invalid or expired. Logging out.",
          refreshError
        );
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // აქ გავუშვით მაწონზე რიჩარდმა დავაი ნახუიო
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
