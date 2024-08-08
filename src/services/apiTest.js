import supabase from "./supabase";

export const fetchTestApi = async () => {
  let { data, error } = await supabase.from("cocktailV1").select("id");

  if (error) {
    console.error(error);
    throw new Error("Test could not be loaded");
  }

  return data;
};
