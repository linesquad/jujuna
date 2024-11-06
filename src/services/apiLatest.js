import axios from "axios";
import supabase from "./supabase";
import { run_dev } from "../../config";

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
    const response = await axios.get(`${run_dev}/blogs?isLastThree=true`);
    return response.data;
  } catch (error) {
    console.error("Error fetching latest blog:", error);
    throw error;
  }
};
