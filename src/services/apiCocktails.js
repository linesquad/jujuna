import supabase from "./supabase";

const fetchCocktails = async () => {
  let { data, error } = await supabase.from("cocktail").select("*");

  if (error) {
    console.error(error);
    throw new Error("Blog could not be loaded");
  }

  return data;
};

export default fetchCocktails;
