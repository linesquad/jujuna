import supabase from "./supabase";

const fetchWines = async () => {
  let { data, error } = await supabase.from("wine").select("*");

  if (error) {
    console.error(error);
    throw new Error("Blog could not be loaded");
  }

  return data;
};

export default fetchWines;
