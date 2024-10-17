const useAuthStatus = () => {
  const accessToken = localStorage.getItem("accessToken");
  const isLoggedIn = !!accessToken;

  console.log(isLoggedIn);
  return { isLoggedIn };
};

export default useAuthStatus;
