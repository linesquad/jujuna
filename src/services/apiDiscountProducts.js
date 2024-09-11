const URL = "http://localhost:8001";

export const fetchDiscountProducts = async () => {
  try {
    const res = await fetch(`${URL}/discount`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
