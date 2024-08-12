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

export const fetchCocktailsId = async (id) => {
  let { data, error } = await supabase
    .from("cocktail")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching Cocktails: ", error);
    throw new Error("Failed to fetch Cocktails");
  }

  return data;
};
