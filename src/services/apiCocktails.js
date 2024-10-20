import axiosInstance from "./axiosInstance";

import { run_time_url } from "../../config";

export const fetchCocktails = async () => {
  try {
    const res = await fetch(`${run_time_url}/cocktails`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCocktailsId = async (id) => {
  try {
    const res = await fetch(`${run_time_url}/cocktail/${id}`);
    const data = await res.json();
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
  if (id.toLowerCase() === "allcocktail" || id.length === 0) return [];
  const { data } = await axiosInstance.get(`/category/${id}`);
  return data;
};
