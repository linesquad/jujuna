import axiosInstance from "./axiosInstance";

const URL = process.env.REACT_APP_URL;

export const fetchCocktails = async () => {
  try {
    const res = await fetch(`${URL}/cocktails`);
    const data = await res.json();
    console.log("cocktails data fetch", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCocktailsId = async (id) => {
  try {
    const res = await fetch(`${URL}/cocktail/${id}`);
    const data = await res.json();
    console.log("cocktails");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCocktailsCategoriesTitle = async () => {
  const { data } = await axiosInstance.get("/cocktail-categories");
  return data;
};

export const fetchCocktailsByCategories = async (id) => {
  if (id.toLowerCase() === "allcocktail" || id.length === 0) return;
  const { data } = await axiosInstance.get(`/category/${id}`);
  return data;
};
