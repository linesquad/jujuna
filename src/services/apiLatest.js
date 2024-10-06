import axios from "axios";
import supabase from "./supabase";
const URL = "https://jujuna-d95aafb94bb9.herokuapp.com";

export const fetchLatestCocktails = async () => {
  let { data, error } = await supabase
    .from("cocktail")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error(error);
    throw new Error("Cocktail could not be loaded");
  }

  return data;
};

export const fetchLatestBlogs = async () => {
  try {
    const response = await axios.get(`${URL}/blogs?isLastThree=true`);
    return response.data;
  } catch (error) {
    console.error("Error fetching latest blog:", error);
    throw error;
  }
};
